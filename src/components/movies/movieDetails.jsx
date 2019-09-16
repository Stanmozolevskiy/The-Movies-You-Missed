import React, { Component } from "react";
import { getMovie } from "../../services/movieServise";
import Header from "../common/header";
import SearchBox from "../common/searchBox";
import TableBody from "../common/tableBody";
import date from "date-and-time";

class MovieDetais extends Component {
  state = {
    data: [],
    year: ""
  };
  // move
  now = new Date(this.state.year);
  dateOut = date.format(this.now, "MMMM DD, YYYY ");

  async componentDidMount() {
    const dataId = window.location.pathname.match(/\d/gi).join("");
    const { data } = await getMovie(dataId);

    this.setState({ data });
    this.setState({ year: data.release_date });
    console.log(data);
  }
  render() {
    // console.log(this.state.year);
    return (
      <div>
        <Header />
        <SearchBox onSearch={this.handleSearch} onSearchSubmit={this.getData} />
        <div
          className=" movie-background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.state.data.backdrop_path})`
          }}
        >
          {/* image gackgroung container */}
          <div style={{ backgroundColor: "rgba(152, 58, 58, .8)" }}>
            <div className="container ">
              <div className="row">
                <div className="col-4">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${this.state.data.poster_path}`}
                    className="movie-description-container"
                    alt="..."
                  />
                </div>
                <div className="col-8 movie-description-container">
                  <h1 style={{ color: "white" }}>{this.state.data.title}</h1>
                  <br />
                  <div className="container">
                    <div className="row" style={{ color: "white" }}>
                      <div className="col-3">Year Produced</div>
                      <div className="col-3">
                        {this.state.data.runtime + " m"}
                      </div>
                      <div className="col-3">Genre</div>
                      <div className="col-3">Country</div>
                    </div>
                  </div>

                  <br />
                  <br />
                  <h6 style={{ lineHeight: 2, color: "white" }}>
                    {this.state.data.overview}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* image gackgroung container  end*/}
          <div style={{ backgroundColor: "white" }}>
            <h1>{this.state.data.overview}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetais;
