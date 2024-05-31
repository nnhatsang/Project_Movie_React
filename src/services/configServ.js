import axios from "axios";
import { getLocal } from "../utils/Local";
let dataUser = getLocal();
// console.log(dataUser.accessToken);
export const API = axios.create({
  // đoạn đầu URL sử dụng chung của tất cả các request
  baseURL: "https://movienew.cybersoft.edu.vn/",
  headers: {
    TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M`,
    Authorization: `Bearer ${dataUser ? dataUser.accessToken : null}`,
  },
  timeout: 15000,
});
