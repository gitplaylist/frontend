import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="top-bar">
          <h1>
            <Link to="/">gitPlaylists</Link>
          </h1>
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign up</Link>
          </nav>
        </div>
      </header>
    );
  }
}

class Footer extends React.Component {

  render() {
    return (
      <footer className="container">
        <hr/>
        <span>BaseTemplate
          FOOTER
        </span>
      </footer>
    );
  }
}

export class BaseTemplate extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}
