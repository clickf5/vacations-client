import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './components/Main.jsx';
import SignInContainer from './components/Signin/SignInContainer.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/signin">
        <SignInContainer />
      </Route>
      <Route exact path="/signup">
        <div>Signup!</div>
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
