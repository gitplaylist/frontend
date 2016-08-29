import React from 'react';
import $ from 'jquery';
import { Title } from '../utils/title.jsx';


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password: ''
    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    if (!email || !password) {
      return;
    }
    var data = {
      'email': email,
      'password': password,
    }
    $.ajax({
      url: '/users',
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/users', status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>
          Email
          <input
            name='email'
            type='email'
            value={this.state.email}
            onChange={(event) => this.handleEmailChange(event)}
          />
        </label>
        <label>
          Password
          <input
            name='password'
            type='Password'
            value={this.state.password}
            onChange={(event) => this.handlePasswordChange(event)}
          />
        </label>
        <input type='submit'/>
      </form>
    );
  }
}

export class SignUpView extends React.Component {
  render() {
    return (
      <div className='container'>
        <Title value='Sign up'/>
        <h3>Sign up</h3>
        <hr/>
        <SignUpForm/>
        <a>Forgot Password?</a>
        <a href='/users/github'>Github Sign up</a>
        <a href='/users/spotify'>Spotify Sign up</a>
      </div>
    );
  }
}
