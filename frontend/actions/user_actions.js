import * as UserUtil from '../util/user_util';
import * as FollowUtil from '../util/follow_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = (userId) => (dispatch) => UserUtil.fetchUser(userId)
  .then(
    (user) => dispatch(receiveUser(user))
  );

export const postFollow = (followeeId) => (dispatch) => FollowUtil.postFollow(followeeId)
  .then(
    (user) => dispatch(receiveUser(user))
  )

export const destroyFollow = (followeeId) => (dispatch) => FollowUtil.destroyFollow(followeeId)
  .then(
    (user) => dispatch(receiveUser(user))
  )


const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});
