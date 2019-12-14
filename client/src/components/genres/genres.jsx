import React, { Component } from "react";
import { getMoviegenres } from "../../services/genreServise";
import { getPopularMovies } from "../../services/movieServise";
import {
  isMovieFree,
  isGenreFree,
  doesMovieContainGenre,
  getGenreImageUrl
} from "../../utilities/generateMovieImage";

class Genres extends Component {
  state = {
    genres: [],
    popularMovies: [],
    usedMoviesList: [],
    usedGenreList: [],
    ImageUrlList: []
  };

  getGenreUrl = (genresArray, usedGenreList, moviesArray, usedMoviesList) => {
    for (let i = 0; i < genresArray.length; i++) {
      //go vover each genre
      if (isGenreFree(genresArray[i], usedGenreList)) {
        // if it is free
        for (let j = 0; j < moviesArray.length; j++) {
          if (
            doesMovieContainGenre(genresArray[i].id, moviesArray[j]) &&
            isMovieFree(moviesArray[j].id, usedMoviesList)
          ) {
            let updateGenre = this.state.usedGenreList;
            updateGenre.push(genresArray[i].id);
            let updateMovie = this.state.usedMoviesList;
            updateMovie.push(moviesArray[j].id);
            let updateImageUrl = this.state.ImageUrlList;
            updateImageUrl.push({
              genreId: genresArray[i].id,
              movieUrl: moviesArray[j].poster_path
            });
            this.setState({
              usedGenreList: updateGenre,
              usedMoviesList: updateMovie,
              ImageUrlList: updateImageUrl
            });
            break;
          }
        }
      }
    }
  };

  async componentDidMount() {
    const genres = await getMoviegenres();
    const popularMovies1 = await getPopularMovies(1);
    const popularMovies2 = await getPopularMovies(2);
    const popularMovies3 = await getPopularMovies(3);
    const popularMovies4 = await getPopularMovies(4);
    const popularMovies5 = await getPopularMovies(5);
    const popularMovies6 = await getPopularMovies(6);
    const popularMovies7 = await getPopularMovies(7);
    const popularMovies8 = await getPopularMovies(8);
    const popularMovies9 = await getPopularMovies(9);
    const popularMovies10 = await getPopularMovies(10);
    const fortyMovies = popularMovies1.data.results.concat(
      popularMovies2.data.results
    );
    const sixtyMovies = fortyMovies.concat(popularMovies3.data.results);
    const eightyMovies = sixtyMovies.concat(popularMovies4.data.results);
    const hundredMovies = eightyMovies.concat(popularMovies5.data.results);
    const hundredTwantyMovies = hundredMovies.concat(
      popularMovies6.data.results
    );
    const hundredFortyMovies = hundredTwantyMovies.concat(
      popularMovies7.data.results
    );
    const hundredSixtyMovies = hundredFortyMovies.concat(
      popularMovies8.data.results
    );
    const hundredEightyMovies = hundredSixtyMovies.concat(
      popularMovies9.data.results
    );
    const twoHandredsMovies = hundredEightyMovies.concat(
      popularMovies10.data.results
    );

    this.setState({
      genres: genres.data.genres.filter(x => x.id != 10770),
      popularMovies: twoHandredsMovies.sort(
        (a, b) => b.popularity - a.popularity
      )
    });
    this.getGenreUrl(
      this.state.genres,
      this.state.usedGenreList,
      this.state.popularMovies,
      this.state.usedMoviesList
    );
  }
  render() {
    if (this.state.genres.length == 0 || this.state.ImageUrlList.length == 0) {
      return "";
    } else {
      return (
        <div className="container">
          <div className="row">
            {this.state.genres
              .sort((a, b) => a.id - b.id)
              .map(x => (
                <div
                  className="card col-3"
                  style={{ width: "18rem", margin: "4%", padding: "0px" }}
                  key={x.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${getGenreImageUrl(
                      x.id,
                      this.state.ImageUrlList
                    )}`}
                    // if undefined use preset
                    // src={`${window.location.origin}/genres/${x.id}.jpg`}
                    className="card-img-top"
                  />

                  <div className="card-body">
                    <strong>{x.name + " " + x.id}</strong>
                  </div>
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}

export default Genres;
