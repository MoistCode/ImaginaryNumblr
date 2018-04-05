import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import FrontPage from './front_page/front_page';
import DashboardContainer from './dashboard/dashboard_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';

const App = () => (
  <div>
    <NavigationBarContainer />
    <AuthRoute path='/login' component={ FrontPage } />
    <AuthRoute path='/signup' component={ FrontPage } />
    <AuthRoute exact path='/' component={ FrontPage } />
    <ProtectedRoute exact path='/dashboard' component={ DashboardContainer } />
  </div>
);

export default App;
