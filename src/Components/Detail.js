import React from 'react';

const NewsDetail = ({ article, onFavoriteToggle }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </a>
      <button onClick={() => onFavoriteToggle(article)}>Favorite</button>
    </div>
  );
};

export default NewsDetail;
