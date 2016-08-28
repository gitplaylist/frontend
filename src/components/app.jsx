import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { IndexView } from './index.jsx';
import { AboutView } from './about.jsx';
import { NoMatchView } from './nomatch.jsx';
import { BaseTemplate } from './base.jsx';


export const router = <Router history={browserHistory}>
  <Route path="/" component={BaseTemplate}>
    <IndexRoute component={IndexView} />
    <Route path="about" component={AboutView} />
    <Route path="*" component={NoMatchView} />
  </Route>
</Router>;
