import React from "react";
import { useParams } from "react-router-dom";

const articles = [
  { id: 1, title: "Первая статья", content: "Содержание первой статьи..." },
  { id: 2, title: "Вторая статья", content: "Содержание второй статьи..." },
  { id: 3, title: "Третья статья", content: "Содержание третьей статьи..." },
];

const Article = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <h1>Статья не найдена</h1>;
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
