import * as SessionApiUtil from '../util/session_api_util';

export const signup = (user) => (dispatch) => SessionApiUtil.signup(user)
  .then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors))
  );

export const signup = (user) => (dispatch) => SessionApiUtil.signup(user)
  .then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors))
  );

export const signup = (user) => (dispatch) => SessionApiUtil.signup(user)
  .then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors))
  );
