import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CLEARED_ERRORS = 'RECEIVE_CLEARED_ERRORS';

export const signup = (user) => (dispatch) => SessionApiUtil.signup(user)
  .then(
    (user) => {
      console.log(user);
      dispatch(receiveCurrentUser(user);
    }),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  );

export const login = (user) => (dispatch) => SessionApiUtil.login(user)
  .then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  );

export const logout = () => (dispatch) => SessionApiUtil.logout()
  .then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  );

export const clearErrors = () => (dispatch) => (
  dispatch(receiveClearedErrors())
);

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const receiveClearedErrors = () => ({
  type: RECEIVE_CLEARED_ERRORS
});
