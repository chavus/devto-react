import React, { useEffect, useState } from "react";
import {
  Link,
} from "react-router-dom";
import api from '../../lib/api'
import Cards from '../Cards'
import './styles.scss'

// import ArticleComponent from "./articles/Articles";
// import ArticleStructure from "./articles/ArticleStructure";


const Content = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('')

	useEffect(async () => {
        const result = await api.getAllPosts()
       
        setPosts(result)
       
    }, []) 

  const 
   

  return (
    <section className = "cards-section">
     
          <nav className = 'cards-navigation'> 
              <div>
                  <h1 className='subtitle'>Posts</h1>
              </div>
              <div>
                  <Link to="/#" className='filters'>Feed</Link>
                  <Link to="/#" className='filters'>Week</Link>
                  <Link to="/#" className='filters'>Month</Link>
                  <Link to="/#" className='filters'>Infinity</Link>
                  <Link to="/#" className='filters'>Latest</Link>
              </div>
          </nav>
          { /*<select id="dropdown-select" className="dropdown">
              <option value="Feed" defaultValue>
                Feed
              </option>

              <option value="Week">Week</option>
              <option value="Month">Month</option>
              <option value="Year">Feed</option>
              <option value="Infinity">Infinity</option>
          </select> */}
    
      <div className="articles">

          { posts.map((post, index) => {
            return ( <Cards
              postKey = {post._id}
              postData = {post}
              postIndex = {index}
              />)
          })}

      </div>
    </section>
  );
};

export default Content;