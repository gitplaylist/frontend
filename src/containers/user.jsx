import React from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import { addUser, receiveUser } from '../actions/index';


export class UserView extends React.Component {
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
      </div>
    )
  }
}

// function addUser(data) {
//   return dispatch => {
//     dispatch(addUser(data))
//     return fetch('http://localhost:4000/users/')
//       .then(response => response.json())
//       .then(json => dispatch(receiveUser(subreddit, json)))
//   }
// }

export default user
