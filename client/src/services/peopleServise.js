import http from "./http";

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export function getPerson(serch, page) {
  return http.get(
    `${baseUrl}3/search/person?api_key=${apiKey}&query=${serch}&language=en-US&&page=${page}&include_adult=false`
  );
}
export function getPersonDetails(id) {
  return http.get(
    `${baseUrl}3/person/${id}?api_key=${apiKey}&language=en-US&append_to_response=known_for_department`
  );
}
export function getPopularPerson(page) {
  return http.get(
    `${baseUrl}3/person/popular?api_key=${apiKey}&language=en-US&&page=${page}`
  );
}
