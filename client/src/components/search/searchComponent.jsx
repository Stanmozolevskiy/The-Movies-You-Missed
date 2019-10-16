import React, { Component } from "react";
import { getMovies } from "../../services/movieServise";
import SearchBox from "./searchBox";
import Title from "../common/title";
import MovieContainer from "../common/movieContainer";
import { totalPages } from "../common/pagination";
import Paginateion from "../common/pagination";

class SearchComponent extends Component {
  constructor(prpos) {
    super(prpos);

    this.state = {
      data: [],
      curentPage: 1,
      forcePage: 0,
      totalPages: [],
      title: "",
      search: ""
    };
  }
  async componentDidMount() {
    const search = this.props.location.pathname;
    const query = search.slice(8).replace("%20", " ");

    const data = await getMovies(query, 1);
    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      search: query,
      //work around for page get back to 1
      forcePage: null,
      totalPages: totalPages(data),
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

  handlePageChange = async ({ selected }) => {
    const page = selected + 1;
    const data = await getMovies(this.state.search, page);
    this.setState({
      curentPage: page,
      data: data.data.results
    });
  };
  render() {
    return (
      <div>
        <SearchBox
          onSearch={this.onSearch}
          onSearchSubmit={this.handleSearch}
        />

        <div className="parent-container d-flex ">
          <div className="container">
            <Title text={this.state.title} />
            <div className="row">
              {this.state.data.map(data => (
                <MovieContainer key={data.id} data={data} props="movies" />
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

export default SearchComponent;
