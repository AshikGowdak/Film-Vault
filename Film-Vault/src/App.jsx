import React from "react";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Banner from "./Components/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies />
              </>
            }
          />
          <Route path="/WatchList" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
