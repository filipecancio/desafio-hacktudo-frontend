import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Categories } from '../../pages/Categories';

export const BottomBarRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={Categories} />
    </Switch>
  </BrowserRouter>
);
