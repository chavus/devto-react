import React, { useEffect } from 'react';
import Session from "react-session-api"
import api from "./lib/api"

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

  // When accessing pages
  // When calling api

  let token = {
    expired:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTk0OThmNzMzNTIwMTBlMDYyOTY4YyIsImlhdCI6MTYyOTI0ODExNSwiZXhwIjoxNjI5ODUyOTE1fQ.aTn_N0SS-QdNDWBxrH8KsztEWN5e0Tzx7fEqFeA1vvk",
    valid:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTk0NjUzNzMzNTIwMTBlMDYyOTY3ZSIsImlhdCI6MTYzMTY3NDc5MCwiZXhwIjoxNjMyMjc5NTkwfQ.ZWG2xqDggdGLunQtNmh9bNudZcQNFJT-Vyia6k_9fbg"
  }

  Session.set("token", token.expired)
  Session.set("userInfo", {})

  useEffect(async ()=>{
    const authRes = await api.authenticate({email:"mwortegam@gmail.com",password:"morita"})
    if (authRes.success){
      const token = authRes.data.token
      const userId = JSON.parse(window.atob(token.split(".")[1])).id
      const userRes = await api.getUserById(userId, token)
      console.log(userRes)
      Session.set("userInfo",{...userRes, token})
    } else{ 
      console.log(authRes.message)}                                                                         
  },[])

  return (
    <Router>
        <Navigation/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        { true && 
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
}
    </Router>
  );
}

export default App;
