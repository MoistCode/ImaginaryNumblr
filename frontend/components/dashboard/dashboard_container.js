import Dashboard from './dashboard';
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

export default connect(mapStateToProps)(Dashboard);
