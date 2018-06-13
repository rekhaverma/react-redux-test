import React from "react";
import { login } from "./redux/action/actions";
import store from "./redux/redux_store";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

class Login extends React.Component {
  componentWillUpdate() {
    const { loginUser } = store.getState();
    loginUser && browserHistory.push("/administration");
  }
  onSubmit = event => {
    event.preventDefault();
    let payload = {
      name: this.userName.value,
      password: this.password.value
    };
    store.dispatch(login(payload));
  };
  render() {
    console.log("login user", store.getState());
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              name="uname"
              required
              ref={ref => (this.userName = ref)}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="psw"
              ref={ref => (this.password = ref)}
              required
            />

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default (Login = connect(state => {
  console.log("state of login component----------->", state);
  return {
    state
  };
})(Login));
