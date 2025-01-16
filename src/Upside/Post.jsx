import React, { useState } from "react";
import "../Estlizacao/styles.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className={`nav-left ${isMenuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">Destaques</a>
        <a href="#services">Categorias</a>
        <a href="#contact">Comunidades</a>
        <a href="#news">Notícias</a>
        <a href="#help">Ajuda</a>
      </div>

      <div className="menu-container">
        <button className="hamburguer" onClick={toggleMenu}>
          ☰
        </button>
        <a className="menu" onClick={toggleMenu}>
          Menu
        </a>
      </div>

      <div className={`nav-right ${isMenuOpen ? "open" : ""}`}>
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>
      </div>
    </header>
  );
}
