import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import LoginFormContainer from './forms/session/login_form_container';
import SignupFormContainer from './forms/session/signup_form_container';
import FrontPage from './front_page/front_page';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';

const App = () => (
  <div>
    <NavigationBarContainer />
    <Route exact path='/' component={ FrontPage } />
    <AuthRoute path='/login' component={ LoginFormContainer } />
    <AuthRoute path='/signup' component={ SignupFormContainer } />
  </div>
);

export default App;