import React, { Component } from "react";
import store from "./redux/redux_store";
import { saveContactUsInfo } from "./redux/action/actions";
import { toastrModal } from "./toastrModal.js";

class ContactUsForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  };
  onSubmit = event => {
    event.preventDefault();
    const { toastr } = this.props;
    const emailReg = /^[^@\s]+@[^@\s]+$/;
    const phoneRegx = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (!this.state.firstName) {
      toastr.error("Please enter first name.", "Error");
      return false;
    } else if (!this.state.lastName) {
      toastr.error("Please enter your last name.", "Error");
      return false;
    } else if (!this.state.email) {
      toastr.error("Please enter your email.", "Error");
      return false;
    } else if (!this.state.phone) {
      toastr.error("Please enter your Phone.", "Error");
      return false;
    } else if (!emailReg.test(this.state.email)) {
      toastr.error("Please enter valid email address", "Error");
      return false;
    } else if (!phoneRegx.test(this.state.phone)) {
      toastr.error("Please enter valid phone", "Error");
      return false;
    }

    let payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    };
    store.dispatch(saveContactUsInfo(payload));
  };

  handleInputChange = inputName => e => {
    this.setState({
      [inputName]: e.target.value
    });
  };
  render() {
    return (
      <div className="">
        <form>
          <h1>Contact Us</h1>
          <fieldset>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange("firstName")}
              name="firstName"
              required
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              onChange={this.handleInputChange("lastName")}
              id="lastName"
              value={this.state.lastName}
              name="lastName"
            />
            <label htmlFor="annualSalary">Email:</label>
            <input
              type="email"
              onChange={this.handleInputChange("email")}
              id="email"
              name="email"
            />
            <label htmlFor="superRate">Phone:</label>
            <input
              type="number"
              onChange={this.handleInputChange("phone")}
              id="telephone"
              name="telephone"
              value={this.state.phone}
            />
          </fieldset>
          <button type="button" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default toastrModal(ContactUsForm);
