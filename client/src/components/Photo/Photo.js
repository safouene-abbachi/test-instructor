import React, { Component } from "react";
import { Card, CardImg, CardBody, Col, Row } from "reactstrap";
import { connect } from "react-redux";

import ShowPic from "../Modals/ShowPic";
import { deletePhoto } from "../../js/actions/Gallery";

class Photo extends Component {
  state = {
    show: false,
    path: ""
  };
  showPic = () => {
    this.setState({
      show: true,
      path: this.props.path
    });
  };
  deletePic = e => {
    deletePhoto(e.target.id, this.props.userId);
  };
  render() {
    return (
      <Col>
        <ShowPic
          show={this.props.pic.show}
          path={this.props.pic.path}
          toggle={() => this.showPic({ show: false, path: "" })}
        />
        <Card style={{ width: "20rem" }}>
          <CardImg
            top
            src={this.props.path}
            alt="..."
            style={{ height: "250px" }}
          />
          <CardBody>
            <Row>
              <Col>{this.props.title}</Col>
              <Col className="ml-auto">
                <img
                  src={require("../../assets/icons/eye.svg")}
                  alt="eye "
                  className="fa "
                  onClick={this.showPic}
                />
                <img
                  userId={this.props.userId}
                  id={this.props.id}
                  src={require("../../assets/icons/delete.svg")}
                  alt="eye"
                  className="fa ml-3"
                  onClick={e => this.deletePic(e)}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const mapDispatchToProps = {
  deletePhoto
};

export default connect(null, mapDispatchToProps)(Photo);
