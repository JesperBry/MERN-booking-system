import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import EmailValidator from "email-validator";

import "../styles/ContactForm.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      validatePhone: false,
      showPhoneError: false,
      validateEmail: false,
      showEmailError: false,
      emailErrorMessage: null,
      phoneErrorMessage: null
    };
  }

  _validatePhone = number => {
    const phoneRegex = /^(\+?)([0-9]{2,3})?(-?)([0-9]{6,12})$/;
    if (phoneRegex.test(number)) {
      this.setState({
        validatePhone: true,
        showPhoneError: false,
        phoneErrorMessage: null
      });
    } else {
      this.setState({
        validatePhone: false,
        showPhoneError: true,
        phoneErrorMessage: "Enter avalid phone number"
      });
    }
  };

  _validateEmail = email => {
    if (EmailValidator.validate(email)) {
      this.setState({
        validateEmail: true,
        showEmailError: false,
        emailErrorMessage: null
      });
    } else {
      this.setState({
        validateEmail: false,
        showEmailError: true,
        emailErrorMessage: "Enter avalid email address"
      });
    }
  };

  _handleFirstName = e => {
    this.setState({ firstName: e.target.value });
  };

  _handleLastName = e => {
    this.setState({ lastName: e.target.value });
  };

  _handleEmail = e => {
    this.setState({ email: e.target.value });
    this._validateEmail(this.state.email);
  };

  _handlePhone = e => {
    this.setState({ phone: e.target.value });
    this._validatePhone(this.state.phone);
  };

  render() {
    return (
      <div className="contactForm">
        <TextField
          style={{ marginBottom: "1rem" }}
          name="first_name"
          label="First Name"
          placeholder="First Name"
          required={true}
          value={this.state.firstName}
          onChange={this._handleFirstName}
        />

        <TextField
          style={{ marginBottom: "1rem" }}
          name="last_name"
          label="Last Name"
          placeholder="Last Name"
          required={true}
          value={this.state.lastName}
          onChange={this._handleLastName}
        />

        <TextField
          style={{ marginBottom: "1rem" }}
          name="email"
          label="Email"
          placeholder="Email"
          required={true}
          error={this.state.showEmailError}
          helperText={this.state.emailErrorMessage}
          value={this.state.email}
          onChange={this._handleEmail}
        />

        <TextField
          style={{ marginBottom: "1rem" }}
          name="phone"
          label="Phone"
          placeholder="Phone"
          required={true}
          error={this.state.showPhoneError}
          helperText={this.state.phoneErrorMessage}
          value={this.state.phone}
          onChange={this._handlePhone}
        />
      </div>
    );
  }
}

export default ContactForm;
