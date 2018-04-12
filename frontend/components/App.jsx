import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import FrontPage from './front_page/front_page';
import DashboardContainer from './dashboard/dashboard_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import UserShowPageContainer from './user_showpage/user_showpage_container';
import PageDoesNotExist from './page_does_not_exist';
import UserLikesShowPageContainer from './like/like_showpage_container';

const App = () => (
  <div>
    <NavigationBarContainer />

    <Switch>
      <Route exact path='/404meansthispagedoesnotexist' component={ PageDoesNotExist } />
      <Route exact path='/users/:userId' component={ UserShowPageContainer } />
      <Route exact path='/likes' component={ UserLikesShowPageContainer } />
      <ProtectedRoute exact path='/dashboard' component={ DashboardContainer } />
      <AuthRoute path='/login' component={ FrontPage } />
      <AuthRoute path='/signup' component={ FrontPage } />
      <AuthRoute path='/' component={ FrontPage } />
    </Switch>

  </div>
);

export default App;
