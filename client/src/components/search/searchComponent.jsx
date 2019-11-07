import React, { Component } from "react";
import { getMovies } from "../../services/movieServise";
import { getTvShows } from "../../services/tvShowServise";
import { getPerson } from "../../services/peopleServise";
import SearchBox from "./searchBox";
import Title from "../common/title";
import MovieContainer from "../common/movieContainer";
import PeopleCard from "../people/peopleCard";
import { totalPages } from "../common/pagination";
import Paginateion from "../common/pagination";
import GroupList from "./groupList";

class SearchComponent extends Component {
  constructor(prpos) {
    super(prpos);

    this.state = {
      movie: [],
      tv: [],
      people: [],
      curentPage: 1,
      forcePage: 0,
      totalPages: [],
      title: "",
      search: "",
      searchType: 'movies'
    };
  }
  async componentDidMount() {
    const search = this.props.location.pathname;
    const query = search.slice(8).replace("%20", " ");

    const movie = await getMovies(query, 1);
    const tv = await getTvShows(query, 1);
    const people = await getPerson(query, 1);
    this.setState({
      movie: movie.data,
      tv: tv.data,
      people: people.data,
      curentPage: movie.data.page,
      search: query,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(movie),
      // handeling the title change
      title: `Search > ${query.charAt(0).toUpperCase() + query.slice(1)}`
    });
    //work around for page get back to 1
    this.setState({ forcePage: 0 });
  }

  handleSearch = async e => {
    if (e.key === "Enter" && this.state.search !== "") {
      window.location.href = `/search/${this.state.search}`;
    }
  };
  onSearch = e => {
    this.setState({ search: e.target.value });
  };
  onGroupChange = e => {
    this.setState({ searchType: e.target.type });
  };

  handlePageChange = async ({ selected }) => {
    const page = selected + 1;
    if (this.state.searchType === 'movies') {
      const movie = await getMovies(this.state.search, page);
      this.setState({
        curentPage: page,
        movie: movie.data
      });
      return this.state.movie.results
    } else if (this.state.searchType === 'tv') {
      const tv = await getTvShows(this.state.search, page);
      this.setState({
        curentPage: page,
        tv: tv.data
      });
    } else {
      return this.state.people.results
    }
  };
  handleDataChange = () => {
    if (this.state.searchType === 'movies') {
      return this.state.movie.results.map(x => (
        <MovieContainer key={x.id} data={x} props={this.state.searchType} />))
    }
    else if (this.state.searchType === 'tv') {
      return this.state.tv.results.map(x => (
        <MovieContainer key={x.id} data={x} props={this.state.searchType} />))
    } else if (this.state.searchType === 'people') {
      return this.state.people.results.map(x =>
        <PeopleCard data={x} />)

    }
  }

  render() {
    if (this.state.movie.length === 0) {
      return ''
    } else {
      return (
        <div>
          <SearchBox
            onSearch={this.onSearch}
            onSearchSubmit={this.handleSearch}
          />
          <div className="row">
            <div className="col-sm-3 col-12">
              <GroupList
                movieCount={this.state.movie.total_results}
                tvCount={this.state.tv.total_results}
                peopleCount={this.state.people.total_results}
                onGroupChange={this.onGroupChange}
              />
            </div>
            <div className="col-sm-7 col-12">
              <Title text={this.state.title} />
              <div className="row">
                {this.handleDataChange()}
              </div>
            </div>

            <div className="col-sm-2 col-12"></div>
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
}

export default SearchComponent;
