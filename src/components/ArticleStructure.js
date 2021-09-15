import React from "react";

const ArticleStructure = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <div className="skeleton image" />

        <div d-flex align-items-center>
          <div className="skeleton avatar"></div>
          <div className="skeleton text"></div>
        </div>

        <div className="skeleton title"></div>

        <div className="skeleton smalltext"></div>
      </div>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default ArticleStructure;