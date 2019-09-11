import React, { Component } from "react";
import { getMovies, getPopularMovies } from "../../services/movieServise";
import MovieContainer from "./movieContainer";
import ReactPaginate from 'react-paginate';

class Movie extends Component {
  state = {
    search: "",
    movies: [],
    totalPages: [],
    curentPages: '',
    curentPage: 1
  };

  // search
  getData = async () => {
    const movies = await getMovies(this.state.search, 1);

    this.setState({ movies: movies.data.results });
    this.setState({ curentPage: movies.data.page });
    this.setState({ totalPages: [...Array(movies.data.total_pages).keys()].filter(x => x !== 0) });
  };

  // get populat movies
  async componentDidMount() {
    const movies = await getPopularMovies(this.state.curentPage);

    this.setState({ movies: movies.data.results });
    this.setState({ curentPage: movies.data.page });
    this.setState({ totalPages: [...Array(movies.data.total_pages).keys()].filter(x => x !== 0) });

  }

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  handlePageChange = async data => {
    const selected = data.selected + 1;

    if (this.state.search === "") {
      this.setState({ curentPage: selected });
      const movies = await getPopularMovies(selected);
      this.setState({ movies: movies.data.results });
    }
    if (this.state.search !== "") {
      const movies = await getMovies(this.state.search, selected);
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
                onChange={this.handleSearch}
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

        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.totalPages.length - 1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageChange}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          pageLinkClassName={'each-page-paginate'}
        />

      </div>
    );
  }
}

export default Movie;
