import http from "./http";

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export function getTvShows(serch, page) {
  return http.get(
    `${baseUrl}3/search/tv?api_key=${apiKey}&query=${serch}&language=en-US&&page=${page}&include_adult=false`
  );
}
export function getTvShow(id) {
  return http.get(
    `${baseUrl}/3/tv/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos,credits,external_ids,keywords,reviews,account_states,translations`
  );
}
export function getPopularTvShows(page) {
  return http.get(
    `${baseUrl}3/tv/popular?api_key=${apiKey}&language=en-US&&page=${page}`
  );
}
