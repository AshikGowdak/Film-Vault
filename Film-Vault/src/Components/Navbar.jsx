import React from "react";
import Logo from "../logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky flex border space-x-8 items-center z-index-10 top-0 bg-white h-16 shadow-md">
      <img className="w-[50px] ml-2 rounded-3xl" src={Logo} alt="" />

      <Link to="/" className="ml-4 text-blue-500 text-2xl font-bold font-serif">
        Movies
      </Link>

      <Link
        to="/WatchList"
        className="ml-4 text-blue-500 text-2xl font-bold font-serif"
      >
        WatchList
      </Link>
    </div>
  );
}

export default Navbar;
