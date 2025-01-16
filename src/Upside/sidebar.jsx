import React, { useState } from 'react';
import '../Estlizacao/styles.css'; // Certifique-se de ter o CSS atualizado

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão de Toggle */}
      <div className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <header className={`header ${isOpen ? 'open' : ''}`}>
        <div className="title">My Sidebar</div>
        <div className="nav-left">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </div>
        <div className="nav-right">
          <a href="#login">Login</a>
          <a href="#signup">Signup</a>
        </div>
      </header>
    </>
  );
};
