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

export const removeCookie = (name) => {
  return cookies.remove(name);
};
