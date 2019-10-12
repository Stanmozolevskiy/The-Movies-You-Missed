import http from "./http";

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export function getPerson(serch, page) {
  return http.get(
    `${baseUrl}3/search/person?api_key=${apiKey}&query=${serch}&language=en-US&&page=${page}&include_adult=false`
  );
}
export function getPopularPerson(page) {
  return http.get(
    `${baseUrl}3/person/popular?api_key=${apiKey}&language=en-US&&page=${page}`
  );
}
