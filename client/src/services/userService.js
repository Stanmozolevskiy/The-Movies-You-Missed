import http from "./http";

export function regester(user) {
  return http.post(`${window.location.origin}/api/users`, {
    name: user.name,
    email: user.email,
    password: user.password
  });
}
export function singnIn(user) {
  return http.post(`${window.location.origin}/api/auth`, {
    email: user.email,
    password: user.password
  });
}

export function regesterWithAccount(user) {
  return http.post(`${window.location.origin}/api/userswithaccount`, {
    confirmed: user.confirmed,
    name: user.name,
    email: user.email,
    password: user.password
  });
}

export function singnInWithAccount(user) {
  return http.post(`${window.location.origin}/api/auth`, {
    email: user.email,
    password: user.password
  });
}
