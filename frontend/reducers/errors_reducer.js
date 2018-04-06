import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import blogpostErrorsReducer from './blogpost_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  blogpost: blogpostErrorsReducer
});

export default errorsReducer;
