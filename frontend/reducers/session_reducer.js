import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({ currentUser: null });

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    case RECEIVE_USER:
      let newState;
      if (oldState.currentUser.users[Object.keys(action.user.users)[0]] != undefined) {
        newState = merge({}, { currentUser: { users: { [Object.keys(oldState.currentUser.users)[0]]: action.user.users[Object.keys(oldState.currentUser.users)[0]]}}} );
      } else {
        newState = merge({}, oldState);
      }
      return newState;
    default:
      return oldState;
  }
};

export default sessionReducer;
