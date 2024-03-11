// const [cookies, setCookie, removeCookie] = useCookies();
// setCookie('키값','데이터값',{path,expires,maxAge...})
// cookie.js

import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name, options) => {
  return cookies.remove(name, {...options});
};

// 온니쿠키 = 안전하게 쿠키를 보관 
// 쿠키는 프론트가 관리하는것 보단 브라우저가 저장소를관리하는 것임
