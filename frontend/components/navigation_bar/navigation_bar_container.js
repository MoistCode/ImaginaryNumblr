import NavigationBar from './navigation_bar';
import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
