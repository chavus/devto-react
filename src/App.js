import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
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
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
