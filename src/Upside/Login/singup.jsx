import React, { useState } from "react";
import "./Login.css";
import { useEffect } from "react";
import api from "../services/api"

export const SingUp = () => {
  let user = []

  async function getUser(){
    user = await api.post('/usuarios')
    console.log(user)
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get("/usuarios"); // Corrigido para GET
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários", error);
      }
    }
    fetchUsers();
  }, []);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setnome] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof nome, 'chegou aqui')
    if (senha !== confirmarSenha) {
      window.alert("Os campos precisam ser os mesmos!");
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
            type="text"
            placeholder="Confirmar Email"
            value={nome}
            onChange={(e) => setnome(e.target.value)}
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
