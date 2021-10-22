import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Categorias } from '../../pages/Categorias';

export const BottomBarRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/categorias" component={Categorias} />
    </Switch>
  </BrowserRouter>
);
