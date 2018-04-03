import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import LoginFormContainer from './forms/session/login_form_container';
import SignupFormContainer from './forms/session/signup_form_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';

const App = () => (
  <div>
    <Route path='/' component={ NavigationBarContainer } />
    <AuthRoute path='/login' component={ LoginFormContainer } />
    <AuthRoute path='/signup' component={ SignupFormContainer } />
  </div>
);

export default App;
