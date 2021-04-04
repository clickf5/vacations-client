import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Protect from './components/Protect/Protect.jsx';
import SignInContainer from './components/Signin/SignInContainer.jsx';
import SignUpContainer from './components/Signup/SignUpContainer.jsx';
import NotFound from './components/NotFound.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/protect" />
      </Route>
      <Route path="/protect">
        <Protect />
      </Route>
      <Route path="/sign-in">
        <SignInContainer />
      </Route>
      <Route path="/sign-up">
        <SignUpContainer />
      </Route>
      <Route path="/not-found">
        <NotFound />
      </Route>
      <Route path="*">
        <Redirect to="/not-found" />
      </Route>
    </Switch>
  </Router>
);

export default App;
