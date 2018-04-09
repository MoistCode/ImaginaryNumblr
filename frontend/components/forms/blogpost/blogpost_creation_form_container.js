import BlogPostCreationForm from './blogpost_creation_form';
import { connect } from 'react-redux';
import { postBlogpost, clearErrors } from '../../../actions/blogpost_actions';

const _checkCurrentUser = (currentUser) => {
  if (currentUser != null) {
    return Object.values(currentUser.users)
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  currentUser: _checkCurrentUser(state.session.currentUser),
  errors: state.errors.blogpost
});

const mapDispatchToProps = (dispatch) => ({
  createBlogpost: (blogpost) => dispatch(postBlogpost(blogpost)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostCreationForm);
