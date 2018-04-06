import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import FrontPage from './front_page/front_page';
import DashboardContainer from './dashboard/dashboard_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import UserShowPageContainer from './user_showpage/user_showpage_container';

const App = () => (
  <div>
    <NavigationBarContainer />

    <Switch>
      <Route exact path='/users/:userId' component={ UserShowPageContainer } />
      <ProtectedRoute path='/dashboard' component={ DashboardContainer } />
      <AuthRoute path='/login' component={ FrontPage } />
      <AuthRoute path='/signup' component={ FrontPage } />
      <AuthRoute path='/' component={ FrontPage } />
    </Switch>

  </div>
);

export default App;
