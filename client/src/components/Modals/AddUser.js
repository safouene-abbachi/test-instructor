import React, { Component } from "react";
import { Button, FormGroup, Input, Modal } from "reactstrap";
import { connect } from "react-redux";
import { addUser } from "../../js/actions/User";

class AddUser extends Component {
  state = {
    name: "",
    surName: "",
    birthPlace: "",
    birthYear: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  add = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      surName: "",
      birthPlace: "",
      birthYear: ""
    });
    this.props.toggle();
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalPopoversLabel">
            {this.props.alterUser ? "Modify User" : " Add new User"}
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={this.props.toggle}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <FormGroup>
            <label>Name:</label>
            <Input
              defaultValue={this.state.name}
              placeholder="Name"
              type="text"
              name="name"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <label>Sur Name:</label>
            <Input
              defaultValue={this.state.surName}
              placeholder="Sur Name"
              type="text"
              name="surName"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <label>Birth Year:</label>
            <Input
              defaultValue={this.state.birthYear}
              placeholder="Birth Year"
              type="text"
              name="birthYear"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <label>Birth Place:</label>
            <Input
              defaultValue={this.state.birthPlace}
              placeholder="Birth Place"
              type="text"
              name="birthPlace"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              onClick={this.add}
              type="button"
            >
              {this.props.alterUser ? "Save" : "Add New user"}
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="danger"
              type="button"
              onClick={this.props.toggle}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  addUser
};

export default connect(null, mapDispatchToProps)(AddUser);
