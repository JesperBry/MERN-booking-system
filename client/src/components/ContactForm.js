import React, { setGlobal } from "reactn";
import TextField from "@material-ui/core/TextField";
import EmailValidator from "email-validator";

import "../styles/ContactForm.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validatePhone: false,
      showPhoneError: false,
      validateEmail: false,
      showEmailError: false
    };

    setGlobal({
      stepperDisabled: true,
      firstName: null,
      lastName: null,
      email: null,
      phone: null
    });
  }

  _validatePhone = number => {
    const phoneRegex = /^(\+?)([0-9]{2,3})?(-?)([0-9]{6,12})$/;
    if (phoneRegex.test(number)) {
      this.setGlobal({ phoneErrorMessage: null });
      this.setState({
        validatePhone: true,
        showPhoneError: false
      });
    } else {
      this.setGlobal({ phoneErrorMessage: "Enter avalid phone number" });
      this.setState({
        validatePhone: false,
        showPhoneError: true
      });
    }
  };

  _validateEmail = email => {
    if (EmailValidator.validate(email)) {
      this.setGlobal({ emailErrorMessage: null });
      this.setState({
        validateEmail: true,
        showEmailError: false
      });
    } else {
      this.setGlobal({ emailErrorMessage: "Enter avalid email address" });
      this.setState({
        validateEmail: false,
        showEmailError: true
      });
    }
  };

  _handleFirstName = e => {
    this.setGlobal({ firstName: e.target.value });
  };

  _handleLastName = e => {
    this.setGlobal({ lastName: e.target.value });
  };

  _handleEmail = e => {
    this.setGlobal({ email: e.target.value });
    this._validateEmail(this.global.email);
  };

  _handlePhone = e => {
    this.setGlobal({ phone: e.target.value });
    this._validatePhone(this.global.phone);
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
          helperText={this.global.emailErrorMessage}
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
          helperText={this.global.phoneErrorMessage}
          value={this.state.phone}
          onChange={this._handlePhone}
        />
      </div>
    );
  }
}

export default ContactForm;
