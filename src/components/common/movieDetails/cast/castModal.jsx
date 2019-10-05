import React from "react";
import Modal from "react-modal";

// work around, important
Modal.setAppElement("#root");

const CastModal = ({ modalIsOpen, afterOpenModal, closeModal, data }) => {
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
        {/* The cast's card */}
        <h4 style={{ color: "white" }}>{data.name}</h4>
        <p style={{ color: "white" }}>More info coming soon</p>
        <button className="btn btn-primary btn-sm">Details</button>
      </Modal>
    </div>
  );
};

export default CastModal;
