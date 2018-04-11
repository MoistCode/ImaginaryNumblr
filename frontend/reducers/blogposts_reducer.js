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
      return merge({}, oldState, action.blogposts);
    case RECEIVE_BLOGPOST:
      if (action.blogpost.blogposts != undefined) {
        return merge({}, oldState, { blogposts: action.blogpost.blogposts });
      }
      return merge({}, oldState, { [action.blogpost.id]: action.blogpost });
    case REMOVE_BLOGPOST:
      let newState = merge({}, oldState);
      delete newState[action.blogpostId];
      return newState;
    default:
      return oldState;
  }
};

export default blogpostsReducer;
