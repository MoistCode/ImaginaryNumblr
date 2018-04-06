import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = (userId) => (dispatch) => UserUtil.fetchUser(userId)
  .then(
    (user) => dispatch(receiveUser(user))
  );

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});
