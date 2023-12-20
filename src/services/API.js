import { API } from "./configServ";
export const listAPI = {
  get_banner: () => API.get("/api/QuanLyPhim/LayDanhSachBanner"),
  // phim
  get_rap: () => API.get("/api/QuanLyRap/LayThongTinHeThongRap"),

  // phim theo rạp
  get_film_theater: (maHeThongRap) =>
    API.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`
    ),

  // login
  login: (data) => API.post("/api/QuanLyNguoiDung/DangNhap", data),
  // admin
  get_movie: () => API.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`),

  delete_movie: (maPhim) =>
    API.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`),

  addMovie: (data) => {
    return API.post("/api/QuanLyPhim/ThemPhimUploadHinh", data);
  },
};
