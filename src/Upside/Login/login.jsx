import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="container-login">
      <div className="left-section">
        <div className="icon-background">
          <img src="https://cdn-icons-png.flaticon.com/512/115/115757.png" alt="Email Icon" className="icon" />
        </div>
      </div>
      <div className="right-section">
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Senha</label>
          <input type="password" placeholder="Senha" />
          <button type="submit">Confirmar</button>
          <a href="#">Esqueceu a senha?</a>
        </form>
      </div>
    </div>
  );
};