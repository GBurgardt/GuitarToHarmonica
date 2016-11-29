import { combineReducers } from 'redux'
import store from '../store.js';

let indexReducer = function(state = [], action) {

  switch (action.type) {
    case 'ADD_LYRICS':
      return [action.lyrics];

    default:
      return state
  }
}

export default combineReducers({
  indexReducer,
})
