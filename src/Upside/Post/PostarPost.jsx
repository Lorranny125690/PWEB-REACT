import { useState } from "react";
import "./PosterPost.css";

export default function CreatePost({ onPostSubmit }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("O título e o conteúdo são obrigatórios!");
      return;
    }
    onPostSubmit({ title, image, content });
    setTitle("");
    setImage("");
    setContent("");
  };

  return (
    <div className="post-form-container">
      <h2 className="post-form-title">Criar Novo Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="post-input"
          required
        />

        <input
          type="text"
          placeholder="URL da imagem (opcional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="post-input"
        />

        <textarea
          placeholder="Escreva seu post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="post-textarea"
          required
        ></textarea>

        <button type="submit" className="post-submit-button">Publicar</button>
      </form>
    </div>
  );
}
