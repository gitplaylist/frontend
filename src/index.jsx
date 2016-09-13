import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { IndexView } from './components/index';
import { LoginView } from './components/authentication/login';
import { SignUpView } from './components/authentication/sign-up';
import { NoMatchView } from './components/nomatch';
import { BaseTemplate } from './components/base';
import gitplaylistApp from './reducers'


const loggerMiddleware = createLogger()

export let store = createStore(
  gitplaylistApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={BaseTemplate}>
        <IndexRoute component={IndexView} />
        <Route path='login' component={LoginView} />
        <Route path='sign-up' component={SignUpView} />
        <Route path='*' component={NoMatchView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
