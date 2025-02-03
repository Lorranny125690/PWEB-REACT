import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Poste.css';

export const Post = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    content: ""
  });

  const navigate = useNavigate(); 

  const handleWriteClick = () => {
    if (!isLoggedIn) {
      const choice = window.confirm("Você não tem cadastro! Deseja fazer login ou se cadastrar?");
      if (choice) {
          navigate("/login");
        } else {
          navigate("/signup");
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
    </div>
  );
};
