import React, { Component } from "react";
import { getTrendingMovies } from "../../services/movieServise";
import { getTrendingTv } from "../../services/tvShowServise";
import UpcomingContainer from './UpComingContainer'



class Home extends Component {
  state = {
    trendingMovies: [],
    trendingTv: []
  };
  async componentDidMount() {
    const trendingMovies = await getTrendingMovies();
    const trendingTv = await getTrendingTv();
    this.setState({
      trendingMovies: trendingMovies.data.results
        // .sort((a, b) => b.vote_count - a.vote_count)
        .slice(0, 5),
      trendingTv: trendingTv.data.results
        // .sort((a, b) => b.vote_count - a.vote_count)
        .slice(0, 5)
    });
  }

  render() {
    if (this.state.trendingMovies.length === 0) {
      return "";
    } else {
      console.log(this.state);
      return (
        <div>
          <div className="row">weeky movies line</div>
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <UpcomingContainer data={this.state.trendingTv} title='Trending on TV' />

              <UpcomingContainer data={this.state.trendingMovies} title='Trending Movies' />
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-sm-5 col-12 on-tv home-box">On TV</div>

              <div className="col-sm-5 col-12 in-theaters home-box">
                In Theaters
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      );
    }
  }
}

export default Home;
