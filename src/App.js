import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import Navigation from "./components/Navigation"
import Home from "./pages/home"


function App() {
  return (
    <Router>
      <div>
        <div>
          <Navigation/>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>users</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
