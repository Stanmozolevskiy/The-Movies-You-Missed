import http from './http'


const baseUrl = process.env.REACT_APP_BASE_URL
const apiKey = process.env.REACT_APP_API_KEY

export function getMovies(serch, page) {
    return http.get(`${baseUrl}3/search/movie?api_key=${apiKey}&query=${serch}&language=en-US&&page=${page}&include_adult=false`)
}
export function getPopularMovies(page) {
    return http.get(`${baseUrl}3/movie/popular?api_key=${apiKey}&language=en-US&&page=${page}`)
}