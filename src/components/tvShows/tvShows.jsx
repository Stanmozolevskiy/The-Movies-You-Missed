import React, { Component } from "react";
import { getTvShows, getPopularTvShows } from "../../services/tvShowServise";
import { totalPages } from "../common/pagination";
import { getTvgenres, serchTvByGenre } from "../../services/genreServise";
import { handleSearch } from '../../services/searchService'
import MovieContainer from '../movies/movieContainer'
import Paginateion from "../common/pagination";
import SearchBox from "../common/searchBox";
import Title from "../common/title";
import GroupList from "../common/groupList";

class TvShow extends Component {
  constructor(prpos) {
    super(prpos);

    this.state = {
      search: "",
      genreSerch: "",
      genres: [],
      data: [],
      totalPages: [],
      curentPage: 1,
      forcePage: 0,
      title: "Popular TV Shows"
    };
  }

  // get populat movies
  async componentDidMount() {
    const data = await getPopularTvShows(this.state.curentPage);
    const genres = await getTvgenres();
    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      genres: genres.data.genres,
      totalPages: totalPages(data)
    });
  }
  // genreChange
  handleGenreChange = async e => {
    this.setState({
      genreSerch: this.state.genres.filter(
        g => g.id === Number(e.target.value)
      )[0].name
    });
    const data = await serchTvByGenre(e.target.value, 1);
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


  handlePageChange = async ({ selected }) => {
    const page = selected + 1;

    if (this.state.search === "") {
      this.setState({ curentPage: page });
      const data = await getPopularTvShows(page);
      this.setState({ data: data.data.results });
    }
    if (this.state.search !== "") {
      const data = await getTvShows(this.state.search, page);
      this.setState({ data: data.data.results });
    }
  };

  render() {
    return (
      <div>
        <SearchBox onSearchSubmit={handleSearch} />

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
                <MovieContainer key={data.id} data={data} props={this.props} />
              ))}
            </div>
          </div>
        </div>
        <Paginateion
          totalPages={this.state.totalPages}
          search={this.state.search}
          handlePageChange={this.handlePageChange}
          forcePage={this.state.forcePage}
        />
      </div>
    );
  }
}

export default TvShow;
