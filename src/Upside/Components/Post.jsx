import React from "react";
import { Link } from "react-router-dom";
import "./Estilizacao/styles.css";
import api from "../services/api"

import { useEffect } from "react";

export function Header() {
  let user = []

  async function getUser(){
    user = await api.get('/usuarios')
    console.log(user)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <header className="header">
      <div className="nav-left">
        <Link to="/"></Link>
        <Link to="/destaque"></Link>
        <Link to="/categorias"></Link>
        <Link to="/comunidades"></Link>
        <Link to="/noticias"></Link>
        <Link to="/ajuda"></Link>
      </div>

      <nav className="sidebar">
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/destaque">Destaques</Link>
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
