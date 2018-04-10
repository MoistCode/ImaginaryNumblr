import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/blogpost_actions';
import { fetchUsers } from '../../actions/user_actions'

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
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
