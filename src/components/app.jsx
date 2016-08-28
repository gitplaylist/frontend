import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { IndexView } from './index.jsx';
import { AboutView } from './about.jsx';
import { NoMatchView } from './nomatch.jsx';


export class App extends React.Component {
  render() {
    return (<div>
      <header>
        <div className="top-bar">
          <h1>
            <Link to="/">gitPlaylists</Link>
          </h1>
          <nav>
            <Link to="/about">Login</Link>
            <Link to="/login">Sign up</Link>
          </nav>
        </div>
      </header>
      <main>
        {this.props.children}
      </main>
      <footer className="container">
        <hr/>
        <span>
          FOOTER
        </span>
      </footer>
    </div>);
  }
}

export const router = <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={IndexView} />
    <Route path="about" component={AboutView} />
    <Route path="*" component={NoMatchView} />
  </Route>
</Router>;
