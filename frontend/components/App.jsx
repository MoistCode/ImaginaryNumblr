import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

import FrontPage from './front_page/front_page';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';

const App = () => (
  <div>
    <NavigationBarContainer />
    <Route path='/' component={ FrontPage } />
    <AuthRoute path='/login' component={ FrontPage } />
    <AuthRoute path='/signup' component={ FrontPage } />
  </div>
);

export default App;
