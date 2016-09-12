require('es6-promise').polyfill();
require('isomorphic-fetch');
import { addTodo } from '../actions/index'


const user = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        email: action.email,
        password: action.password,
      }
    default:
      return state
  }
}

function addUser(data) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`http://localhost:4000/users/`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(subreddit, json)))
  }
}

export default user
