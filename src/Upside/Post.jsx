import React from "react";
import "../Estlizacao/styles.css";

export function Header() {
  const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle =  body.querySelector(".toggle")

  return (
    <header className="header">
      <div className="nav-left">
        <a href="#home">Home</a>
        <a href="#about">Destaques</a>
        <a href="#services">Categorias</a>
        <a href="#contact">Comunidades</a>
        <a href="#news">Notícias</a>
        <a href="#help">Ajuda</a>
      </div>

      <label className="hamburguer-menu">
        <input type="checkbox" />
        <div></div>
        <div></div>
        <div></div>
      </label>

      <nav className="sidebar">
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">Destaques</a>
          <a href="#services">Categorias</a>
          <a href="#contact">Comunidades</a>
          <a href="#news">Notícias</a>
          <a href="#help">Ajuda</a>
        </div>
      </nav>

      <div className="nav-right">
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>
      </div>
    </header>
  );
}
