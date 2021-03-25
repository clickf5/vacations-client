import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './components/Main.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/signin">
        <div>Signin!</div>
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
