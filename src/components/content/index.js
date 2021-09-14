import React, { useEffect, useState } from "react";
import ArticleComponent from "./articles/Article";
import ArticleStructure from "./articles/ArticleStructure";
import api from '../../lib/api'

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
          <a href="/#">Feed</a>
          <a href="/#">Week</a>
          <a href="/#">Month</a>
          <a href="/#">Infinity</a>
          <a href="/#">Latest</a>
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
        {articles &&
          articles.map((article, id) => {
            return <Article key={id} data={article} />;
          })}

        {!articles && [1, 2, 3, 4, 5].map((a) => <ArticleStructure key={a} />)}
      </div>
    </main>
  );
};

export default Content;