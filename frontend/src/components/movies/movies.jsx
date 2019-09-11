import React, { Component } from "react";
import { getMovies, getPopularMovies } from "../../services/movieServise";
import MovieContainer from "./movieContainer";
import Pagination from "../common/pagination";

class Movie extends Component {
  state = {
    search: "",
    movies: [],
    curentPage: 1,
    totalPages: []
  };

  // search
  getData = async () => {
    const movies = await getMovies(this.state.search, 1);
    this.setState({ movies: movies.data.results });
    this.setState({ curentPage: movies.data.page });
    this.setState({ totalPages: [...Array(movies.data.total_pages).keys()] });
    console.log(movies);
  };

  // get populat movies
  async componentDidMount() {
    const movies = await getPopularMovies(this.state.curentPage);
    console.log(movies);
    this.setState({ movies: movies.data.results });
    this.setState({ curentPage: movies.data.page });
    this.setState({ totalPages: [...Array(movies.data.total_pages).keys()] });
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handlePageChange = async e => {
    e.preventDefault();
    if (this.state.search === "") {
      this.setState({ curentPage: e.target.value });
      const movies = await getPopularMovies(e.target.value);
      this.setState({ movies: movies.data.results });
    }
    if (this.state.search !== "") {
      const movies = await getMovies(this.state.search, e.target.value);
      this.setState({ movies: movies.data.results });
    }
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

        <div className="container ">
          <div className="row">
            {this.state.movies.map(movie => (
              <MovieContainer key={movie.id} data={movie} />
            ))}
          </div>
        </div>
        <Pagination
          curentPage={this.state.curentPage}
          totalPages={this.state.totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movie;
