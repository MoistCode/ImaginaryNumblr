import * as UserUtil from '../util/user_util';
import * as FollowUtil from '../util/follow_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const fetchUser = (userId) => (dispatch) => UserUtil.fetchUser(userId)
  .then(
    (user) => dispatch(receiveUser(user))
  );

export const fetchUsers = (userIds) => (dispatch) => UserUtil.fetchUsers(userIds)
  .then(
    (users) => dispatch(receiveUsers(users))
  );

export const postFollow = (followeeId) => (dispatch) => FollowUtil.postFollow(followeeId)
  .then(
    (user) => dispatch(receiveUser(user))
  )

export const destroyFollow = (followeeId) => (dispatch) => FollowUtil.destroyFollow(followeeId)
  .then(
    (user) => dispatch(receiveUser(user))
  )

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});


const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});
