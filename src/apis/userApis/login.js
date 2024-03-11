import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: "http://3.38.191.164", // 기본 URL
  timeout: 1000, // 타임아웃 시간
});

// 회원가입 요청 함수 정의
export const register = async (id, password) => {
  const response = await api.post("/register", { id, password });
  return response.data;
};

// 로그인 요청 함수 정의
export const login = async (id, password) => {
  const response = await api.post("/login", { id, password });
  return response.data;
};

 // 로그아웃 요청 함수 정의
export const logout = async () => {
  const response = await api.post("/logout");
  return response.data;
};

// export const authenticateUser = async (token) => {
//   const response = await api.get("/user", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };
// export default api;

// export const login = async (id, password) => {
//   try {
//     // 로그인 요청을 보내고 응답 데이터를 반환
//     const response = await axios.post("http://3.38.191.164/login", {
//       id,
//       password,
//     });
//     // 응답 데이터에서 토큰만 추출하여 반환
//     return response.data.token;
//   } catch (error) {
//     // 에러가 발생하면 콘솔에 에러 로그를 출력하고 빈 문자열 반환
//     console.error("로그인 요청 에러:", error);
//     return "";
//   }
// };
