import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../page/Home';

const Index = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Index;
