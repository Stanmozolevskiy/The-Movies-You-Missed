import React, { Component } from "react";
import { getMoviegenres } from "../../services/genreServise";
import { getPopularMovies } from "../../services/movieServise";
import { Link } from "react-router-dom";
import {
  isMovieFree,
  isGenreFree,
  doesMovieContainGenre,
  getGenreImageUrl
} from "../../utilities/generateMovieImage";

class Genres extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      genres: [],
      popularMovies: [],
      usedMoviesList: [],
      usedGenreList: [],
      ImageUrlList: []
    };
  }

  getGenreUrl = (genresArray, usedGenreList, moviesArray, usedMoviesList) => {
    for (let i = 0; i < genresArray.length; i++) {
      if (isGenreFree(genresArray[i], usedGenreList)) {
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
    const hundredMovies = [
      ...popularMovies1.data.results,
      ...popularMovies2.data.results,
      ...popularMovies3.data.results,
      ...popularMovies4.data.results,
      ...popularMovies5.data.results
    ];
    this.setState({
      genres: genres.data.genres.filter(x => x.id != 10770),
      popularMovies: hundredMovies.sort((a, b) => b.popularity - a.popularity)
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
                  style={{
                    width: "18rem",
                    margin: "4%",
                    padding: "0px",
                    cursor: "pointer"
                  }}
                  key={x.id}
                >
                  <Link to={`${x.id}`}>
                    <img
                      src={`${getGenreImageUrl(x.id, this.state.ImageUrlList)}`}
                      className="card-img-top"
                    />
                    <div className="card-body" style={{ textAlign: "center" }}>
                      <strong>{x.name}</strong>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}

export default Genres;
