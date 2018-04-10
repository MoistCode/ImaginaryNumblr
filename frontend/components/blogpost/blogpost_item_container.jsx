import BlogpostItem from './blogpost_item';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateBlogpost, deleteBlogpost } from '../../actions/blogpost_actions';

const mapStateToProps = (state) => {
  let currentUser;
  if (state.session.currentUser != undefined) {
    currentUser = Object.keys(state.session.currentUser.users)[0]
    return { currentUser, errors: state.errors.blogpost}
  } else {
    return { currentUser: 'none', errors: state.errors.blogpost }
  }

};

const mapDispatchToProps = (dispatch) => ({
  updateBlogpost: (blogpost, blogpostId) => dispatch(updateBlogpost(blogpost, blogpostId)),
  deleteBlogpost: (blogpostId) => dispatch(deleteBlogpost(blogpostId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogpostItem));
