import NavigationBar from './navigation_bar';
import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavigationBar)
);
