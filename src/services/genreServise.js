import http from "./http";
const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export function getAllgenres() {
  return http.get(
    `${baseUrl}/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
}

