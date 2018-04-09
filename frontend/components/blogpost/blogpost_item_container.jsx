import BlogpostItem from './blogpost_item';
import { connect } from 'react-redux';
import { updateBlogpost } from '../../util/blogpost_util';

const mapStateToProps = (state) => {
  let currentUser;
  if (state.session.currentUser != undefined) {
    currentUser = Object.keys(state.session.currentUser.users)[0]
    return { currentUser }
  } else {
    return { currentUser: 'none' }
  }

};

const mapDispatchToProps = (dispatch) => ({
  updateBlogpost: (blogpost, blogpostId) => dispatch(updateBlogpost(blogpost, blogpostId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogpostItem);
