import React, { Component } from "react";
import {
  getTrendingMovies,
  getUpcomingMovies
} from "../../services/movieServise";
import { getTrendingTv } from "../../services/tvShowServise";
import UpcomingContainer from "./upcoming/UpComingContainer";
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
        .slice(0, 10),
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
            <div className="col-0 col-sm-2"></div>
            <div
              className="col-12 col-sm-8"
              style={{
                boxShadow:
                  "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
              }}
            >
              <WeeklyContainer data={this.state.trendingMovies} />
            </div>
            <div className="col-0 col-sm-2"></div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-1 col-sm-2"></div>
            <div
              className="col-10 col-sm-4"
              style={{
                color: "black",
                boxShadow:
                  "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
              }}
            >
              <h2>Main text</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, reiciendis. Ut excepturi animi impedit, suscipit
                quaerat molestiae eos tenetur? Doloribus consectetur, distinctio
                a autem nam dolorem adipisci earum assumenda expedita, minus
                saepe magnam temporibus quasi sequi reiciendis eveniet. Sapiente
                recusandae debitis quos provident omnis esse exercitationem
                dolorem. Molestiae alias odit temporibus ratione aperiam ab
                cumque. Consectetur, at reiciendis. Nihil numquam, earum odio
                iusto nobis eveniet officiis perferendis. Similique in officiis
                accusamus eos ex molestias unde distinctio nobis quibusdam
                consequuntur enim repellendus sit possimus iure eius aliquid,
                ratione impedit facilis quia quos ipsam nihil. Fuga esse
                accusamus maxime rerum quisquam quae magni cupiditate laboriosam
                quidem autem aspernatur asperiores assumenda eius facilis, ex
                ducimus vel suscipit repudiandae impedit, quaerat ipsam illo?
                Quod!
              </p>
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
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, reiciendis. Ut excepturi animi impedit, suscipit
                quaerat molestiae eos tenetur? Doloribus consectetur, distinctio
                a autem nam dolorem adipisci earum assumenda expedita, minus
                saepe magnam temporibus quasi sequi reiciendis eveniet. Sapiente
                recusandae debitis quos provident omnis esse exercitationem
                dolorem. Molestiae alias odit temporibus ratione aperiam ab
                cumque. Consectetur, at reiciendis. Nihil numquam, earum odio
                iusto nobis eveniet officiis perferendis. Similique in officiis
                accusamus eos ex molestias unde distinctio nobis quibusdam
                consequuntur enim repellendus sit possimus iure eius aliquid,
                ratione impedit facilis quia quos ipsam nihil. Fuga esse
                accusamus maxime rerum quisquam quae magni cupiditate laboriosam
                quidem autem aspernatur asperiores assumenda eius facilis, ex
                ducimus vel suscipit repudiandae impedit, quaerat ipsam illo?
                Quod!
              </p>
            </div>

            <div
              className="col-12 col-sm-3 up-coming"
              style={{
                boxShadow:
                  "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
                minHeight: "450px"
              }}
            >
              <h2>Google adds</h2>
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
