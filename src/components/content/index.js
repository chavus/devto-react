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

/*	useEffect(async () => {
        const result = await api.getAllPosts()
        console.log(result)
        setPosts(result)
    }, []) */

  return (
    <section className="col-12 col-md-8 col-xl-6 cards-section">
     
          <nav className= 'cards-navigation'> 
              <div>
                  <h1 className='subtitle'>Posts</h1>
              </div>
              <div>
                  <Link to="/#">Feed</Link>
                  <Link to="/#">Week</Link>
                  <Link to="/#">Month</Link>
                  <Link to="/#">Infinity</Link>
                  <Link to="/#">Latest</Link>
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
        {/* {articles &&
          articles.map((article, id) => {
            return <ArticleComponent key={id} data={article} />;
          })} */}
          <Cards/>
        {/* {!articles && [1, 2, 3, 4, 5].map((a) => <ArticleStructure key={a} />)} */}
      </div>
    </section>
  );
};

export default Content;