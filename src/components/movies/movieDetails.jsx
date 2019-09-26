import React, { Component } from "react";
import { getMovie } from "../../services/movieServise";
import { handleSearch } from '../../services/searchService'
import SearchBox from "../common/searchBox";
import MovieModal from "../common/movieModal";
import MovieDescription from './movieDescription'
import Image from '../common/imageMovieDetails'
import TrailerButton from '../common/trailerButton'

class MovieDetais extends Component {
  state = {
    data: [],
    modalIsOpen: false
  };

  async componentDidMount() {
    const dataId = window.location.pathname.match(/\d/gi).join("");
    const { data } = await getMovie(dataId);

    this.setState({ data });
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
          <SearchBox onSearchSubmit={handleSearch} />
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

                  <div
                    className="col-8 movie-description-container" >
                    <MovieDescription data={this.state.data} />

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

export default MovieDetais;
