import React, { Component } from "react";
import { getMovie } from "../../services/movieServise";
import Header from "../common/header";
import SearchBox from "../common/searchBox";

class MovieDetais extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const dataId = window.location.pathname.match(/\d/gi).join("");
    const { data } = await getMovie(dataId);

    this.setState({ data });
    console.log(this.state.data);
  }
  render() {
    return (
      <div>
        <Header />
        <SearchBox onSearch={this.handleSearch} onSearchSubmit={this.getData} />
        <h1>{this.state.data.original_title}</h1>
      </div>
    );
  }
}

export default MovieDetais;
