import NavigationBar from './navigation_bar';
import { connect } from 'react-redux';
import {
  logout,
  clearErrors,
  login
} from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout()),
  demoLogin: (user) => dispatch(login(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavigationBar)
);
