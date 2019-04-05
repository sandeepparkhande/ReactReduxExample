import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { EDIT_ACTION, DELETE_ACTION } from "../action";

class MsgRow extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <tbody>
        <tr>
          <td />
          <td>{this.props.row["id"]} </td>
          <td>{this.props.row["title"]}</td>
          <td>{this.props.row["description"]}</td>
          <td>{this.props.row["date"]}</td>
          <td>
            <button
              onClick={() => this.props.deleteMsg(this.props.row["id"] - 1)}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => this.props.editMsg(this.props.row["id"] - 1)}
            >
              EDIT
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { deleteMsg: DELETE_ACTION, editMsg: EDIT_ACTION },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MsgRow);
