import React, { Component } from "react";
import {
  getPersonDetails,
  getMovieCredit,
  getTvCredit,
  getPeoplePictures
} from "../../../services/peopleServise";
import formatDate from "../../../utilities/dataFormat";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MovieContainer from "../../common/movieContainer";
import Rating from "react-rating";

class PeopleDetails extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      data: {},
      movieCredit: {},
      tvCredit: {},
      peoplePictures: {}
    };
  }

  async componentDidMount() {
    const data = await getPersonDetails(this.props.match.params.id);
    const movieCredit = await getMovieCredit(this.props.match.params.id);
    const tvCredit = await getTvCredit(this.props.match.params.id);
    const peoplePictures = await getPeoplePictures(this.props.match.params.id);
    this.setState({
      data: data.data,
      movieCredit: movieCredit.data,
      tvCredit: tvCredit.data,
      peoplePictures: peoplePictures.data
    });
  }

  render() {
    console.log(this.state);
    if (this.state.data.also_known_as === undefined) {
      return "";
    } else {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 style={{ marginLeft: "10px", marginTop: "30px" }}>
                  <strong>
                    Hi, I'am {this.state.data.name} (
                    {formatDate(this.state.data.birthday, "YYYY")})
                  </strong>
                </h3>
                <div className="image-curve">
                  <img
                    className="case-image-modal"
                    src={`https://image.tmdb.org/t/p/original/${this.state.data.profile_path}`}
                    alt=""
                  />
                </div>
                <p>
                  {this.state.data.biography || <p>No Information avalable </p>}
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div
              className="row"
              style={{ fontSize: "19px", lineHeight: "1.2" }}
            >
              <div className="col-0 col-sm-5">
                <h3>Known Facts: </h3>
                <div>
                  <h5>
                    <strong>Date of birth: </strong>
                    {formatDate(this.state.data.birthday, "DD MMMM YYYY")}
                  </h5>
                  <h5>
                    <strong>Date of death: </strong>
                    {formatDate(this.state.data.deathday, "DD MMMM YYYY")}
                  </h5>
                  <h5>
                    <strong>Gender: </strong>
                    {this.state.data.gender === 1 ? "Female" : "Male"}
                  </h5>
                  <h5>
                    <strong>Known For: </strong>
                    {this.state.data.known_for_department === "Directing"
                      ? this.state.data.known_for_department.replace(
                          "ing",
                          "or"
                        )
                      : this.state.data.known_for_department.replace(
                          "ing",
                          "er"
                        )}
                  </h5>
                </div>
                <div>
                  <h5>
                    <strong> Also known as: </strong>
                  </h5>
                  <ul>
                    {this.state.data.also_known_as.map(x => (
                      <li key={x}> {x} </li>
                    ))}
                    {this.state.data.also_known_as.length === 0 ? (
                      <p> No Information avalable </p>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <Tabs>
                  <TabList>
                    <Tab onClick={this.onTabClick}>Movies</Tab>
                    <Tab onClick={this.onTabClick}>Tv Show</Tab>
                    <Tab onClick={this.onTabClick}>Pictures</Tab>
                  </TabList>

                  <TabPanel>
                    <h2 className="people-credits-tab-tiele">Acting:</h2>
                    <ul>
                      {this.state.movieCredit.cast
                        .filter(x => x !== null)
                        .sort(
                          (a, b) =>
                            formatDate(b.release_date, "YYYY") -
                            formatDate(a.release_date, "YYYY")
                        )
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
                  </TabPanel>
                  <TabPanel>
                    <h2 className="people-credits-tab-tiele">Tv Credits</h2>
                    <ul style={{ fontSize: "19px", lineHeight: "1.2" }}>
                      {this.state.tvCredit.cast
                        .filter(x => x !== null)
                        .sort(
                          (a, b) =>
                            formatDate(b.first_air_date, "YYYY") -
                            formatDate(a.first_air_date, "YYYY")
                        )
                        .map(x => (
                          <li key={x.id}>
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
                            <p>Country: {x.origin_country}</p>
                          </li>
                        ))}
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    {this.state.peoplePictures.profiles.map(x => (
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
              <div className="col-0 col-sm-1"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PeopleDetails;
