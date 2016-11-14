import React, { Component } from 'react';


class SignUp extends Component {
  render() {
    return (
      <div>
      <h1>Sign Up Form</h1>
      <p>E-mail: {this.props.email}</p>
      <p>Passwords {this.props.password}</p>
      <p>Confirmation: {this.props.confirmation}</p>
      </div>
    );
  }
}

export default SignUp;
