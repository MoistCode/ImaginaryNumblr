import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import FrontPage from './front_page/front_page';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
  <div>
    <NavigationBarContainer />
    <Route exact path='/' component={ FrontPage } />
    <AuthRoute exact path='/login' component={ FrontPage } />
    <AuthRoute exact path='/signup' component={ FrontPage } />
    <Route exact path='/dashboard' component={ DashboardContainer } />

    // Route to users/:userId
    // Route to blogs/:blogId

  </div>
);

export default App;
