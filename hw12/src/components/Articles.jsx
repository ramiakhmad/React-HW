// src/components/Articles.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Articles.module.css';

const articles = [
  { id: 1, title: 'Первая статья', content: 'Содержание первой статьи...' },
  { id: 2, title: 'Вторая статья', content: 'Содержание второй статьи...' },
  { id: 3, title: 'Третья статья', content: 'Содержание третьей статьи...' },
];

const Articles = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Перенаправляем на главную страницу
  };

  return (
    <div className={styles.articles}>
      <h1>Список статей</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Перейти на главную страницу</button>
    </div>
  );
};

export default Articles;