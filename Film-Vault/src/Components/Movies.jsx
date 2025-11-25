import React from "react";
import MoviesCard from "./MoviesCard";

function Movies() {
  return (
    <div>
      <div className="text-2xl font-bold text-center p-5"> Trending Movies</div>


      <div className="flex flex-row flex-wrap justify-around pb-10 gap-6">

        <MoviesCard/>

      </div>
    </div>

    
  );
}

export default Movies;


// https://api.themoviedb.org/3/movie/popular?api_key=ba712333be9e4b03c2005b06dfd50bc8&language=en-US&page=1%27