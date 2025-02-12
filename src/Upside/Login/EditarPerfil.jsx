import React, { Component } from "react";
import api from "../services/api";
import "./EditarPerfil.css";

export class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.getUserId(),
      nome: "",
      email: "",
      senha: "",
      loading: false,
      message: ""
    };
  }

  getUserId = () => {
    return localStorage.getItem("usuarioId") || "";
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { id, nome, email, senha } = this.state;

    if (!id) {
      this.setState({ message: "Erro: ID do usuário não encontrado." });
      return;
    }

    this.setState({ loading: true, message: "" });
    try {
      await api.put(`/usuarios/${id}`, { nome, email, senha });
      this.setState({ 
        nome: "", 
        email: "", 
        senha: "", 
        message: "Usuário atualizado com sucesso!" 
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          this.setState({ message: "Erro: Usuário não encontrado." });
        } else {
          this.setState({ message: "Erro ao atualizar usuário." });
        }
      } else {
        this.setState({ message: "Erro de conexão com o servidor." });
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { nome, email, senha, loading, message } = this.state;
    return (
      <div className="container5">
        <h2 className="5">Atualizar Usuário</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={this.handleSubmit} className="form">
          <input
            name="nome"
            value={nome}
            onChange={this.handleChange}
            placeholder="Nome"
            className="input"
          />
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
            type="email"
            className="input"
          />
          <input
            name="senha"
            value={senha}
            onChange={this.handleChange}
            placeholder="Senha"
            type="password"
            className="input"
          />
          <button
            type="submit"
            className="button5"
            disabled={loading}
          >
            {loading ? "Atualizando..." : "Atualizar Usuário"}
          </button>
        </form>
      </div>
    );
  }
}
