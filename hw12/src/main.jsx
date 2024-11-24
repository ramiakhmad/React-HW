
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/">Главная</Link> | <Link to="/articles">Статьи</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);