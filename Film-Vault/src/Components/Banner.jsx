import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-no-repeat bg-center `bg-[length:100%_100%]` flex items-end"
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2x7_R5b6voc_Zo4OhBmj_YtMVyB2BWBwmKQ&s)`,
      }}
    >
      <div className="text-xl bg-gray-900/60 text-white text-center w-full p-4">
        Avengers
      </div>
    </div>
  );
}

export default Banner;
