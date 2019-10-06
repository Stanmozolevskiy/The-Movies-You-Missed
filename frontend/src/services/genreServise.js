import http from "./http";
const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export function getMoviegenres() {
  return http.get(
    `${baseUrl}3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
}
export function discoverMovie(genreId, page, year, sortBy = "popularity.desc") {
  return http.get(
    `${baseUrl}3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=en-US&primary_release_year=${year}&sort_by=${sortBy}&include_adult=false&include_video=true&page=${page}`
  );
}
export function discoverTv(genreId, page, year, sortBy = "popularity.desc") {
  return http.get(
    `${baseUrl}3/discover/tv?api_key=${apiKey}&with_genres=${genreId}&language=en-US&first_air_date_year=${year}&sort_by=${sortBy}&include_adult=false&include_video=true&page=${page}`
  );
}
export function getTvgenres() {
  return http.get(
    `${baseUrl}3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
}
export function serchTvByGenre(genreId, page) {
  return http.get(
    `${baseUrl}3/discover/tv?api_key=${apiKey}&with_genres=${genreId}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`
  );
}
