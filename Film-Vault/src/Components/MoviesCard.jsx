import React from "react";

function MoviesCard({poster_path , name}) {
  return (
    
    // Movie Card Container
    <div
      className="h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 cursor-pointer transition-all duration-300"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

        <div className="bg-gray-700/50 text-white  w-full text-center p-1 rounded-t-lg">
          {name}
        </div>
    </div>
  );
}

export default MoviesCard;
