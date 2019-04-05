import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import MsgDisplay from "./components/MsgDisplay";
import MsgForm from "./components/MsgForm";
import { ADD_ACTION } from "./action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    /*
    this.state = {
      items: [
        {
          id: "1",
          title: " Equity",
          description: " Equity Details",
          date: new Date().toDateString()
        },
        {
          id: "2",
          title: " Commodities",
          description: " Commodities Details",
          date: new Date().toDateString()
        },
        {
          id: "3",
          title: " Shares",
          description: " Shares Details",
          date: new Date().toDateString()
        }
      ]
    };
    */
    this.addMessage = this.addMessage.bind(this);
  }
  render() {
    return (
      <div class="container container-table">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1"> App Message Navbar</span>
        </nav>
        <MsgForm addMessage={this.addMessage} />
        <MsgDisplay />
      </div>
    );
  }

  // Event trigger gone through parent
  addMessage(msg, detail) {
    //event.preventDefault();
    console.log(" Message onSubmit ", msg, detail);
    if (this.props.items !== undefined) {
      const item = {
        id: this.props.items.length + 1,
        title: msg,
        description: detail,
        date: new Date().toDateString()
      };
      //this.props.items.push(item);
      this.props.addStoreMessage(item);
    }
    /// this.setState({ items: [...this.state.items.concat(item)] });
  }
}

/*
Below is the same counter app, but using Redux. 
The important thing to note is that counter now comes from this.props.counter 
after being mapped from mapStateToProps in the connect function, 
which takes the counter value from the global store and maps it to the current component’s props.
*/

function mapStateToProps(store) {
  return {
    items: store.items
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addStoreMessage: ADD_ACTION }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
