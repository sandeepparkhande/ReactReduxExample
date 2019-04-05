import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ADD_ACTION } from "./../action";

class MsgForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      msg: this.props.msg,
      detail: this.props.detail
    };
    this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.props.onSubmit.bind(this);
  }

  render() {
    return (
      <div className="container container-table">
        <form>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              className="form-control"
              value={this.state.msg}
              onChange={this.onChange}
              id="msg"
              placeholder=" Please enter Subject"
            />
          </div>
          <div className="form-group">
            <label>Message Details</label>
            <input
              type="text"
              className="form-control"
              id="detail"
              value={this.state.detail}
              onChange={this.onChange}
              placeholder="Please enter Message details"
            />
          </div>
          {/* We are calling parent function directly without bind => used for thht */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={e =>
              this.props.addMessage(this.state.msg, this.state.detail)
            }
          >
            POST Message
          </button>
        </form>
      </div>
    );
  }
  onChange(event) {
    console.log(event.target.id);
    this.setState({ [event.target.id]: event.target.value });
  }
}

function mapStateToProps(state) {
  return {
    msg: state.msg,
    detail: state.detail
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addStoreMessage: ADD_ACTION }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MsgForm);
