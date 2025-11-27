import React from "react";

function MoviesCard({
  movieObj,
  poster_path,
  name,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  // Function to check if movie is already in watchlist
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    // Movie Card Container
    <div
      className="h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 cursor-pointer transition-all duration-300 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {/* TOGGLES THE WATCHLIST BUTTON */}
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-950"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-950"
        >
          &#128525;
        </div>
      )}

      <div className=" text-white text-xl  w-full text-center bg-gray-950/50 p-2 rounded-b-lg">
        {name}
      </div>
    </div>
  );
}

export default MoviesCard;
