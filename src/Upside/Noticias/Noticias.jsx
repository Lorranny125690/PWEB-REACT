import React from "react";
import "./Noticias.css"

export function Noticias() {
  const articles = [
    {
      id: 1,
      title: "Novo Patch Revoluciona o Meta!",
      description: "Descubra como as novas mudanças estão alterando o jogo e redefinindo estratégias.",
      image: "https://via.placeholder.com/300x180",
    },
    {
      id: 2,
      title: "Segredo Descoberto em RPG Famoso!",
      description: "Jogadores encontraram um segredo oculto que muda toda a narrativa do jogo.",
      image: "https://via.placeholder.com/300x180",
    },
    {
      id: 3,
      title: "Esports em Chamas!",
      description: "Os torneios deste ano estão mais emocionantes do que nunca, veja os destaques!",
      image: "https://via.placeholder.com/300x180",
    },

  ];

  return (
    <div className="news-container">
      <h1 className="title1">
        <span role="img" aria-label="news">📰</span> Fandom News{" "}
        <span role="img" aria-label="fire">🔥</span>
      </h1>
      <div className="articles">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <img className="article-image" src={article.image} alt={article.title} />
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <button className="read-more">Leia Mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
