import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USERS:
      return merge({}, oldState, action.users.users);
    case RECEIVE_USER:
      const receivedUser = Object.values(action.user.users)[0];
      return merge({}, oldState, { [receivedUser.id]: receivedUser });
    default:
      return oldState;
  }
}

export default usersReducer;
