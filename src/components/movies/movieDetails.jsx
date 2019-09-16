import React, { Component } from "react";
import { getMovie } from "../../services/movieServise";
import Header from "../common/header";
import SearchBox from "../common/searchBox";
import formatDate from '../../utilities/dataFormat'
import RatingCircle from '../common/ratingCircle'
import roundBudjet from '../../utilities/roundBudjet'

class MovieDetais extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: []
  };



  async componentDidMount() {
    const dataId = window.location.pathname.match(/\d/gi).join("");
    const { data } = await getMovie(dataId);

    this.setState({ data });
    console.log(data);
  }

  render() {
    if (this.state.data.genres === undefined) {
      return null
    } else {


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
            <div style={{ backgroundColor: "rgba(85, 58, 58, .8)" }}>
              <div className="container ">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${this.state.data.poster_path}`}
                      className="movie-description-container"
                      alt="..."
                    />
                  </div>
                  <div className="col-8 movie-description-container" style={{ color: "white" }}>
                    <h1>{this.state.data.title}</h1>
                    <br />
                    <div className="container">
                      <div className="row">
                        <div className="col-3">{formatDate(this.state.data.release_date)}</div>
                        <div className="col-2">
                          {this.state.data.runtime + " m"}
                        </div>
                        <div className="col-3">{this.state.data.genres.map(g => g.name).join(' ')}</div>
                        <div className="col-3">{this.state.data.production_countries.map(c => c.iso_3166_1).join(' / ')}</div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                    <RatingCircle rating={this.state.data.vote_average} className='rating-movie-detail' />
                    <br />
                    <br />
                    <h6 style={{ lineHeight: 2 }}>
                      {this.state.data.overview}
                    </h6>
                    <p>Budget : {roundBudjet(this.state.data.budget)}</p>
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
