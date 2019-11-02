import React from "react";
import Modal from "react-modal";
import formatDate from "../../../utilities/dataFormat";

// work around, important
Modal.setAppElement("#root");

const PeopleDescription = ({ data, modalIsOpen, closeModal, openModal }) => {
  return (
    <div>
      <h1 className="movie-title">
        {data.name} ({formatDate(data.birthday, "YYYY")})
      </h1>
      <h4> here will be media account if not null</h4>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 multiline-ellipsis-people-details ">
            {data.biography}
          </div>
        </div>

        <div
          className={data.biography.length <= 534 ? "display-none" : ""}
          style={{ textAlign: "center", cursor: "pointer" }}
          onClick={openModal}
        >
          <i
            className="fa fa-chevron-circle-down fa-1x"
            aria-hidden="true"
            style={{ margin: "5px" }}
          ></i>
          read more
        </div>
      </div>
      <h6 className="overview">{data.overview}</h6>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Modal-Overlay"
        contentLasbel="Example Modal"
      >
        <div className="row people-biography-modal">{data.biography}</div>
      </Modal>
    </div>
  );
};

export default PeopleDescription;
