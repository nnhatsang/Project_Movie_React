// import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import nhabanu from "./../../assets/nha-ba-nu.jpg";
import "./MovieDetails.css";
const MovieDetails = () => {
  return (
    <div className="bg-green-950 flex h-screen justify-center items-center">
      <div className=" container w-8/12">
        <div className="grid grid-cols-12 ">
          <div className="col-left col-span-3 ">
            <img src={nhabanu} alt="" className=" rounded-md h-28 lg:h-96" />
          </div>
          <div className="col-right text-white col-span-9 flex flex-col justify-center items-baseline ">
            <p className="font-bold">28.05.2022</p>
            <h4 className="mt-2 mb-2 font-semibold text-xl">Nhà Bà Nữ</h4>
            <p className="mb-10 ">120 phút</p>
            <button className="rounded-md text-xl mb-5">Mua vé</button>
            <Rate disabled defaultValue={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
