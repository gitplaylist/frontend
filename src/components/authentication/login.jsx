import React from 'react';


export class LoginView extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <hr/>
        <form action="/users/authorize" method="post">
          <label>
            Email
            <input name="email" type="email"/>
          </label>
          <label>
            Password
            <input name="password" type="Password"/>
          </label>
          <input type="submit"/>
        </form>
        <a>Forgot Password?</a>
        <a href="/users/github">Github Login</a>
        <a href="/users/spotify">Spotify Login</a>
      </div>
    );
  }
}
