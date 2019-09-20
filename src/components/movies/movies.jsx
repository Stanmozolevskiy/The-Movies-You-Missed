import React, { Component } from "react";
import { getMovies, getPopularMovies } from "../../services/movieServise";
import { getAllgenres } from '../../services/genreServise'
import { totalPages } from "../common/pagination";
import MovieContainer from "../common/movieContainer";
import Paginateion from "../common/pagination";
import Header from "../common/header";
import SearchBox from "../common/searchBox";
import Title from "../common/title";
import GroupList from '../common/groupList'

class Movie extends Component {

  constructor(prpos) {
    super(prpos);

    this.state = {
      search: "",
      data: [],
      genres: [],
      totalPages: [],
      curentPages: "",
      curentPage: 1,
      title: "Popular Movies",
    };
  }
  // get populat movies

  async componentDidMount() {
    const data = await getPopularMovies(this.state.curentPage);
    const genres = await getAllgenres()
    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      genres: genres.data.genres,
      totalPages: totalPages(data),
    });
    console.log(genres)
  }

  // search
  getData = async e => {
    if (e.key === "Enter" && this.state.search !== "") {
      const data = await getMovies(this.state.search, 1);

      this.setState({
        data: data.data.results,
        curentPage: data.data.page,
        totalPages: totalPages(data),
        title: `Search > ${this.state.search.charAt(0).toUpperCase() +
          this.state.search.slice(1)}`
      });
    }
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };
  handleGenreChange = e => {
    console.log(e.target)
  }

  // move this to paginate
  handlePageChange = async data => {
    const selected = data.selected + 1;

    if (this.state.search === "") {
      const data = await getPopularMovies(selected);
      this.setState({
        curentPage: selected,
        data: data.data.results
      });
    }
    if (this.state.search !== "") {
      const data = await getMovies(this.state.search, selected);
      this.setState({ data: data.data.results });
    }
  };
  render() {
    return (
      <div>
        <Header />
        <SearchBox onSearch={this.handleSearch} onSearchSubmit={this.getData} />
        {/* <div className="container"> */}

        <div className="parent-container d-flex ">
          <GroupList data={this.state.genres} onGenreChange={this.handleGenreChange}  />

          <div className="container">
            <div className="row">
              <Title text={this.state.title} />
            </div>
            <div className="row">
              {this.state.data.map(data => (
                <MovieContainer key={data.id}
                  data={data}

                  />
              ))}
            </div>
          </div>
        </div>

        <Paginateion
          totalPages={this.state.totalPages}
          search={this.state.search}
          handlePageChange={this.handlePageChange}
        />
        {/* </div> */}
      </div>
    );
  }
}

export default Movie;
