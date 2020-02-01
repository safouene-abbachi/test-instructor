import React, { Component } from "react";
import { Modal, Button } from "reactstrap";
import { connect } from "react-redux";
import { deleteUser } from "../../js/actions/User";

class AlertModal extends Component {
  delUser = () => {
    deleteUser(this.props.id);
  };
  render() {
    return (
      <Modal
        isOpen={this.props.show}
        className="modal-sm"
        modalClassName="bd-example-modal-sm"
        toggle={this.props.toggle}
      >
        <div className="modal-header">
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
          <h4 className="title">Whould really delete this user?</h4>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="danger"
              onClick={() => this.delUser()}
              type="button"
            >
              Delete
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="default"
              type="button"
              onClick={this.props.toggle}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  deleteUser
};

export default connect(null, mapDispatchToProps)(AlertModal);
