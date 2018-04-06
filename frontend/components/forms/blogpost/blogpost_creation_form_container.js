import BlogPostCreationForm from './blogpost_creation_form';
import { connect } from 'react-redux';
import { postBlogpost } from '../../../actions/blogpost_actions';

const _checkCurrentUser = (currentUser) => {
  if (currentUser != null) {
    return Object.values(currentUser.users)
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  currentUser: _checkCurrentUser(state.session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  createBlogpost: (blogpost) => dispatch(postBlogpost(blogpost))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostCreationForm);
