import React, { Component } from "react";
import { getPopularMovies } from "../../services/movieServise";
import { getMoviegenres, discoverMovie } from "../../services/genreServise";
import { totalPages } from "../common/pagination";
import MovieContainer from "../common/movieContainer";
import Paginateion from "../common/pagination";
import Title from "../common/title";
import GenreFilter from "../filter/genreFilter";
import YearFilter from "../filter/yesrFilter";
import SortByFilter from "../filter/sortByFilter";
import AdultCheckBox from "../filter/adultCheckBox";
import VideoCheckBox from "../filter/videoCheckBox";

class Movie extends Component {
  constructor(prpos) {
    super(prpos);

    this.state = {
      genreSerch: {},
      yearSearch: "",
      data: [],
      genres: [],
      totalPages: [],
      curentPage: 1,
      forcePage: 0,
      title: "Popular Movies",
      render: "",
      sortBy: "popularity.desc",
      adults: false
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
  handleGenreChange = async e => {
    this.setState({
      genreSerch: e
    });
    const data = await discoverMovie(
      e.id,
      1,
      this.state.yearSearch,
      this.state.sortBy,
      this.state.adults
    );
    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      // handeling the title change
      title: `Search > ${this.state.genreSerch.name +
        " " +
        this.state.yearSearch}`,
      render: discoverMovie,
      adults: this.state.adults
    });
    //work around for page get back to 1
    this.setState({ forcePage: 0 });
  };

  handleYearChange = async ({ value }) => {
    this.setState({ yearSearch: value });
    const data = await discoverMovie(
      this.state.genreSerch.id || "",
      1,
      value,
      this.state.sortBy,
      this.state.adults
    );

    this.setState({
      search: "",
      data: data.data.results,
      curentPage: data.data.page,
      yearSearch: value,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      adults: this.state.adults,
      // handeling the title change
      title:
        `Search > ${
          this.state.genreSerch.name !== undefined
            ? this.state.genreSerch.name
            : ""
        }` +
        " " +
        value,
      render: discoverMovie
    });
    // work around for page get back to 1
    this.setState({ forcePage: 0 });
  };

  handleSortByChange = async ({ value }) => {
    const data = await discoverMovie(
      this.state.genreSerch.id || "",
      1,
      this.state.yearSearch || "",
      value,
      this.state.adults
    );
    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      sortBy: value,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      // handeling the title change
      render: discoverMovie
    });
    // work around for page get back to 1
    this.setState({ forcePage: 0 });
  };

  // include Adults
  handleIncludeAdults = async e => {
    this.setState({ adults: e.target.checked });
    const data = await discoverMovie(
      this.state.genreSerch.id || "",
      1,
      this.state.yearSearch || "",
      this.state.sortBy,
      e.target.checked
    );
    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      sortBy: this.state.sortBy,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      // handeling the title change
      render: discoverMovie
    });
    // work around for page get back to 1
    this.setState({ forcePage: 0 });
  };

  // move this to paginate
  handlePageChange = async ({ selected }) => {
    const page = selected + 1;

    if (this.state.render === getPopularMovies) {
      const data = await getPopularMovies(page, this.state.adults);
      this.setState({
        curentPage: page,
        data: data.data.results
      });
    }
    if (this.state.render === discoverMovie) {
      const data = await discoverMovie(
        this.state.genreSerch.id || "",
        page,
        this.state.yearSearch || "",
        this.state.adults
      );
      this.setState({
        curentPage: page,
        data: data.data.results
      });
    }
  };
  render() {
    return (
      <div>
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-3 filters">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <br />
                <br />
                <br />
                <hr />
                <GenreFilter
                  data={this.state.genres}
                  onChange={this.handleGenreChange}
                />
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-4">
                <YearFilter onChange={this.handleYearChange} />
              </div>
              <div className="col-4">
                <SortByFilter onChange={this.handleSortByChange} />
              </div>
              <div className="col-2"></div>
            </div>
            <br />
            <div className="row">
              <div className="col-2"></div>
              <div className="col-4">
                <AdultCheckBox onChange={this.handleIncludeAdults} />
              </div>
              <div className="col-4">
                <VideoCheckBox />
              </div>
              <div className="col-2"></div>
            </div>
            <br />
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <hr />
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div className=" col-12 col-md-8 col-sm-12 ">
            <Title text={this.state.title} />
            {this.state.data
              .filter(x => x !== null)
              .map(data => (
                <MovieContainer key={data.id} data={data} props={this.props} />
              ))}
          </div>
          <div className="col-1 filters"></div>
        </div>
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-0 col-sm-4"></div>
          <div className="col-12 col-sm-6" style={{ textAlign: "center" }}>
            <Paginateion
              totalPages={this.state.totalPages}
              handlePageChange={this.handlePageChange}
              forcePage={this.state.forcePage}
            />
          </div>
          <div className="col-0 col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default Movie;
