import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './components/Dasboard/Dashboard.jsx';
import Users from './components/Users/Users.jsx';
import SignInContainer from './components/Signin/SignInContainer.jsx';
import SignUpContainer from './components/Signup/SignUpContainer.jsx';
import NotFound from './components/NotFound.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/signin">
        <SignInContainer />
      </Route>
      <Route path="/signup">
        <SignUpContainer />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
