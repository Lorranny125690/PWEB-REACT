import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Estilizacao/sidebar.css";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    { id: 1, title: "Bem-vindo ao Mundo Geek!", description: "Aqui falamos sobre filmes, séries e games!" },
    { id: 2, title: "Nova geração de consoles", description: "Os consoles estão cheios de recursos inovadores!" },
    { id: 3, title: "Melhores animes de 2025", description: "Confira nossa lista com os animes que estão bombando." },
  ]);

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">
          <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png" alt="Logo" />
          <h1>Reddit Clone</h1>
        </div>
        <nav className="menu">
          <a href="/" className="menu-item">
            <Home size={20} /> Home
          </a>
          <a href="/popular" className="menu-item">
            <Compass size={20} /> Popular
          </a>
          <a href="/explore" className="menu-item">
            <Grid size={20} /> Explore
          </a>
          <a href="/community" className="menu-item">
            <Users size={20} /> Communities
          </a>
        </nav>
        <div className="custom-feed">
          <h3 className="section-title">Custom Feeds</h3>
          <a href="/create-feed" className="menu-item">+ Create a custom feed</a>
        </div>
        <div className="communities">
          <h3 className="section-title">Communities</h3>
          <a href="/r/programming" className="menu-item">r/programming</a>
          <a href="/r/javascript" className="menu-item">r/javascript</a>
        </div>
      </aside>

      <main className="posts-container">
        <div className="write-button">
          <button className="button" onClick={() => navigate("/new-post")}>Nova Postagem</button>
          <span>Compartilhe algo interessante! ✍️</span>
        </div>
        <div className="post-list">
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
