import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import MsgRow from "./MsgRow";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class MsgDisplay extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="container container-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Timestamp</th>
            </tr>
          </thead>
          {this.props.items.map((key, value) => (
            <MsgRow key={value} row={key} value={value} />
          ))}
        </table>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    items: store.items
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MsgDisplay);
