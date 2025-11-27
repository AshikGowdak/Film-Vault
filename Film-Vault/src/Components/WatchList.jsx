import React from "react";
import Poster from "../poster.png";

function WatchList({watchlist}) {
  return (
    <>
      {/* CREATED FILTER BUTTONS */}
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-12 w-32 bg-blue-300  rounded-lg text-white font-bold mx-3 hover:cursor-pointer">
          Action
        </div>
        <div className="flex justify-center items-center h-12 w-32 bg-blue-300  rounded-lg text-white font-bold mx-3 hover:cursor-pointer">
          Action
        </div>
        
      </div>

      {/* CREATED TABLE FOR WATCHLIST */}
      <div className="flex justify-center my-5 ">
        <input
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
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>

            {watchlist.map((movieObj) => {
              return <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img className="h-24 w-40 rounded-lg " src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
                <div className="mx-4">{movieObj.title}</div>
              </td>

              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>action</td>

              <td className="text-red-600">Delete</td>
            </tr>
            })}
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
