import BlogpostItem from './blogpost_item';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateBlogpost, deleteBlogpost, fetchBlogpost } from '../../actions/blogpost_actions';
import {
  fetchUser,
  postFollow,
  destroyFollow,
  postLike,
  destroyLike
 } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  let currentUser;
  if (state.session.currentUser != undefined) {
    currentUser = Object.keys(state.session.currentUser.users)[0]
    return {
      currentUser,
      errors: state.errors.blogpost,
      arrayOfCurrentUserLikes: Object.values(state.session.currentUser.users)[0].likedBlogIds
    }
  } else {
    return { currentUser: 'none',
      errors: state.errors.blogpost,
      arrayOfCurrentUserLikes: []
     }
  }

};

const mapDispatchToProps = (dispatch) => ({
  updateBlogpost: (blogpost, blogpostId) => dispatch(updateBlogpost(blogpost, blogpostId)),
  deleteBlogpost: (blogpostId) => dispatch(deleteBlogpost(blogpostId)),
  fetchBlogpost: (blogpostId) => dispatch(fetchBlogpost(blogpostId)),
  destroyFollow: (followeeId) => dispatch(destroyFollow(followeeId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  postLike: (blogId) => dispatch(postLike(blogId)),
  destroyLike: (blogId) => dispatch(destroyLike(blogId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogpostItem));
