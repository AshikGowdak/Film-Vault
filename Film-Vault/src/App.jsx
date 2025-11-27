import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";
import { useState } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Banner from "./Components/Banner";

function App() {

  let[watchlist,setWatchList] = useState([])

  // Function to add movie to watchlist
  let handleAddToWatchList=(movieObj)=>{
      let newWatchList=[...watchlist,movieObj];
      //used local storage to store watchlist data
      localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
      setWatchList(newWatchList)
      console.log(newWatchList)
  }

  // Function to remove movie from watchlist
  let handleRemoveFromWatchList=(movieObj)=>{
    let filterWatchlist= watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })

    setWatchList(filterWatchlist)
    console.log(filterWatchlist)
  }

// To load watchlist from local storage when app loads
  useEffect(()=>{
    let moviesFromLocalStorage =  localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
              
                <Banner /> <Movies  watchlist={watchlist} handleAddToWatchList={handleAddToWatchList}  handleRemoveFromWatchList={handleRemoveFromWatchList}/>
              </>
            }
          />
          <Route path="/WatchList" element={<WatchList watchlist={watchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
