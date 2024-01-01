import React from "react";
import Banner from "./Banner";
import LichChieuRap from "./LichChieuRap";
import MovieShowing from "./MovieShowing";
const HomePage = () => {

  return (
    <div>
      <Banner />
    
      <MovieShowing />
      <div className="container space-y-10 mt-10">
        <LichChieuRap />
      </div>
    </div>
  );
};

export default HomePage;
