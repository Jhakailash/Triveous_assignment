import React, { useEffect, useState } from 'react';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    
    const API_KEY = 'YOUR_NEWS_API_KEY';
    const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    fetch(NEWS_API_URL)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      <ul>
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
    </div>
  );
};

export default NewsList;
