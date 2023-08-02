import React, { useState } from 'react';

const NewsGridView = ({ articles }) => {
  const [gridView, setGridView] = useState(false);

  const toggleGridView = () => {
    setGridView(!gridView);
  };

  return (
    <div>
      <button onClick={toggleGridView}>Toggle Grid View</button>
      {gridView ? (
        <div className="grid-view">
          {articles.map((article) => (
            <div key={article.title}>
              <img src={article.urlToImage} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-view">
          {articles.map((article) => (
            <li key={article.title}>
              <img src={article.urlToImage} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsGridView;
