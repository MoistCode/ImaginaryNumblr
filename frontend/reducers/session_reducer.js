import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({ currentUser: null });

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });

    case RECEIVE_USERS:
      let newState2;
      const currentUserId = Object.keys(oldState.currentUser.users)[0];
      if (action != undefined && action.users.users[currentUserId] != undefined) {
        newState2 = merge({}, { currentUser: { users: { [currentUserId]: action.users.users[currentUserId]}}} );
      } else {
        newState2 = merge({}, oldState);
      }
      return newState2;

    case RECEIVE_USER:
      let newState;
      const currentUserId2 = Object.keys(oldState.currentUser.users)[0];
      if (action.user.users[currentUserId2] != undefined) {
        newState = merge({}, { currentUser: { users: { [currentUserId2]: action.user.users[currentUserId2]}}} );
      } else {
        newState = merge({}, oldState);
      }
      return newState;

    default:
      return oldState;
  }
};

export default sessionReducer;
