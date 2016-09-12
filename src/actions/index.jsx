export const addUser = (email, password) => {
  return {
    type: 'ADD_USER',
    email,
    password
  }
}

export const receiveUser = (json) => {
  return {
    type: 'RECEIVE_USER',
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function pushUser(data) {
  return dispatch => {
    dispatch(addUser(data));
    return fetch('http://localhost:3000/users',
      {
        method: 'POST',
        body: new FormData(data),
        // method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(data),
      }
    ).then(function(response){
      console.log(response);
      return response.json();
    }).then(function(json) {
      return dispatch(receiveUser(json));
    })
  }
}


let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
