import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const opts = {
  height: "702px",
  width: "1152px",
  playerVars: {
    autoplay: 1
  }
};
Modal.setAppElement("#root");

const TrailerModal = ({ modalIsOpen, afterOpenModal, closeModal, videoId }) => {
  return (
    <div>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Modal-Overlay"
        contentLabel="Example Modal"
      >
        <button
          type="button"
          class="close btn-lg"
          aria-label="Close"
          style={{
            color: 'white',
            height: '50px',
            width: '-10px',
            outline: 'none'

          }}
          onClick={closeModal}>
          <span aria-hidden="true">&times;</span>
        </button>
        {/* The youtube video */}
        <YouTube videoId={videoId} opts={opts} />
      </Modal>
    </div>
  );
};

export default TrailerModal;
