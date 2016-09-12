import { combineReducers } from 'redux'
import todos from './todos'
import user from './users'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  user,
  visibilityFilter
})

export default todoApp
