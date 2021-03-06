import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CLEARED_ERRORS
} from '../actions/session_actions';

const _uniqueItUp = (arr) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    let unique = true;
    for(let j = (i + 1); j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        unique = false;
      }
    }
    if (unique) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      let newState;
      if (typeof action.errors !== 'Array') {
        newState = Object.values(action.errors);
      } else {
        newState = oldState.concat(action.errors);
      }
      return _uniqueItUp(newState);
    case RECEIVE_CLEARED_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
