import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isShowModal, toggleModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${isShowModal && "show-modal"}`}>
      <div className="modal-container">
        <p>Modal Content goes here</p>
        <button className="close-modal-btn" onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
