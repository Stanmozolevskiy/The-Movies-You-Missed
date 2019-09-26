import React, { Component } from "react";
import { getPopularMovies } from "../../services/movieServise";
import { getMoviegenres, discoverMovie } from "../../services/genreServise";
import { totalPages } from "../common/pagination";
import { handleSearch } from '../../services/searchService'
import MovieContainer from "./movieContainer";
import Paginateion from "../common/pagination";
import SearchBox from "../common/searchBox";
import Title from "../common/title";
import GroupList from "../common/groupList";
import DropDown from '../common/dropDown'

class Movie extends Component {
  constructor(prpos) {
    super(prpos);

    this.state = {
      genreSerch: {},
      yearSearch: '',
      data: [],
      genres: [],
      totalPages: [],
      curentPage: 1,
      forcePage: 0,
      title: "Popular Movies",
      render: ''
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
      totalPages: totalPages(data),
      render: getPopularMovies
    });
  }

  // genreChange
  handleGenreChange = async (e) => {
    this.setState({
      genreSerch: this.state.genres.filter(
        g => g.id === Number(e.target.value)
      )[0]

    });
    const data = await discoverMovie(e.target.value, 1, this.state.yearSearch);
    this.setState({
      search: "",
      data: data.data.results,
      curentPage: data.data.page,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      // handeling the title change
      title: `Search > ${this.state.genreSerch.name + ' ' + this.state.yearSearch}`,
      render: discoverMovie
    });
    //work around for page get back to 1
    this.setState({ forcePage: 0 });
  };

  handleYearChange = async ({ value }) => {
    this.setState({ yearSearch: value })
    const data = await discoverMovie(this.state.genreSerch.id || '', 1, value);

    this.setState({
      search: "",
      data: data.data.results,
      curentPage: data.data.page,
      yearSearch: value,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      // handeling the title change
      title: `Search > ${(this.state.genreSerch.name) !== undefined ? this.state.genreSerch.name : ''}` + ' ' + value,
      render: discoverMovie
    });
    // work around for page get back to 1
    this.setState({ forcePage: 0 });

  }

  // move this to paginate
  handlePageChange = async ({ selected }) => {
    const page = selected + 1;

    if (this.state.render === getPopularMovies) {
      const data = await getPopularMovies(page);
      this.setState({
        curentPage: page,
        data: data.data.results
      });
    }
    if (this.state.render === discoverMovie) {
      const data = await discoverMovie(this.state.genreSerch.id || '', page, this.state.yearSearch || '');
      this.setState({
        curentPage: page,
        data: data.data.results
      });
    }
  };

  render() {
    return (
      <div>
        <SearchBox onSearchSubmit={handleSearch} props={this.props} />

        <div className="parent-container d-flex ">
          <GroupList
            selected={this.state.genreSerch.id}
            data={this.state.genres}
            onGenreChange={this.handleGenreChange}
          />
          <div className="container">
            <div className="row">
              <DropDown handleChange={this.handleYearChange} placeholder="year" data={[2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2000]} />
              <DropDown handleChange={this.handleYearChange} placeholder="sort by" data={['decending', 'asending']} />
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
          handlePageChange={this.handlePageChange}
          forcePage={this.state.forcePage}
        />
      </div>
    );
  }
}

export default Movie;
