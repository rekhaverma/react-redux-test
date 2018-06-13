import React from "react";
import store from "./redux/redux_store";
import { connect } from "react-redux";
class Administration extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    // let payload = {
    //   firstName: this.userName.value,
    //   password: this.password.value
    // };
    console.log("this in login--------->", this);
    // store.dispatch(saveContactUsInfo(payload));
  };
  render() {
    console.log("Administartion store", store);
    const { loginUser } = store.getState();
    const { usersData } = this.props;
    console.log("usersData------------->", usersData);
    return (
      <div>
        {loginUser && usersData && usersData.length > 0 ? (
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {usersData.map(user => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <div>Permission denied</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state in mamapStateToProps", state);
  return { usersData: state.usersData };
};
export default connect(mapStateToProps)(Administration);
