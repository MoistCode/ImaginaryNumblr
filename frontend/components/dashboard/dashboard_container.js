import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/blogpost_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchBlogposts } from '../../actions/blogpost_actions';

const _checkCurrentUser = (currentUser) => {
  if (currentUser != null) {
    return Object.values(currentUser.users)
  } else {
    return null;
  }
}

const _getUserIds = (currentUser) => {
  if (currentUser != null) {
    return Object.values(currentUser.users)[0].followeeIds.concat(Object.values(currentUser.users)[0].id)
  } else {
    return null;
  }
}

const userIdsIncluded = (id, arr) => {
  for(let i = 0; i < arr.length; i++) {
    if (id == arr[i]) {
      return true;
    }
  }
  return false;
}

const _getBlogposts = (blogposts, currentUser) => {
  if (Object.values(blogposts).length == 0) {
    return []
  };
  const userIds = _getUserIds(currentUser);

  if (userIds != null) {
    let arrOfBlogposts = [];
    Object.values(blogposts.blogposts).reverse().forEach((blogpost) => {
      if (userIdsIncluded(blogpost.authorId, userIds)) {
        arrOfBlogposts.push(blogpost);
      }
    })
    return arrOfBlogposts;
  }
}

const mapStateToProps = (state) => ({
  currentUser: _checkCurrentUser(state.session.currentUser),
  listOfBlogposts: _getBlogposts(state.blogposts, state.session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  fetchUsers: (userIds) => dispatch(fetchUsers(userIds)),
  fetchBlogposts: (blogpostIds) => dispatch(fetchBlogposts(blogpostIds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
