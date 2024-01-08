import { Button, Card, Carousel, Image } from "antd";
import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
// import YouTube from "react-youtube";
import { useDispatch } from "react-redux";
import { disableLoading, enableLoading } from "../../redux/LoadingSlice";
import MovieItem from "./MovieItem";

const ListFilm = () => {
  const [listFilm, setListFilm] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(enableLoading());
    listAPI
      .get_list_film()
      .then((res) => {
        setListFilm(res.data.content);
        // dispatch(disableLoading());
      })
      .catch((err) => {
        console.log(err);
        // dispatch(disableLoading());
      });
  }, []);
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  console.log(listFilm);
  const setting = {
    autoplay: true,
  };
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Danh sách phim</h2>
        <div className="grid grid-cols-4 gap-5">
          {listFilm.map((movie, index) => (
            <MovieItem
              key={movie.maPhim}
              movieId={movie.maPhim}
              image={movie.hinhAnh}
              movieName={movie.tenPhim}
              description={movie.moTa}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListFilm;
