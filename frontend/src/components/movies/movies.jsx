import React, { Component } from "react";
import { getMovies, getPopularMovies } from '../../services/movieServise'
import MovieContainer from './movieContainer'

class Movie extends Component {
  state = {
    search: "",
    movies: []
  };

  // search
  getData = async () => {
    const movies = await getMovies(this.state.search)
    this.setState({ movies: movies.data.results });
  };

  // get populat movies
  async componentDidMount() {
    const movies = await getPopularMovies()
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

        {/* <div className="album py-10 bg-light"> */}
          <div className="container ">
            <div className="row">
              {this.state.movies.map(movie => (
                <MovieContainer key={movie.id} data={movie} />
              ))}
            </div>
          </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Movie;
