import React, { Component } from "react";
import formatDate from "../../../utilities/dataFormat";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Rating from "react-rating";
import { Collapse } from "react-collapse";
// import SmallPeopleCard from "../smapPeopleCard";
// import ProductionCompanieIcons from "../common/productionCompanieIcons";
// import MovieGeneralDetails from "../movieDetails/movieGeneralDetails";
// import HomePage from "../common/buttons/homePage";
// import IMDBIcon from "../common/buttons/imdb";
// import InstagramIcon from "../common/buttons/instagram";
// import FacebookIcon from "../common/buttons/facebookIcon";
// import Twitter from "../common/buttons/twittwe";
// import TrailerContainer from "./trailer/trailersContainer";
// import Collection from "../movies/collection";
// import PostersContainer from "./poster/postersContainer";
// import CommentsBody from "../comments/commentsBody";
// import CastContainer from "./cast/castContainer";
// import TrendingContainer from "./trending/trendingContainer";

class PeopleDetailsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMovieOpen: false,
      isTvOpen: false,
      isMovieCrewOpen: false
    };
  }

  onMovieOpen = () => {
    if (this.state.isMovieOpen === false) {
      this.setState({ isMovieOpen: true });
    } else {
      this.setState({ isMovieOpen: false });
    }
  };
  onMovieCrewOpen = () => {
    if (this.state.isMovieCrewOpen === false) {
      this.setState({ isMovieCrewOpen: true });
    } else {
      this.setState({ isMovieCrewOpen: false });
    }
  };
  onTvOpen = () => {
    if (this.state.isTvOpen === false) {
      this.setState({ isTvOpen: true });
    } else {
      this.setState({ isTvOpen: false });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div
        className="row"
        style={{
          marginLeft: "0px",
          marginRight: "0px"
        }}
      >
        {/*  LEFT SIDE */}
        <div className="col-12 col-sm-9">
          <div className="row movie-body-unit">
            <div className="col-0 col-sm-2"></div>
            <div className="col-0 col-sm-10">
              <Tabs>
                <TabList>
                  <Tab>Movies</Tab>
                  <Tab>Tv Show</Tab>
                  <Tab>Pictures</Tab>
                </TabList>
                <TabPanel>
                  <h2 className="people-credits-tab-tiele">Acting: </h2>
                  <ul>
                    {this.props.movieCredit.cast
                      .filter(x => x !== null)
                      .sort(
                        (a, b) =>
                          formatDate(b.release_date, "YYYY") -
                          formatDate(a.release_date, "YYYY")
                      )
                      .slice(0, 3)
                      .map(x => (
                        <li key={x.id}>
                          <strong> {x.original_title}</strong> (
                          {formatDate(x.release_date, "YYYY MMM")}){" "}
                          <Rating
                            style={{ color: "gold" }}
                            initialRating={x.vote_average / 2}
                            emptySymbol={"fa fa-star-o fa-1x "}
                            fullSymbol={"fa fa-star fa-1x "}
                            start="0"
                            stop="5"
                            step="1"
                            readonly="true"
                          />
                          <p>Character: {x.character}</p>
                        </li>
                      ))}
                  </ul>
                  <div
                    onClick={this.onMovieOpen}
                    className={
                      this.props.movieCredit.cast.length <= 3
                        ? "display-none"
                        : ""
                    }
                    style={{ textAlign: "center", cursor: "pointer" }}
                  >
                    <i
                      className={`fa fa-chevron-circle-${
                        this.state.isMovieOpen ? "up" : "down"
                      } fa-1x`}
                      aria-hidden="true"
                      style={{ margin: "5px" }}
                    ></i>
                    {this.state.isMovieOpen ? `see less` : `see more`}
                  </div>
                  <Collapse isOpened={this.state.isMovieOpen}>
                    <ul>
                      {this.props.movieCredit.cast
                        .filter(x => x !== null)
                        .sort(
                          (a, b) =>
                            formatDate(b.release_date, "YYYY") -
                            formatDate(a.release_date, "YYYY")
                        )
                        .slice(3, this.props.movieCredit.cast.length)
                        .map(x => (
                          <li key={x.id}>
                            <strong> {x.original_title}</strong> (
                            {formatDate(x.release_date, "YYYY MMM")}){" "}
                            <Rating
                              style={{ color: "gold" }}
                              initialRating={x.vote_average / 2}
                              emptySymbol={"fa fa-star-o fa-1x "}
                              fullSymbol={"fa fa-star fa-1x "}
                              start="0"
                              stop="5"
                              step="1"
                              readonly="true"
                            />
                            <p>Character: {x.character}</p>
                          </li>
                        ))}
                    </ul>
                  </Collapse>
                  <hr />
                  <h2 className="people-credits-tab-tiele">Crew: </h2>
                  <ul>
                    {this.props.movieCredit.crew
                      .filter(x => x !== null)
                      .sort(
                        (a, b) =>
                          formatDate(b.release_date, "YYYY") -
                          formatDate(a.release_date, "YYYY")
                      )
                      .slice(0, 3)
                      .map(x => (
                        <li key={x.id}>
                          <strong> {x.original_title}</strong> (
                          {formatDate(x.release_date, "YYYY MMM")}){" "}
                          <Rating
                            style={{ color: "gold" }}
                            initialRating={x.vote_average / 2}
                            emptySymbol={"fa fa-star-o fa-1x "}
                            fullSymbol={"fa fa-star fa-1x "}
                            start="0"
                            stop="5"
                            step="1"
                            readonly="true"
                          />
                          <p>Job: {x.job}</p>
                        </li>
                      ))}
                  </ul>
                  <div
                    onClick={this.onMovieCrewOpen}
                    className={
                      this.props.movieCredit.cast.length <= 3
                        ? "display-none"
                        : ""
                    }
                    style={{ textAlign: "center", cursor: "pointer" }}
                  >
                    <i
                      className={`fa fa-chevron-circle-${
                        this.state.isMovieCrewOpen ? "up" : "down"
                      } fa-1x`}
                      aria-hidden="true"
                      style={{ margin: "5px" }}
                    ></i>
                    {this.state.isMovieCrewOpen ? `see less` : `see more`}
                  </div>
                  <Collapse isOpened={this.state.isMovieCrewOpen}>
                    <ul>
                      {this.props.movieCredit.crew
                        .filter(x => x !== null)
                        .sort(
                          (a, b) =>
                            formatDate(b.release_date, "YYYY") -
                            formatDate(a.release_date, "YYYY")
                        )
                        .slice(3, this.props.movieCredit.crew.length)
                        .map(x => (
                          <li key={x.id}>
                            <strong> {x.original_title}</strong> (
                            {formatDate(x.release_date, "YYYY MMM")}){" "}
                            <Rating
                              style={{ color: "gold" }}
                              initialRating={x.vote_average / 2}
                              emptySymbol={"fa fa-star-o fa-1x "}
                              fullSymbol={"fa fa-star fa-1x "}
                              start="0"
                              stop="5"
                              step="1"
                              readonly="true"
                            />
                            <p>Job:{x.job}</p>
                          </li>
                        ))}
                    </ul>
                  </Collapse>
                </TabPanel>
                <TabPanel>
                  <h2 className="people-credits-tab-tiele">Tv Credits</h2>
                  <ul>
                    {this.props.tvCredit.cast
                      .filter(x => x !== null)
                      .sort(
                        (a, b) =>
                          formatDate(b.first_air_date, "YYYY") -
                          formatDate(a.first_air_date, "YYYY")
                      )
                      .slice(0, 3)
                      .map(x => (
                        <li key={x.credit_id}>
                          <strong> {x.name}</strong> (
                          {formatDate(x.first_air_date, "YYYY MMM")})
                          <Rating
                            style={{ color: "gold" }}
                            initialRating={x.vote_average / 2}
                            emptySymbol={"fa fa-star-o fa-1x "}
                            fullSymbol={"fa fa-star fa-1x "}
                            start="0"
                            stop="5"
                            step="1"
                            readonly="true"
                          />
                          <p>Character: {x.character}</p>
                        </li>
                      ))}
                  </ul>
                  <div
                    onClick={this.onTvOpen}
                    className={
                      this.props.tvCredit.cast.length <= 3 ? "display-none" : ""
                    }
                    style={{ textAlign: "center", cursor: "pointer" }}
                  >
                    <i
                      className={`fa fa-chevron-circle-${
                        this.state.isTvOpen ? "up" : "down"
                      } fa-1x`}
                      aria-hidden="true"
                      style={{ margin: "5px" }}
                    ></i>
                    {this.state.isTvOpen ? `see less` : `see more`}
                  </div>
                  <Collapse isOpened={this.state.isTvOpen}>
                    <ul>
                      {this.props.tvCredit.cast
                        .filter(x => x !== null)
                        .sort(
                          (a, b) =>
                            formatDate(b.first_air_date, "YYYY") -
                            formatDate(a.first_air_date, "YYYY")
                        )
                        .slice(3, this.props.tvCredit.cast.length)
                        .map(x => (
                          <li key={x.credit_id}>
                            <strong> {x.name}</strong> (
                            {formatDate(x.first_air_date, "YYYY MMM")}){" "}
                            <Rating
                              style={{ color: "gold" }}
                              initialRating={x.vote_average / 2}
                              emptySymbol={"fa fa-star-o fa-1x "}
                              fullSymbol={"fa fa-star fa-1x "}
                              start="0"
                              stop="5"
                              step="1"
                              readonly="true"
                            />
                            <p>Character: {x.character}</p>
                          </li>
                        ))}
                    </ul>
                  </Collapse>
                </TabPanel>
                <TabPanel>
                  {this.props.peoplePictures.profiles.map(x => (
                    <img
                      key={x.file_path}
                      style={{
                        maxHeight: "150px",
                        margin: "5px"
                      }}
                      src={`https://image.tmdb.org/t/p/original/${x.file_path}`}
                      alt=""
                    />
                  ))}
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        {/*  LEFT SIDE END*/}

        {/* RIGHT SIDE */}
        <div className="col-12 col-sm-3 movie-body-right">
          <div className="row">
            <div className="col-12" style={{ marginLeft: "20px" }}>
              <h5>
                <strong
                  style={{
                    background: "#FFF9F7",
                    padding: "8px",
                    textAlign: "center",
                    position: "absolute",
                    top: " -10px",
                    left: " 35%",
                    boxShadow:
                      "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px"
                  }}
                >
                  Known Facts
                </strong>
              </h5>
              <div style={{ marginTop: "15%", textAlign: "center" }}>
                <h6>Date of birth:</h6>
                <h5> {formatDate(this.props.data.birthday, "DD MMMM YYYY")}</h5>
                <h6>Date of death:</h6>
                <h5> {formatDate(this.props.data.deathday, "DD MMMM YYYY")}</h5>
                <h6>Gender:</h6>
                <h5> {this.props.data.gender === 1 ? "Female" : "Male"}</h5>
                <h6>Known For:</h6>
                <h5>
                  {this.props.data.known_for_department === "Directing"
                    ? this.props.data.known_for_department.replace("ing", "or")
                    : this.props.data.known_for_department.replace("ing", "er")}
                </h5>
                <hr />
                <h6>
                  {" "}
                  <strong> Also known as: </strong>
                </h6>

                {this.props.data.also_known_as.map(x => (
                  <h6 key={x}> {x} </h6>
                ))}
                {this.props.data.also_known_as.length === 0 ? (
                  <p> No Information avalable </p>
                ) : (
                  ""
                )}
              </div>

              {/* <HomePage data={data.homepage} />
                  <IMDBIcon data={data.imdb_id} />
                  <FacebookIcon data={data.external_ids.facebook_id} />
                  <InstagramIcon data={data.external_ids.instagram_id} />
                  <Twitter data={data.external_ids.twitter_id} /> */}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE END*/}
      </div>
    );
  }
}

export default PeopleDetailsBody;
