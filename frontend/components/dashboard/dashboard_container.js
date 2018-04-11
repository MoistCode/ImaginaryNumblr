import Dashboard from './dashboard';
import { withRouter } from 'react-router';
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
  if (currentUser != null && Object.values(currentUser.users)[0].followeeIds != undefined) {
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

const _getUsers = (users, currentUser) => {
  if (Object.values(users).length == 0) {
    return [];
  };
  const userIds = _getUserIds(currentUser);
  if (userIds != undefined && userIds != null && userIds.length != 0 && users.users != undefined) {
    return userIds.map((id) => users.users[id])
  }
};


const _getRandomUsers = (userObjs) => {
  if (userObjs.length == 0 || userObjs[userObjs.length -1] == undefined) {
    return [];
  } else {
    return _randomizeUserObjs([userObjs[userObjs.length -1]], 3);
  }
}

const _randomizeUserObjs = (userObjs, numOfUsers) => {

  let arrOfRandomUsers = [];
  while (arrOfRandomUsers.length < numOfUsers) {
    arrOfRandomUsers.push(Object.values(userObjs[0])[Math.floor(Math.random() * Object.values(userObjs[0]).length)])
  }
  return arrOfRandomUsers;
}

const mapStateToProps = (state) => {

  return {
    currentUser: _checkCurrentUser(state.session.currentUser),
    listOfBlogposts: _getBlogposts(state.blogposts, state.session.currentUser),
    listOfUsers: _getUsers(state.users, state.session.currentUser) || [],
    listOfRandomUsers: _getRandomUsers(Object.values(state.users))

  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    clearErrors: () => dispatch(clearErrors()),
    fetchUsers: (userIds) => dispatch(fetchUsers(userIds)),
    fetchBlogposts: (blogpostIds) => dispatch(fetchBlogposts(blogpostIds)),
    fetchRandomUsers: (userIds) => dispatch(fetchUsers(userIds))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
