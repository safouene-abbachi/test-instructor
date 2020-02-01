import React from "react";
import { Modal, CardImg } from "reactstrap";

const showPic = ({ show, toggle, path }) => {
  return (
    <Modal isOpen={show} className="modal-lg" toggle={toggle}>
      <button onClick={toggle}>
        <span aria-hidden={true}>×</span>
      </button>
      <CardImg top src={path} alt="..." />
    </Modal>
  );
};

export default showPic;
