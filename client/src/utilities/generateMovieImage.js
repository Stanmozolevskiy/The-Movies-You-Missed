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
export function getGenreImageUrl(genreId, array) {
  if (array.length >= 15 && array.find(x => x.genreId == genreId))
    return `https://image.tmdb.org/t/p/original/${
      array.filter(x => x.genreId == genreId)[0].movieUrl
    }`;
  else {
    return `${window.location.origin}/genres/${genreId}.jpg`;
  }
}
