import React, { Component } from "react";
import { getMovies, getPopularMovies } from "../../services/movieServise";
import { getMoviegenres, serchMovieByGenre } from "../../services/genreServise";
import { totalPages } from "../common/pagination";
import MovieContainer from "../common/movieContainer";
import Paginateion from "../common/pagination";
import Header from "../common/header";
import SearchBox from "../common/searchBox";
import Title from "../common/title";
import GroupList from "../common/groupList";

class Movie extends Component {
  constructor(prpos) {
    super(prpos);

    this.state = {
      search: "",
      genreSerch: "",
      data: [],
      genres: [],
      totalPages: [],
      curentPage: 1,
      forcePage: 0,
      title: "Popular Movies"
    };
  }
  // get populat movies
  async componentDidMount() {
    const data = await getPopularMovies(this.state.curentPage);
    const genres = await getMoviegenres();
    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      genres: genres.data.genres,
      totalPages: totalPages(data)
    });
  }

  // search
  getData = async e => {
    if (e.key === "Enter" && this.state.search !== "") {
      const data = await getMovies(this.state.search, 1);
      this.setState({
        genreSerch: "",
        data: data.data.results,
        curentPage: data.data.page,
        //work around for page get back to 1
        forcePage: null,
        totalPages: totalPages(data),
        // handeling the title change
        title: `Search > ${this.state.search.charAt(0).toUpperCase() +
          this.state.search.slice(1)}`
      });
      //work around for page get back to 1
      this.setState({ forcePage: 0 });
    }
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  // genreChange
  handleGenreChange = async e => {
    this.setState({
      genreSerch: this.state.genres.filter(
        g => g.id === Number(e.target.value)
      )[0].name
    });
    const data = await serchMovieByGenre(e.target.value, 1);
    this.setState({
      search: "",
      data: data.data.results,
      curentPage: data.data.page,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      // handeling the title change
      title: `Search > ${this.state.genreSerch.charAt(0).toUpperCase() +
        this.state.genreSerch.slice(1)}`
    });
    //work around for page get back to 1
    this.setState({ forcePage: 0 });
  };

  // move this to paginate
  handlePageChange = async ({ selected }) => {
    const page = selected + 1;

    if (this.state.search === "") {
      const data = await getPopularMovies(page);
      this.setState({
        curentPage: page,
        data: data.data.results
      });
    }
    if (this.state.search !== "") {
      const data = await getMovies(this.state.search, page);
      this.setState({ data: data.data.results });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBox onSearch={this.handleSearch} onSearchSubmit={this.getData} />
        <div className="parent-container d-flex ">
          <GroupList
            data={this.state.genres}
            onGenreChange={this.handleGenreChange}
          />

          <div className="container">
            <div className="row">
              <Title text={this.state.title} />
            </div>
            <div className="row">
              {this.state.data.map(data => (
                <MovieContainer key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>

        <Paginateion
          totalPages={this.state.totalPages}
          handlePageChange={this.handlePageChange}
          forcePage={this.state.forcePage}
        />
      </div>
    );
  }
}

export default Movie;
