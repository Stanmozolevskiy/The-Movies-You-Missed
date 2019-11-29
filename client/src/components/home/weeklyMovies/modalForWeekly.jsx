import React, { Component } from "react";
import Rating from "react-rating";
import starColor from '../../../utilities/starColor'

class ModalForWeekly extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "inline-grid"
        }}
      >
        <div
          className="text-center "
          style={{
            width: "180px",
            display: "inline-block",
            cursor: "pointer"
          }}
        >
          <img
            className=" img-fluid poster-container"
            style={{ maxWidth: "80%" }}
            id={this.props.data.id}
            src={
              this.props.data.poster_path === null
                ? window.location.origin + "/people-image-placeholder.jpg"
                : `https://image.tmdb.org/t/p/w400${this.props.data.poster_path}`
            }
            alt=""
          />
        </div>
        <Rating
          style={{ color: starColor(this.props.data.vote_average / 2) }}
          initialRating={this.props.data.vote_average / 2}
          emptySymbol={"fa fa-star-o fa-1x "}
          fullSymbol={"fa fa-star fa-1x "}
          start="0"
          stop="5"
          step="1"
          readonly="true"
        />
      </div>
    );
  }
}

export default ModalForWeekly;
