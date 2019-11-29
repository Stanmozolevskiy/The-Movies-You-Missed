import http from "./http";
require("dotenv/config");

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3900";
} else {
  baseURL = window.location.origin;
}
export function regester(user) {
  return http.post(`${baseURL}/api/users`, {
    name: user.name,
    email: user.email,
    password: user.password
  });
}
export function singnIn(user) {
  return http.post(`${baseURL}/api/auth`, {
    email: user.email,
    password: user.password
  });
}

export function regesterWithAccount(user) {
  return http.post(`${baseURL}/api/userswithaccount`, {
    confirmed: true,
    name: user.user.name,
    email: user.user.email,
    password: user.user.password
  });
}

export function singnInWithAccount(user) {
  return http.post(`${baseURL}/api/auth`, {
    email: user.email,
    password: user.password
  });
}
