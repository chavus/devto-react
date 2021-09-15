import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';

//Components imports
import Navigation from "./components/Navigator"

// Pages imports
import Home from "./pages/Home"
import CreatePost from './pages/CreatePost'
import Login from './pages/Login';
import PostDetail from './pages/PostDetail';
import Search from './pages/Search';


function App() {
  return (
    <Router>
        <Navigation/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
<<<<<<< HEAD
          <Route path="/about">
            <h1>About</h1>
            </Route>
          <Route path="/users">
            <h1>users</h1>
            </Route>
          <Route path="/">
=======
          <Route path="/createPost"> 
            <CreatePost/>
          </Route>
          <Route path="/login"> 
             <Login/> 
          </Route>
          <Route path="/postDetail/:id">
            <PostDetail/> 
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/"> 
>>>>>>> a45711477be1593b1689495745344b52e0633983
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
