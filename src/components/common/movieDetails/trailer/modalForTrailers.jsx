import React, { Component } from "react";
import TrailerModal from "./trailerModal";

class ModalForTrailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div
        className="text-center hover-red"
        style={{
          display: "inline-block",
          margin: "10px",
          color: "white"
        }}
      >
        <div onClick={this.openModal}>
          <i
            className=" fa fa-play fa-3x"
            aria-hidden="true"
            style={{
              margin: "5px",
              position: "relative",
              left: "50%",
              right: "50%"
            }}
          />
          <img
            src={`https://img.youtube.com/vi/${this.props.data.key}/mqdefault.jpg`}
            alt=""
            style={{ height: "240px", width: "auto" }}
          />
        </div>
        <TrailerModal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          videoId={this.props.data.key}
        />
      </div>
    );
  }
}

export default ModalForTrailer;
