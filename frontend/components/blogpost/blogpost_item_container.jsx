import BlogpostItem from './blogpost_item';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  let currentUser;
  if (state.session.currentUser != undefined) {
    currentUser = Object.keys(state.session.currentUser.users)[0]
    return { currentUser }
  } else {
    return { currentUser: 'none' }
  }

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(BlogpostItem);
