import BlogPostCreationForm from './blogpost_creation_form';
import { connect } from 'react-redux';

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

});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostCreationForm);
