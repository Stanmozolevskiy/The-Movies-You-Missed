import React, { Component } from "react";
import { getUpcomingMovies } from "../../services/movieServise";
import GridLayout from "react-grid-layout";

class Home extends Component {
  state = {
    upComingMovies: []
  };
  async componentDidMount() {
    const upComingMovies = await getUpcomingMovies();
    this.setState({
      upComingMovies: upComingMovies.data.results
        .sort((a, b) => b.vote_count - a.vote_count)
        .slice(0, 3)
    });
  }
  layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 8, static: true },
    { i: "b", x: 2, y: 0, w: 2, h: 4, static: true },
    { i: "c", x: 2, y: 0, w: 2, h: 4, static: true }
  ];
  render() {
    if (this.state.upComingMovies.length === 0) {
      return "";
    } else {
      console.log(this.state.upComingMovies);
      return (
        <div>
          <div className="row">weeky movies line</div>
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-sm-5 col-12 on-tv home-box">On TV</div>

              <div className="col-sm-5 col-12 in-theaters home-box">
                In Theaters
              </div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-sm-5 col-12 netflix home-box">
                Netflix Box
              </div>

              <div
                className="col-sm-5 col-12 up-coming home-box"
                style={{
                  padding: "0px "
                }}
              >
                <GridLayout
                  className="layout"
                  layout={this.layout}
                  cols={12}
                  rowHeight={40}
                  width={1200}
                >
                  <div key="a">
                    <img
                      className="image-fit"
                      src={`https://image.tmdb.org/t/p/original/${this.state.upComingMovies[0].poster_path}`}
                      alt=""
                    />
                  </div>
                  <div key="b">
                    <img
                      className="image-fit"
                      src={`https://image.tmdb.org/t/p/original/${this.state.upComingMovies[1].poster_path}`}
                      alt=""
                    />
                  </div>
                  <div key="c">
                    <img
                      className=" image-fit"
                      src={`https://image.tmdb.org/t/p/original/${this.state.upComingMovies[2].poster_path}`}
                      alt=""
                    />
                  </div>
                </GridLayout>
                {/* Up Coming:
              {this.state.upComingMovies.map(x => (
                <img
                  style={{
                    maxHeight: "170px",
                    margin: "2%",
                    float: "left"
                  }}
                  src={`https://image.tmdb.org/t/p/original/${x.poster_path}`}
                  alt=""
                />
              ))} */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
