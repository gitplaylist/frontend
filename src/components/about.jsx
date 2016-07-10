import React from 'react';


export class AboutView extends React.Component {
  render() {
      return (
        <div class="container">
          <h3>Login</h3>
          <hr/>
          <form action="/users/authorize/" method="post">
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
          <a href="">Github Login</a>
        </div>
      )
  }
}
