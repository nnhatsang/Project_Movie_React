import React from "react";
import Banner from "./Banner";
import LichChieuRap from "./LichChieuRap";
import ListFilm from "./ListFilm";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="container space-y-10 mt-10">
        <ListFilm />
        <LichChieuRap />
      </div>
    </div>
  );
};

export default HomePage;
