import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { IndexView } from './index.jsx';
import { LoginView } from './authentication/login.jsx';
import { SignupView } from './authentication/signup.jsx';
import { NoMatchView } from './nomatch.jsx';
import { BaseTemplate } from './base.jsx';


export const router = <Router history={browserHistory}>
  <Route path="/" component={BaseTemplate}>
    <IndexRoute component={IndexView} />
    <Route path="login" component={LoginView} />
    <Route path="sign-up" component={SignupView} />
    <Route path="*" component={NoMatchView} />
  </Route>
</Router>;
