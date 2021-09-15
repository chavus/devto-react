import React, { useEffect, useState } from "react";
import {
  Link,
} from "react-router-dom";
import api from '../../lib/api'
// import ArticleComponent from "./articles/Articles";
// import ArticleStructure from "./articles/ArticleStructure";


const Content = () => {
  const [articles, setArticles] = useState(null);

	useEffect(async () => {
        const result = await api.getAllArticles()
        console.log(result)
        setArticles([...articles, ...result])
    }, [])

  return (
    <main className="main-content">
      <header>
        <h1>Posts</h1>
        <nav>
          <Link to="/#">Feed</Link>
          <Link to="/#">Week</Link>
          <Link to="/#">Month</Link>
          <Link to="/#">Infinity</Link>
          <Link to="/#">Latest</Link>
        </nav>
        <select id="dropdown-select" className="dropdown">
          <option value="Feed" defaultValue>
            Feed
          </option>

          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Year">Feed</option>
          <option value="Infinity">Infinity</option>
        </select>
      </header>
      <div className="articles">
        {/* {articles &&
          articles.map((article, id) => {
            return <ArticleComponent key={id} data={article} />;
          })} */}
          <h1>aqui van los artículos</h1>
        {/* {!articles && [1, 2, 3, 4, 5].map((a) => <ArticleStructure key={a} />)} */}
      </div>
    </main>
  );
};

export default Content;