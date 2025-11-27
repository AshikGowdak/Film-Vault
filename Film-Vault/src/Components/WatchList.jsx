import React, { useEffect, useState } from "react";
import Poster from "../poster.png";
import genreids from "../Utility/genre";

function WatchList({ watchlist, setWatchlist , handleRemoveFromWatchList}) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  // Function to handle search input
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Function to handle genre filter
  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  // Function to sort ratings in decreasing order
  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchlist([...sortedIncreasing]);
  };

  // Function to sort ratings in increasing order
  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchlist([...sortedDecreasing]);
  };

  // To set genre list for filter buttons
  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      {/* CREATED FILTER BUTTONS */}
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center h-12 w-32 bg-blue-300  rounded-lg text-white font-bold mx-3 hover:cursor-pointer"
                  : "flex justify-center items-center h-12 w-32 bg-gray-300  rounded-lg text-white font-bold mx-3 hover:cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* CREATED TABLE FOR WATCHLIST */}
      <div className="flex justify-center my-5 ">
        <input
          onChange={handleSearch}
          value={search}
          className="h-12 w-72  bg-gray-200 outline-none rounded-2xl px-3"
          type="text"
          placeholder="Search Movies"
        />
      </div>

      <div className="border border-gray-300 m-8 rounded-lg overflow-hidden">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2 ">
            <tr>
              <th>Title</th>
              <th className="flex justify-center items-center">
                <div
                  className="p-2 hover:cursor-pointer"
                  onClick={sortIncreasing}
                >
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div
                  className="p-2 hover:cursor-pointer"
                  onClick={sortDecreasing}
                >
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {/* SEARCHING COONDITION   */}
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                }
                return genreids[movieObj.genre_ids[0]] == currGenre;
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-24 w-40 rounded-lg "
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-4">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td className="text-red-600 hover:cursor-pointer" onClick={() => handleRemoveFromWatchList(movieObj)}>Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
