import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import PageA from '../components/PageA';
import PageB from '../components/PageB';

const Router = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/a" exact>
          <PageA></PageA>
        </Route>
        <Route path="/b" exact>
          <PageB></PageB>
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
