import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_showpage';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  if (state.users[ownProps.match.params.userId] != undefined) {
    return {
      user: state.users[ownProps.match.params.userId]
    };
  }
  return { user: 'none' }
};

const mapDispatchToProps = (dispatch) => ({
  // fetch blogposts here correlating to :userId
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserShowPage)
);
