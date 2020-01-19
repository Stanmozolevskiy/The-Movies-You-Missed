import React, { Component } from "react";
import {
  getTrendingMovies,
  getUpcomingMovies
} from "../../services/movieServise";
import { getTrendingTv } from "../../services/tvShowServise";
import UpcomingContainer from "./upcoming/UpComingContainer";
import WeeklyContainer from "./weeklyMovies/weeklyContainer";
import GoogleAds from "./googleAds";

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
        .slice(0, 10)
        .filter(x => x.poster_path != null),
      trendingTv: trendingTv.data.results
        // .sort((a, b) => b.vote_count - a.vote_count)
        .slice(0, 5)
    });
  }
  render() {
    if (this.state.trendingMovies.length === 0) {
      return "";
    } else {
      return (
        <div>
          <br />

          <div className="row">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-8">
              <WeeklyContainer data={this.state.trendingMovies} />
            </div>
            <div className="col-0 col-sm-2"></div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-1 col-sm-2"></div>
            <div className="col-10 col-sm-4 home-shadow ">
              <h2>News from the movie world</h2>
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
              title="Coming Out Soon"
            />
            <div className="col-1 col-sm-2"></div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-1 col-sm-2"></div>
            <div className="col-12 col-sm-5 home-shadow home-page-top-margin-mobile">
              <h2>New Posters</h2>
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

            <div className="col-12 col-sm-12 up-coming home-page-top-margin-mobile">
              <GoogleAds />
            </div>

            <div className="col-1 col-sm-0"></div>
          </div>
          <br />
          <br />
          <br />
        </div>
      );
    }
  }
}

export default Home;
