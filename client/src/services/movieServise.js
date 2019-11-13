import http from "./http";
const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export function getMovies(serch, page) {
  return http.get(
    `${baseUrl}3/search/movie?api_key=${apiKey}&query=${serch}&language=en-US&page=${page}&include_adult=false`
  );
}
export function getMovie(id) {
  return http.get(
    `${baseUrl}/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos,credits,external_ids,keywords,reviews,account_states,translations,images&include_image_language=en,null`
  );
}
export function getPopularMovies(page, adult = "false") {
  return http.get(
    `${baseUrl}3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}&region=US`
  );
}
export function getMovieCollection(collection_id) {
  return http.get(
    `${baseUrl}3/collection/${collection_id}?api_key=${apiKey}&language=en-US`
  );
}
export function getMovieRecomended(id) {
  return http.get(
    `${baseUrl}3/movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
  );
}
export function getTrendingMovies() {
  return http.get(
    `${baseUrl}3/trending/movie/week?api_key=${apiKey}&language=en-US&page=1&region=US`
  );
}
