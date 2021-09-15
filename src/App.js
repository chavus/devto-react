import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import Navigation from "./components/Navigator"
import Home from "./pages/home"


function App() {
  return (
    <Router>
          <Navigation/>

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
            <Home/>
          </Route>
        </Switch>
  

    </Router>
  );
}

export default App;
