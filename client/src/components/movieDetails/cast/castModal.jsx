import React from "react";
import Modal from "react-modal";
import formatDate from "../../../utilities/dataFormat";

// work around, important
Modal.setAppElement("#root");

const CastModal = ({ modalIsOpen, closeModal, modalData }) => {
  if (modalData.length === 0) {
    return "";
  } else {
    const { data } = modalData;
    return (
      <div>
        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Modal-Overlay"
          contentLasbel="Example Modal"
        >
          {/* The cast's card */}

          <button
            type="button"
            class="close btn-lg"
            aria-label="Close"
            style={{
              color: "white",
              height: "40px",
              width: "80px",
              outline: "none"
            }}
            onClick={closeModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div
            className="row mobile-size">
            <div className="col-12 col-sm-6">
              <hr />
              <h3 style={{marginLeft: '15px'}}>
                <strong >
                  Hi, I'am {data.name} ({formatDate(data.birthday, "YYYY")})
                </strong>
              </h3>
              <p className="multiline-ellipsis-people-modal">
                {data.biography || <p>No Information avalable </p>}
              </p>
              <h5 className="filters" >
                <strong> Also known as: </strong>
              </h5>
              <ul className="filters">
                {data.also_known_as.slice(0, 9).map(x => (
                  <li key={x}> {x} </li>
                ))}
                {data.also_known_as.length === 0 ? (
                  <p> No Information avalable </p>
                ) : (
                    ""
                  )}
              </ul>
              <button className="more btn btn-primary btn-sm ">More</button>
            </div>
            <div className=" col-0 col-sm-1"></div>
            <div className="col-12 col-sm-5">
              <img
                className='case-image-modal'
                src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
                alt=""
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
};

export default CastModal;
