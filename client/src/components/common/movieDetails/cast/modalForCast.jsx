import React, { Component } from "react";
import CastModal from "./castModal";

class ModalForCast extends Component {
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
        style={{
          overflow: "auto",
          whiteSpace: "nowrap",
          display: "inline-block"
        }}
      >
        <div
          className="text-center "
          onClick={this.openModal}
          style={{
            width: "200px",
            display: "inline-block",
            marginLeft: "20px",
            marginRight: "20px",
            cursor: "pointer"
          }}
        >
          <img
            className=" img-fluid poster-container"
            style={{ maxWidth: "80%" }}
            src={
              this.props.data.profile_path === null
                ? window.location.origin + "/people-image-placeholder.jpg"
                : `https://image.tmdb.org/t/p/w400${this.props.data.profile_path}`
            }
            alt=""
          />
          <h5 style={{ padding: "0px", margin: "0px" }}>
            {this.props.data.name}
          </h5>
          <h6 style={{ whiteSpace: "normal" }}>
            {this.props.data.character.length >= 30
              ? this.props.data.character.slice(0, 30) + "..."
              : this.props.data.character}
          </h6>
        </div>
        <CastModal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default ModalForCast;
