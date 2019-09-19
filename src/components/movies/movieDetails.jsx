import React, { Component } from "react";
import { getMovie } from "../../services/movieServise";
import Header from "../common/header";
import SearchBox from "../common/searchBox";
import formatDate from "../../utilities/dataFormat";
import RatingCircle from "../common/ratingCircle";
import roundBudjet from "../../utilities/roundBudjet";
import YouTube from "react-youtube";
import MovieModal from "../common/movieModal";

class MovieDetais extends Component {
  state = {
    data: [],
    modalIsOpen: false
  };

  async componentDidMount() {
    const dataId = window.location.pathname.match(/\d/gi).join("");
    const { data } = await getMovie(dataId);

    this.setState({ data });
    console.log(data);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  palyTrailer(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  playVideo(event) {
    event.target.pauseVideo();
  }

  render() {
    if (this.state.data.genres === undefined) {
      return null;
    } else {
      const opts = {
        height: "100%",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

      return (
        <div>
          <Header />
          <SearchBox
            onSearch={this.handleSearch}
            onSearchSubmit={this.getData}
          />
          <MovieModal
            modalIsOpen={this.state.modalIsOpen}
            openModal={this.openModal}
            closeModal={this.closeModal}
            afterOpenModal={this.afterOpenModal}
          />
          <div
            className="movie-background"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.state.data.backdrop_path})`
            }}
          >
            {/* image gackgroung container */}
            <div style={{ backgroundColor: "rgba(85, 58, 58, .8)" }}>
              <div className="container ">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${this.state.data.poster_path}`}
                      className="movie-description-container"
                      alt="..."
                    />
                    {/* cover over image start */}
                    <div
                      style={{
                        position: "absolute",
                        top: "82%",
                        left: "50%",
                        transform: " translate(-50%, -50%)",
                        color: "white",
                        width: "320px",
                        height: "30px",
                        backgroundColor: "rgba(85, 58, 58, .8)",
                        textAlign: "center"
                      }}
                      onClick={this.openModal}
                    >
                      trailer
                    </div>
                    {/* cover over image end */}
                  </div>
                  <div
                    className="col-8 movie-description-container"
                    style={{ color: "white" }}
                  >
                    <h1>{this.state.data.title}</h1>

                    <div className="container">
                      <div className="row">
                        <div className="col-2" style={{ padding: "0px" }}>
                          <RatingCircle
                            rating={this.state.data.vote_average}
                            className="rating-movie-detail"
                          />
                        </div>
                        <div
                          className="col-10"
                          style={{ padding: "0px", marginTop: "30px" }}
                        >
                          <h6>
                            Date : {formatDate(this.state.data.release_date)}
                          </h6>
                          <h6>
                            Budget : {roundBudjet(this.state.data.budget)}
                          </h6>
                          <h6>
                            Genres :{" "}
                            {this.state.data.genres.map(g => g.name).join(" ")}
                          </h6>
                          <h6>Duration : {this.state.data.runtime + " m"}</h6>
                          <h6>
                            Country :{" "}
                            {this.state.data.production_countries
                              .map(c => c.iso_3166_1)
                              .join(" / ")}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <h6 style={{ lineHeight: 2 }}>
                      {this.state.data.overview}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* image gackgroung container  end*/}
            <div style={{ backgroundColor: "white" }}>
              <h6>area for acters, revues etc ...</h6>
            </div>
          </div>
          {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onClick={this.playVideo} /> */}
        </div>
      );
    }
  }
}

export default MovieDetais;
