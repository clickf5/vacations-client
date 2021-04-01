import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './components/Main.jsx';
import SignInContainer from './components/Signin/SignInContainer.jsx';
import SignUpContainer from './components/Signup/SignUpContainer.jsx';
import NotFound from './components/NotFound.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/app" />
      </Route>
      <Route path="/app">
        <Main />
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
