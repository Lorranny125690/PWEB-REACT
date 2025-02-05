import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate(); 

  const validarEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexEmail.test(email);
  };

  const validarSenha = (senha) => {
    return senha.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarEmail(email)) {
      window.alert("Por favor, insira um email válido!");
      return;
    }

    if (!validarSenha(senha)) {
      window.alert("A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    console.log("Login realizado com sucesso!");
  };

  return (
    <div className="container-login">
      <div className="left-section">
        <div className="icon-background">
          <img
            src="https://cdn-icons-png.flaticon.com/512/115/115757.png"
            alt="Email Icon"
            className="icon"
          />
        </div>
      </div>
      <div className="right-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Confirmar</button>
          <a href="#">Esqueceu a senha?</a>
          <a href="/signup" onClick={(e) => { e.preventDefault(); navigate("/signup"); }}>Inscrever-se</a>
        </form>
      </div>
    </div>
  );
};
