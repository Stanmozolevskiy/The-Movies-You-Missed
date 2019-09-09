import React, { Component } from "react";
import axios from "axios";


class Movie extends Component {
  state = {
    search: "",
    movies: []
  };

  // search
  getData = async () => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key={}&query=${this.state.search}&language=en-US&page=1&include_adult=false`
    );
    this.setState({ movies: movies.data.results });
  };

  // get populat movies
  async componentDidMount() {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key={}&language=en-US&page=1"
    );
    this.setState({ movies: movies.data.results });
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Search for a movie header</h1>
            <div className="active-cyan-3 active-cyan-4 mb-4">
              <input
                className="form-control"
                onChange={this.handleChange}
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <br />
              <br />
              <button className="btn" onClick={this.getData}>
                Search
              </button>
            </div>
          </div>
        </section>

        <div className="album py-10 bg-light">
          <div className="container ">
            <div className="row">
              {this.state.movies.map(movie => (
                <div key={movie.id} className="card mb-3 col-5 m-4 mx-auto">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                        className="card-img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text d-inline-block  multiline-ellipsis">
                          {movie.overview}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
