import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../../pages/Home';

export const BottomBarRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
