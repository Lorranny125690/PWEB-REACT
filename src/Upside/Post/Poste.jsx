import React from 'react';
import './Poste.css';

export const Post = () => {
  const articles = [
    {
      id: 1,
      title: "Introdução ao React",
      author: "João Silva",
      date: "10 de Outubro de 2023",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      content: "React é uma biblioteca JavaScript para construir interfaces de usuário. Neste artigo, vamos explorar os conceitos básicos do React."
    },
    {
      id: 2,
      title: "Como usar Hooks no React",
      author: "Maria Souza",
      date: "15 de Outubro de 2023",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      content: "Hooks são uma adição poderosa ao React que permitem usar estado e outros recursos sem escrever uma classe."
    },
    {
      id: 3,
      title: "Criando Componentes Reutilizáveis",
      author: "Pedro Oliveira",
      date: "20 de Outubro de 2023",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      content: "Componentes reutilizáveis são a chave para manter seu código React organizado e eficiente."
    },
    {
      id: 3,
      title: "Criando Componentes Reutilizáveis",
      author: "Pedro Oliveira",
      date: "20 de Outubro de 2023",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      content: "Componentes reutilizáveis são a chave para manter seu código React organizado e eficiente."
    },
    {
      id: 3,
      title: "Criando Componentes Reutilizáveis",
      author: "Pedro Oliveira",
      date: "20 de Outubro de 2023",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      content: "Componentes reutilizáveis são a chave para manter seu código React organizado e eficiente."
    }
  ];

  return (
    <div className="posts-container">
      {articles.map((article) => (
        <article key={article.id} className="post">
          <h2>{article.title}</h2>
          <p className="meta">Publicado em {article.date} por <span>{article.author}</span></p>
          <img src={article.image} alt="Imagem da Postagem" className="post-image" />
          <p>{article.content}</p>
          <a href="#" className="read-more">Leia mais...</a>
        </article>
      ))}
    </div>
  );
};