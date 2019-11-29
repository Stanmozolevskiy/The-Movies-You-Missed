import React, { Component } from "react";
import {
  getTrendingMovies,
  getUpcomingMovies
} from "../../services/movieServise";
import { getTrendingTv } from "../../services/tvShowServise";
import UpcomingContainer from "./UpComingContainer";
import WeeklyContainer from "./weeklyMovies/weeklyContainer";

class Home extends Component {
  state = {
    trendingMovies: [],
    trendingTv: [],
    upcomingMovies: []
  };
  async componentDidMount() {
    const trendingMovies = await getTrendingMovies();
    const upcomingMovies = await getUpcomingMovies();
    const trendingTv = await getTrendingTv();
    this.setState({
      trendingMovies: trendingMovies.data.results
        // .sort((a, b) => b.vote_count - a.vote_count)
        .slice(0, 15),
      upcomingMovies: upcomingMovies.data.results
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
          <br />
          {/* <div className="container"> */}
          <div className="row">
            <div className="col-1 col-sm-2"></div>
            <div
              className="col-10 col-sm-8"
              style={{
                boxShadow:
                  "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
              }}
            >
              <WeeklyContainer data={this.state.trendingMovies} />
            </div>
            <div className="col-1 col-sm-2"></div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-1 col-sm-2"></div>
            <div
              className="col-10 col-sm-5"
              style={{
                color: "black",
                boxShadow:
                  "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
              }}
            >
              Main text is here
            </div>
            <UpcomingContainer
              data={this.state.upcomingMovies}
              title="Upcoming"
            />

            <div className="col-1 col-sm-2"></div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-1 col-sm-2"></div>
            <div
              className="col-12 col-sm-5"
              style={{
                boxShadow:
                  "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
                minHeight: "450px"
              }}
            >
              Some articles
            </div>

            <div
              className="col-12 col-sm-3"
              style={{
                boxShadow:
                  "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
                minHeight: "450px",
                marginLeft: "5%"
              }}
            >
              Some recent changes or adds
            </div>

            <div className="col-1 col-sm-2"></div>
          </div>
          <br />
          <br />
          <br />
        </div>
        // </div>
      );
    }
  }
}

export default Home;
