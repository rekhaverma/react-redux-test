import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router";
import { connect } from "react-redux";
import store from "./redux/redux_store";
import { logout } from "./redux/action/actions";
import { browserHistory } from "react-router";

class App extends Component {
  logout = () => {
    store.dispatch(logout());
    browserHistory.push("/");
  };
  render() {
    var currentLocation = this.props.location.pathname;
    console.log(
      "var currentLocation = this.props.location.pathname",
      this.props.location.pathname
    );
    console.log("state of aaap", store.getState());
    const { loginUser } = store.getState();
    console.log("this.props", this.props);
    return (
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/" className={currentLocation === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            {!loginUser && (
              <li>
                <Link
                  to="/login"
                  className={currentLocation === "/login" ? "active" : ""}
                >
                  Signin
                </Link>
              </li>
            )}
            {loginUser && (
              <li>
                <Link
                  to="/administration"
                  className={
                    currentLocation === "/administration" ? "active" : ""
                  }
                >
                  Administration
                </Link>
              </li>
            )}
            {loginUser && (
              <li>
                <a onClick={this.logout}>logout</a>
              </li>
            )}
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default (App = connect(state => {
  console.log("state of App component----------->", state);
  return {
    state
  };
})(App));
