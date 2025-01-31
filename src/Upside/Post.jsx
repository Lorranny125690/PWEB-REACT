import React from "react";
import { Link } from "react-router-dom";
import "../Estlizacao/styles.css";

export function Header() {
  return (
    <header className="header">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/destaque">Destaques</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="/comunidades">Comunidades</Link>
        <Link to="/noticias">Notícias</Link>
        <Link to="/ajuda">Ajuda</Link>
      </div>

      <label className="hamburguer-menu">
        <input type="checkbox" />
        <div></div>
        <div></div>
        <div></div>
      </label>

      <nav className="sidebar">
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/destaque">Destaques</Link>
          <Link to="/categorias">Categorias</Link>
          <Link to="/comunidades">Comunidades</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/ajuda">Ajuda</Link>
        </div>
      </nav>

      <div className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
}
