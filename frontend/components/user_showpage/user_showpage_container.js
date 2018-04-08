import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_showpage';
import { fetchUser } from '../../actions/user_actions';
import { fetchBlogposts } from '../../actions/blogpost_actions';

const _generateUserBlogposts = (blogposts, usersBlogpostIds) => {
  return usersBlogpostIds.map((id) => blogposts[id])
};

const mapStateToProps = (state, ownProps) => {
  if (state.users[ownProps.match.params.userId] != undefined) {
    return {
      user: state.users[ownProps.match.params.userId],
      blogposts: _generateUserBlogposts(state.blogposts, state.users[ownProps.match.params.userId].blogposts)
    };
  }
  return { user: 'none' }
};

const mapDispatchToProps = (dispatch) => ({
  // fetch blogposts here correlating to :userId
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUserBlogposts: (blogpostIds) => dispatch(fetchBlogposts(blogpostIds))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserShowPage)
);
