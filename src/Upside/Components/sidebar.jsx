import React, { useState } from "react";
import "./Estilizacao/sidebar.css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('open');
  }  

  return (
    <>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <button class="menu-button" onclick="toggleMenu()">Menu</button>
      </button>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <h2>Meu Site</h2>
        </div>
        <nav className="menu">
          <a href="#" className="menu-item">🏠 Home</a>
          <a href="#" className="menu-item">📂 Projetos</a>
          <a href="#" className="menu-item">📧 Contato</a>
        </nav>
      </aside>
    </>
  );
};