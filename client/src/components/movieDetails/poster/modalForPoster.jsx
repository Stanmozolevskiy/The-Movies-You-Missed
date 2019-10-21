import React, { Component } from "react";
import PosterModal from "./posterModal";

class ModalForPoster extends Component {
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
          color: "white",
          minWidth: "40px !important"
        }}
      >
        <div onClick={this.openModal}>
          <img
            src={`https://image.tmdb.org/t/p/original/${this.props.data.file_path}`}
            alt=""
            style={{
              width: "400px",
              maxHeight: "300px",
              cursor: "pointer"
            }}
            className="poster-container"
          />
        </div>
        <PosterModal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          imgUrl={`https://image.tmdb.org/t/p/original/${this.props.data.file_path}`}
        />
      </div>
    );
  }
}

export default ModalForPoster;
