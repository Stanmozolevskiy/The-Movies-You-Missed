import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1
  }
};
// work around, important
Modal.setAppElement('#root')

const MovieModal = ({ modalIsOpen, afterOpenModal, closeModal, videoId }) => {

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
        {/* The youtube video */}
        <YouTube
          videoId={videoId}
          opts={opts}
        />
      </Modal>
    </div>
  );
};

export default MovieModal;
