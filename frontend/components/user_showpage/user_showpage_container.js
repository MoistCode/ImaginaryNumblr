import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_showpage';
import { fetchUser } from '../../actions/user_actions';
import { fetchBlogposts } from '../../actions/blogpost_actions';

const _generateUserBlogposts = (blogposts, usersBlogpostIds) => {
  if (blogposts.blogposts != undefined) {
    return usersBlogpostIds.map((id) => blogposts.blogposts[id])
  }
};

const mapStateToProps = (state, ownProps) => {
  if (
    state.users[ownProps.match.params.userId] != undefined &&
    state.users[ownProps.match.params.userId].blogpostIds != undefined
  ) {
    return {
      user: state.users[ownProps.match.params.userId],
      blogposts: _generateUserBlogposts(state.blogposts, state.users[ownProps.match.params.userId].blogpostIds)
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
