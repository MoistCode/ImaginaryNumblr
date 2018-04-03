import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../../session_actions.js';

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(SessionForm);
