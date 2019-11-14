import React, { Component } from "react";
import Rating from "react-rating";

class ModalForWeekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalData: []
    };
  }

  render() {
    console.log(this.props.data)
    return (
      <div
        style={{
          display: "inline-grid"
        }}
      >
        <div
          className="text-center "
          style={{
            width: "160px",
            display: "inline-block",
            // marginLeft: "10px",
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
          style={{ color: "gold", textAlign: 'center' }}
          initialRating={this.props.data.vote_average / 2}
          emptySymbol={"fa fa-star-o fa-1x "}
          fullSymbol={"fa fa-star fa-1x "}
          start="0"
          stop="5"
          step="1"
          readonly="true"
        />
        {/* <h5 style={{ padding: "0px", margin: "0px", fontSize: "18px" }}>
            {this.props.data.name}
          </h5>
          <h6 style={{ whiteSpace: "normal" }}>
            {this.props.data.character.length >= 30
              ? this.props.data.character.slice(0, 25) + "..."
              : this.props.data.character}
          </h6> */}

      </div>
    );
  }
}

export default ModalForWeekly;
