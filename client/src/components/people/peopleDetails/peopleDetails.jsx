import React, { Component } from "react";
import {
  getPersonDetails,
  getMovieCredit,
  getTvCredit,
  getPeoplePictures
} from "../../../services/peopleServise";
import "react-tabs/style/react-tabs.css";
import PeopleDescription from "./peopleDescription";
import Image from "../../movieDetails/imageMovieDetails";
import PeopleDetailsBody from "./peopleDetailsBody";

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
      peoplePictures: peoplePictures.data,
      modalIsOpen: false
    });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    if (this.state.data.also_known_as === undefined) {
      return "";
    } else {
      return (
        <div>
          {/* image gackgroung container start*/}
          <div className="image-background">
            <div className="container ">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <Image imageId={this.state.data.profile_path} />
                </div>

                <div className="col-12 col-sm-8 movie-description-container">
                  <PeopleDescription
                    data={this.state.data}
                    modalIsOpen={this.state.modalIsOpen}
                    closeModal={this.closeModal}
                    openModal={this.openModal}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* image gackgroung container  end*/}

          {/*  */}
          {/* <br /> */}
          <PeopleDetailsBody
            data={this.state.data}
            movieCredit={this.state.movieCredit}
            tvCredit={this.state.tvCredit}
            peoplePictures={this.state.peoplePictures}
          />
          {/*  */}

          <div className="container">
            <div
              className="row"
              style={{ fontSize: "19px", lineHeight: "1.2" }}
            >
              <div className="col-0 col-sm-1"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PeopleDetails;
