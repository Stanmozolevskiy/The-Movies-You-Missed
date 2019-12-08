import React, { Component } from "react";
import { getMoviegenres } from "../../services/genreServise";
import { getPopularMovies } from "../../services/movieServise";
import {
  isMovieFree,
  doesMovieContainGenre
} from "../../utilities/generateMovieImage";

class Genres extends Component {
  state = {
    genres: [],
    popularMovies: [],
    usedMoviesList: [],
    ImageUrlList: []
  };

  // populateTheUrl = (genreId, movie, usedMoviesList, urlList) => {
  //   if (
  //     doesMovieContainGenre(genreId, movie) == true &&
  //     isMovieFree(movie.id, usedMoviesList) == true
  //   ) {
  //     let updateUsedMoviesList = usedMoviesList;
  //     updateUsedMoviesList.push(movie.id);
  //     let updateUrlList = urlList;
  //     updateUrlList.push({ path: movie.poster_path, genreId: genreId });
  //     this.setState({
  //       ImageUrlList: updateUrlList,
  //       usedMoviesList: updateUsedMoviesList
  //     });
  //   } else {
  //     console.log(false);
  //   }
  // };

  async componentDidMount() {
    const genres = await getMoviegenres();
    const popularMovies1 = await getPopularMovies(1);
    const popularMovies2 = await getPopularMovies(2);
    const popularMovies3 = await getPopularMovies(3);
    const fortyMovies = popularMovies1.data.results.concat(
      popularMovies2.data.results
    );
    let sixtyMovies = fortyMovies.concat(popularMovies3.data.results);
    this.setState({
      genres: genres.data.genres,
      popularMovies: sixtyMovies
        .sort((a, b) => b.popularity - a.popularity)
        .filter(x => x.vote_count >= 1000)
    });
  }
  render() {
    if (this.state.genres.length == 0) {
      return "";
    } else {
      // console.log(this.state);

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
                    src={`${window.location.origin}/genres/${x.id}.jpg`}
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
