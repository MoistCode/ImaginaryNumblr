import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  users: usersReducer
});

export default rootReducer;
