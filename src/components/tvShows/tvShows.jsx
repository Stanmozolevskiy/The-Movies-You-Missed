import React, { Component } from "react";
import { getTvShows, getPopularTvShows } from "../../services/tvShowServise";
import { totalPages } from "../common/pagination";
import TvContainer from "../common/tvContainer";
import Paginateion from "../common/pagination";
import Header from "../common/header";
import SearchBox from "../common/searchBox";
import Title from "../common/title";

class TvShow extends Component {
  state = {
    search: "",
    data: [],
    totalPages: [],
    curentPages: "",
    curentPage: 1,
    title: "Popular TV Shows"
  };

  // get populat movies
  async componentDidMount() {
    const data = await getPopularTvShows(this.state.curentPage);

    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      totalPages: totalPages(data)
    });
  }
  // search
  getData = async e => {
    if (e.key === "Enter" && this.state.search !== "") {
      const data = await getTvShows(this.state.search, 1);

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

  handlePageChange = async data => {
    const selected = data.selected + 1;

    if (this.state.search === "") {
      this.setState({ curentPage: selected });
      const data = await getPopularTvShows(selected);
      this.setState({ data: data.data.results });
    }
    if (this.state.search !== "") {
      const data = await getTvShows(this.state.search, selected);
      this.setState({ data: data.data.results });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBox onSearch={this.handleSearch} onSearchSubmit={this.getData} />
        <div className="container">
          <Title text={this.state.title} />
          <div className="container ">
            <div className="row">
              {this.state.data.map(data => (
                <TvContainer key={data.id} data={data} />
              ))}
            </div>
          </div>
          <Paginateion
            totalPages={this.state.totalPages}
            search={this.state.search}
            handlePageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default TvShow;
