import {
  RECEIVE_BLOGPOST,
  RECEIVE_BLOGPOST_ERRORS
} from '../actions/blogpost_actions';

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

const blogpostErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_BLOGPOST:
      return [];
    case RECEIVE_BLOGPOST:
      let newState;
      if (typeof action.errors !== 'Array') {
        newState = Object.values(action.errors);
      } else {
        newState = oldState.concat(action.errors);
      }
      return _uniqueItUp(newState);
    default:
      return oldState;
  }
};

export default blogpostErrorsReducer;
