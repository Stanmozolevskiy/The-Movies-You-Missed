import React, { Component } from "react";
import { getMovie } from "../../../services/movieServise";
import { getTvShow } from "../../../services/tvShowServise";
import { handleSearch } from "../../../services/searchService";
import SearchBox from "../../search/searchBox";
import MovieDescription from "./movieDescription";
import Image from "./imageMovieDetails";
import TrailerButton from "./trailer/trailerButton";
import MovieDetailBody from "./movieDetailBody";

class MovieDetais extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    if (/movies/.test(this.props.location.pathname)) {
      const dataId = window.location.pathname.match(/\d/gi).join("");
      const { data } = await getMovie(dataId);
      this.setState({ data });
    }
    if (/tv/.test(this.props.location.pathname)) {
      const dataId = window.location.pathname.match(/\d/gi).join("");
      const { data } = await getTvShow(dataId);
      this.setState({ data });
    }
  }

  render() {
    if (this.state.data.genres === undefined) {
      return null;
    } else {
      return (
        <div id="modal">
          <SearchBox onSearchSubmit={handleSearch} />
          <div
            className="movie-background"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.state.data.backdrop_path})`
            }}
          >
            {/* image gackgroung container start*/}
            <div style={{ backgroundColor: "rgba(85, 58, 58, .8)", height: '600px' }}>
              <div className="container ">
                <div className="row">
                  <div className="col-4">
                    <Image imageId={this.state.data.poster_path} />
                    <TrailerButton data={this.state.data.videos.results[0]} />
                  </div>

                  <div className="col-8 movie-description-container">
                    <MovieDescription
                      data={this.state.data}
                      props={this.props}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* image gackgroung container  end*/}
            <div style={{ backgroundColor: "white" }}>
              <MovieDetailBody data={this.state.data} props={this.props} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MovieDetais;
