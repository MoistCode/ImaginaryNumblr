import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './forms/session/login_form_container';
import SignupFormContainer from './forms/session/signup_form_container';

const App = () => (
  <div>
    <h1>I'm working</h1>
    <Route path='/login' component={ LoginFormContainer } />
    <Route path='/signup' component={ SignupFormContainer } />
  </div>
);

export default App;
