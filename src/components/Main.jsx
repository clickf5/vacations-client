import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Loader from './Loader.jsx';
import useRequireAuth from '../hooks/useRequireAuth.js';
import NotFound from './NotFound.jsx';

const Main = () => {
  const { path } = useRouteMatch();
  const auth = useRequireAuth();

  if (!auth.user) {
    return <Loader />;
  }

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <div>Main</div>
        </Route>
        <Route exact path={`${path}/dashboard`}>
          <div>Dashboard</div>
        </Route>
        <Route exact path={`${path}/somecomponent`}>
          <div>Some component</div>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
