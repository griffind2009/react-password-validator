import React, { Component } from 'react';


class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
    handleChange(e){
    this.setState({
      value: event.target.value
    })
  }
    handleSubmit(e) {
      alert('Your password is valid: ' + this.state.value)
        event.preventDefault()
    }
  render() {
    return (
      <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={this.handleSubmit}>
      E-mail:
      <input type="text" value={this.state.value}  />

        Password:
      <input type="text" value={this.state.value}  />

      Confirmation:
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default SignUp;
