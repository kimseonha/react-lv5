import axios from "axios";

const todoAxios = axios.create({
    baseURL: "https://paper-dandy-carrot.glitch.me",
});

export default todoAxios;




// // axios 인스턴스 생성
// const api = axios.create({
//   baseURL: "http://3.38.191.164", // 기본 URL
// });

