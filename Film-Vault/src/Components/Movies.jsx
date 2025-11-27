import React from "react";
import { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  // State to hold movies data
  const [movies, setMovies] = useState([]);

  // State to hold current page number
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  // Function to handle next page
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  // Fetching popular movies using useEffect
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ba712333be9e4b03c2005b06dfd50bc8&language=en-US&page=${pageNo}%27`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="text-2xl font-bold text-center p-5"> Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around gap-6">
        {movies.map((movieObj) => {
          return (
            <MoviesCard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchlist={watchlist}
            />
          );
        })}
      </div>

      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=ba712333be9e4b03c2005b06dfd50bc8&language=en-US&page=1%27
