import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
  useHistory
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


function App(props) {
  const [userData, setUserData ] = useState(null)
  const [isCreatePost, setIsCreatePost] = useState(false)
  const history = useHistory()

  useEffect(()=>{
    const userDataRaw = localStorage.getItem("userData") 
    const userData = userDataRaw ? JSON.parse(userDataRaw) : null 
    setUserData(userData)
},[])

  function changeUserData(myUserData){
    setUserData(myUserData)
  }

  function changeIsCreatePost(path){
    setIsCreatePost(path)
  }

  return (
    <Router>
      { !isCreatePost &&
        <Navigation
          userData = { userData }
        />
    }
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/createPost"> 
              <CreatePost
                changeIsCreatePost = { changeIsCreatePost }
              />
          </Route>
          <Route path="/login"> 
             <Login
              changeUserData = {changeUserData}
              changeIsCreatePost = { changeIsCreatePost }
             /> 
          </Route>
          <Route path="/postDetail/:id">
            <PostDetail
              changeIsCreatePost = { changeIsCreatePost }
              /> 
          </Route>
          <Route path="/search">
            <Search
              changeIsCreatePost = { changeIsCreatePost }
            />
          </Route>
          <Route path="/"> 
            <Home
              changeIsCreatePost = { changeIsCreatePost }
            />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
