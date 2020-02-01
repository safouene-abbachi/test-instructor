import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import AlertModal from "../Modals/AlertModal";

const User = ({ id, name, surName, birthPlace, birthYear }) => {
  const [del, setdel] = useState({
    show: false,
    id: ""
  });
  const [edit, setedit] = useState({
    show: false,
    id: ""
  });

  const editUser = e => {
    setedit({ show: true, id: e.target.id });
    console.log("TCL: accessGallery -> e.target.id", e.target.id);
  };
  const delUser = e => {
    console.log("TCL: editUser -> id", e.target.id);
    setdel({
      show: true,
      id: e.target.id
    });
  };
  return (
    <>
      <Row>
        <hr />
        <Col>{name}</Col>
        <Col>{surName}</Col>
        <Col>{birthYear}</Col>
        <Col>{birthPlace}</Col>
        <Col>
          <Row>
            <Col>
              <Link to={`/gallery/${id}`}>
                <img
                  id={id}
                  style={{ cursor: "pointer" }}
                  className="fa"
                  src={require("../../assets/icons/photos.svg")}
                  onClick={e => this.accessGallery(e)}
                  alt="Gallery"
                />
              </Link>
            </Col>
            <Col>
              <img
                id={id}
                style={{ cursor: "pointer" }}
                className="fa"
                src={require("../../assets/icons/edit.svg")}
                onClick={e => editUser(e)}
                alt="edit"
              />
            </Col>
            <Col>
              <img
                id={id}
                style={{ cursor: "pointer" }}
                className="fa"
                src={require("../../assets/icons/delete.svg")}
                onClick={e => delUser(e)}
                alt="edit"
              />
            </Col>
          </Row>
        </Col>
        <hr />
      </Row>
      <AlertModal
        show={del.show}
        toggle={() => setdel({ show: false, id: "" })}
        id={del.id}
      />
    </>
  );
};

export default User;
