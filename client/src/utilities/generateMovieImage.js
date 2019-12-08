export function isMovieFree(movieId, containsArray) {
  if (containsArray.length > 0) {
    return containsArray.filter(x => x == movieId).length == 0;
  }
  return true;
}

export function isGenreFree(genreId, containsArray) {
  if (containsArray.length > 0) {
    return containsArray.filter(x => x == genreId).length == 0;
  }
  return true;
}

export function doesMovieContainGenre(genreId, movie) {
  return movie.genre_ids.filter(x => x == genreId).length > 0;
}
