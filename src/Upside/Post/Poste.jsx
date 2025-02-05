import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Poste.css';

export const Post = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    content: ""
  });

  const [posts, setPosts] = useState([
    { id: 1, title: "Bem-vindo ao Mundo Geek!", content: "Aqui falamos sobre filmes, séries e games que amamos!" },
    { id: 2, title: "O que esperar da nova geração de consoles?", content: "Os consoles estão cada vez mais poderosos e cheios de recursos inovadores!" },
    { id: 3, title: "Melhores animes de 2025", content: "Confira nossa lista com os animes que estão bombando este ano!" },
    { id: 4, title: "O impacto dos e-sports no cenário mundial", content: "Os torneios de e-sports já movimentam bilhões e atraem milhões de espectadores!" },
  ]);

  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (!isLoggedIn) {
      const choice = window.confirm("Você não tem cadastro! Deseja fazer login ou se cadastrar?");
      
      if (choice) {
        navigate("/login");
      } 
      return;
    }
    
    setShowForm(true);
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) {
      alert("Título e conteúdo são obrigatórios!");
      return;
    }

    setPosts([...posts, { id: posts.length + 1, title: newPost.title, content: newPost.content }]);
    setNewPost({ title: "", image: "", content: "" });
    setShowForm(false);
  };

  return (
    <div className="posts-container">
      <div className="write-button">
        <button onClick={handleWriteClick} className="button">Escrever</button>
        <span>Algo para compartilhar? Espalhe agora! ✍️</span>
      </div>

      {showForm && (
        <div className="post-form-container">
          <h2>Nova Postagem</h2>
          <form onSubmit={handleSubmit} className="post-form">
            <input
              type="text"
              placeholder="Título"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="post-input"
              required
            />
            <textarea
              placeholder="Escreva seu post..."
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="post-textarea"
              required
            ></textarea>
            <button type="submit" className="post-submit-button">Publicar</button>
          </form>
        </div>
      )}

      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
