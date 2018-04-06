import {
  RECEIVE_BLOGPOSTS,
  RECEIVE_BLOGPOST
} from '../actions/blogpost_actions';
import merge from 'lodash/merge';

const blogpostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_BLOGPOSTS:
      return action.blogposts;
    case RECEIVE_BLOGPOST:
      return merge({}, oldState, { [action.blogpost.id]: action.blogpost })
    default:
      return oldState;
  }
};

export default blogpostsReducer;
