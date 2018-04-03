import React from 'react';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './forms/session/login_form_container';
import SignupFormContainer from './forms/session/signup_form_container';

const App = () => (
  <div>
    <h1>I'm working</h1>
    <AuthRoute path='/login' component={ LoginFormContainer } />
    <AuthRoute path='/signup' component={ SignupFormContainer } />
  </div>
);

export default App;
