import React, { Component } from "react";
import { getPopularTvShows } from "../../services/tvShowServise";
import { totalPages } from "../common/pagination";
import { getTvgenres, discoverTv } from "../../services/genreServise";
import { handleSearch } from "../../services/searchService";
import MovieContainer from "../common/movieContainer";
import Paginateion from "../common/pagination";
import SearchBox from "../search/searchBox";
import Title from "../common/title";
import GroupList from "../common/groupList";
import DropDown from "../common/dropDown";

class TvShow extends Component {
  constructor(prpos) {
    super(prpos);

    this.state = {
      search: "",
      genreSerch: {},
      genres: [],
      data: [],
      totalPages: [],
      yearSearch: "",
      sortBy: "",
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
      totalPages: totalPages(data),
      render: getPopularTvShows
    });
  }
  // genreChange
  handleGenreChange = async e => {
    this.setState({
      genreSerch: this.state.genres.filter(
        g => g.id === Number(e.target.value)
      )[0]
    });
    const data = await discoverTv(e.target.value, 1, this.state.yearSearch);
    this.setState({
      search: "",
      data: data.data.results,
      curentPage: data.data.page,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      // handeling the title change
      title: `Search > ${this.state.genreSerch.name +
        " " +
        this.state.yearSearch}`,
      render: discoverTv
    });
    //work around for page get back to 1
    this.setState({ forcePage: 0 });
  };

  handleYearChange = async ({ value }) => {
    this.setState({ yearSearch: value });
    const data = await discoverTv(
      this.state.genreSerch.id || "",
      1,
      value,
      this.state.sortBy
    );

    this.setState({
      search: "",
      data: data.data.results,
      curentPage: data.data.page,
      yearSearch: value,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      // handeling the title change
      title:
        `Search > ${
          this.state.genreSerch.name !== undefined
            ? this.state.genreSerch.name
            : ""
        }` +
        " " +
        value,
      render: discoverTv
    });
    // work around for page get back to 1
    this.setState({ forcePage: 0 });
  };
  handleSortByChange = async ({ value }) => {
    const data = await discoverTv(
      this.state.genreSerch.id || "",
      1,
      this.state.search || "",
      value
    );
    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      sortBy: value,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
      // handeling the title change
      render: discoverTv
    });
    // work around for page get back to 1
    this.setState({ forcePage: 0 });
  };

  handlePageChange = async ({ selected }) => {
    const page = selected + 1;

    if (this.state.render === getPopularTvShows) {
      const data = await getPopularTvShows(page);
      this.setState({
        curentPage: page,
        data: data.data.results
      });
    }
    if (this.state.render === discoverTv) {
      const data = await discoverTv(
        this.state.genreSerch.id || "",
        page,
        this.state.yearSearch || ""
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
        <SearchBox onSearchSubmit={handleSearch} />

        <div className="row">
          {/* <DropDown
                handleChange={this.handleSortByChange}
                placeholder="sort by"
                data={["popularity.desc", "popularity.asc"]}
              /> */}
        </div>
        <div className="row" style={{ margin: "0px" }}>
          {/* filter */}
          <div className="col-3">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="row">
                  <div className="col-6">
                    <GroupList
                      selected={this.state.genreSerch.id}
                      data={this.state.genres}
                      onGenreChange={this.handleGenreChange}
                    />
                  </div>
                  <div className="col-6">
                    <DropDown
                      handleChange={this.handleYearChange}
                      placeholder="year"
                      data={[2019, 2018, 2017, 2016, 2015, 2000]}
                    />
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
          {/* result */}
          <div className="col-8">
            <Title text={this.state.title} />
            {this.state.data.map(data => (
              <MovieContainer key={data.id} data={data} props={this.props} />
            ))}
          </div>
          <div className="col-1"></div>
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
