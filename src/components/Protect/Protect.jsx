import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import withProtect from '../../hoc/withProtect';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Dashboard from '../Dasboard/Dashboard.jsx';
import Users from '../Users/Users.jsx';

const Protect = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="flex items-start justify-between container mx-auto">
      <Sidebar />
      <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${url}/dashboard`} />
          </Route>
          <Route exact path={`${path}/dashboard`}>
            <Dashboard />
          </Route>
          <Route exact path={`${path}/users`}>
            <Users />
          </Route>
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withProtect(Protect);
