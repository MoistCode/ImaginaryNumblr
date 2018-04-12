import {
  RECEIVE_BLOGPOSTS,
  RECEIVE_BLOGPOST,
  REMOVE_BLOGPOST
} from '../actions/blogpost_actions';
import merge from 'lodash/merge';

const blogpostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_BLOGPOSTS:
      return merge({}, oldState, action.blogposts.blogposts);
    case RECEIVE_BLOGPOST:
      return merge({}, oldState, { [Object.keys(action.blogpost.blogposts)[0]]: Object.values(action.blogpost.blogposts)[0] });
    case REMOVE_BLOGPOST:
      let newState = merge({}, oldState);
      delete newState[action.blogpostId];
      return newState;
    default:
      return oldState;
  }
};

export default blogpostsReducer;
