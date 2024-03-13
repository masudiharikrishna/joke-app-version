// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/homepage" component={Homepage} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
