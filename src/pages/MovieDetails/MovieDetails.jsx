// import React, { useEffect, useState } from "react";
import Footer from "../../templates/userTemplate/Footer";
import "./MovieDetails.css";
import { listAPI } from "../../services/API";
import nhabanu from "./../../assets/nha-ba-nu.jpg";
import { Rate } from "antd";
import Header from "../../templates/userTemplate/Header";
import LichChieuRap from "../HomePage/LichChieuRap";
const MovieDetails = () => {
  // const [cumRap, setCumRap] = useState([]);
  // useEffect(() => {
  //   listAPI
  //     .get_film_theater(maHeThongRap)
  //     .then((res) => {
  //       setCumRap(res.data.content[0]?.lstCumRap);
  //     })
  //     .catch((err) => console.log(err));
  // }, [maHeThongRap]);
  // console.log(cumRap);
  return (
    <div>
      <Header />
      <section className="movie_details flex justify-center align-middle">
        <div className="mr-10">
          <img src={nhabanu} alt="" />
        </div>
        <div className="content_right">
          <p className="font-bold">28.05.2022</p>
          <h4 className="mt-2 mb-2 font-semibold text-xl">Nhà Bà Nữ</h4>
          <p className="mb-10 ">120 phút</p>
          <button className="rounded-md text-xl">Mua vé</button>
        </div>
        <Rate disabled defaultValue={5} />
      </section>
      <LichChieuRap />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MovieDetails;
