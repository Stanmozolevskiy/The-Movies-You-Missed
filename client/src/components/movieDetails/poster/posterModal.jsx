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
        <button
          type="button"
          class="close btn-lg mobile-size"
          aria-label="Close"
          style={{
            color: 'white',
            height: '0px',
            width: '80px',
            outline: 'none'

          }}
          onClick={closeModal}>
          <span aria-hidden="true">&times;</span>
        </button>

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
