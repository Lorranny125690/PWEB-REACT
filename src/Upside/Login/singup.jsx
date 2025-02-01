import React, { useState } from "react";
import "./Login.css";

export const SingUp = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== confirmarEmail || senha !== confirmarSenha) {
      window.alert("Os campos precisam ser os mesmos!");
    } else {
      window.alert("Cadastro realizado com sucesso!");
    }
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

          <label>Confirmar Email</label>
          <input
            type="email"
            placeholder="Confirmar Email"
            value={confirmarEmail}
            onChange={(e) => setConfirmarEmail(e.target.value)}
          />
          <label>Confirmar Senha</label>
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <button type="submit">Confirmar</button>
        </form>
      </div>
    </div>
  );
};
