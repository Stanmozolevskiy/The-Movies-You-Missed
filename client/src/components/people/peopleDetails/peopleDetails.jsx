import React, { Component } from "react";
import {
  getPersonDetails,
  getMovieCredit,
  getTvCredit
} from "../../../services/peopleServise";
import formatDate from "../../../utilities/dataFormat";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MovieContainer from "../../common/movieContainer";

class PeopleDetails extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      data: {},
      movieCredit: {},
      tvCredit: {}
    };
  }
  onTabClick = () => {
    console.log("selected");
  };
  async componentDidMount() {
    const data = await getPersonDetails(this.props.match.params.id);
    const movieCredit = await getMovieCredit(this.props.match.params.id);
    const tvCredit = await getTvCredit(this.props.match.params.id);
    this.setState({
      data: data.data,
      movieCredit: movieCredit.data,
      tvCredit: tvCredit.data
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
          </div>
          <br />
          <Tabs>
            <TabList>
              <Tab onClick={this.onTabClick}>Movies</Tab>
              <Tab onClick={this.onTabClick}>Tv Show</Tab>
              <Tab onClick={this.onTabClick}>Pictures</Tab>
            </TabList>

            <TabPanel>
              <h2>Movie Credits</h2>

              {this.state.movieCredit.cast
                .filter(x => x !== null)
                .map(data => (
                  <MovieContainer
                    key={data.id}
                    data={data}
                    props={this.props}
                    size="col-md-2"
                  />
                ))}
            </TabPanel>
            <TabPanel>
              <h2>Tv Credits</h2>

              {this.state.tvCredit.cast
                .filter(x => x !== null)
                .map(data => (
                  <MovieContainer
                    key={data.id}
                    data={data}
                    props={this.props}
                    size="col-md-2"
                  />
                ))}
            </TabPanel>
            <TabPanel>
              <h2>Pictures are here</h2>
            </TabPanel>
          </Tabs>
        </div>
      );
    }
  }
}

export default PeopleDetails;
