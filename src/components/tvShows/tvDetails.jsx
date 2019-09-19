import React, { Component } from "react";
import { getTvShow } from "../../services/tvShowServise";
import Header from "../common/header";
import SearchBox from "../common/searchBox";
import MovieModal from "../common/movieModal";
import Image from '../common/imageMovieDetails'
import TrailerButton from '../common/trailerButton'
import TvDescription from '../tvShows/tvDescription'

class TvDetails extends Component {
  state = {
    data: [],
    modalIsOpen: false
  };

  async componentDidMount() {
    const dataId = window.location.pathname.match(/\d/gi).join("");
    const { data } = await getTvShow(dataId);

    this.setState({ data });
    console.log(data);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    if (this.state.data.genres === undefined) {
      return null;
    } else {
      return (
        <div id='modal'>
          <Header />
          <SearchBox
            onSearch={this.handleSearch}
            onSearchSubmit={this.getData}
          />
          <MovieModal
            modalIsOpen={this.state.modalIsOpen}
            openModal={this.openModal}
            closeModal={this.closeModal}
            videoId={this.state.data.videos.results[0].key}
          />
          <div
            className="movie-background"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.state.data.backdrop_path})`
            }}
          >
            {/* image gackgroung container start*/}
            <div style={{ backgroundColor: "rgba(85, 58, 58, .8)" }}>
              <div className="container ">
                <div className="row">
                  <div className="col-4">
                    <Image imageId={this.state.data.poster_path} />
                    <TrailerButton handleTrailer={this.openModal} />
                  </div>
                  <div className="col-8 movie-description-container" >
                    <TvDescription data={this.state.data} />

                  </div>
                </div>
              </div>
            </div>
            {/* image gackgroung container  end*/}
            <div style={{ backgroundColor: "white" }}>
              <h6>area for acters, revues etc ...</h6>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default TvDetails;
