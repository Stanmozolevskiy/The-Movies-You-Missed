import React from "react";
import Modal from "react-modal";

// work around, important
Modal.setAppElement("#root");

const PosterModal = ({ modalIsOpen, afterOpenModal, closeModal, imgUrl }) => {
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
        {/* The Image sorce */}
        <img
          src={imgUrl}
          alt=""
          style={{ maxWidth: "1170px", maxHeight: "1920px" }}
        />
      </Modal>
    </div>
  );
};

export default PosterModal;
