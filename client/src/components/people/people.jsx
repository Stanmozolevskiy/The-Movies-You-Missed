import React, { Component } from "react";
import { getPerson, getPopularPerson } from "../../services/peopleServise";
import Paginateion from "../common/pagination";
import SearchBox from "../search/searchBox";
import Title from "../common/title";
import PeopleCard from "./peopleCard";
import { totalPages } from "../common/pagination";

class People extends Component {
  state = {
    search: "",
    data: [],
    totalPages: [],
    curentPages: "",
    curentPage: 1,
    title: "Popular People"
  };

  // get populat people
  async componentDidMount() {
    const data = await getPopularPerson(this.state.curentPage);
    this.setState({
      data: data.data.results,
      curentPage: data.data.page,
      totalPages: totalPages(data)
    });
  }
  // search
  getData = async e => {
    if (e.key === "Enter" && this.state.search !== "") {
      const data = await getPerson(this.state.search, 1);

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
      const data = await getPopularPerson(selected);
      this.setState({ data: data.data.results });
    }
    if (this.state.search !== "") {
      const data = await getPerson(this.state.search, selected);
      this.setState({ data: data.data.results });
    }
  };

  render() {
    return (
      <div>
        <SearchBox onSearch={this.handleSearch} onSearchSubmit={this.getData} />
        <div className="container">
          <Title text={this.state.title} />
          <div className="container ">
            <div className="row">
              {this.state.data.map(data => (
                <PeopleCard key={data.id} data={data} />
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

export default People;
