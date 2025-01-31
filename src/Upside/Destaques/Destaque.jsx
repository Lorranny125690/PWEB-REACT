import React from "react";
import "./Estilizacao/Destaques.css";

export function Destaques() {
  const noticias = [
    {
      id: 1,
      titulo: "Novo Jogo Revoluciona o Mercado",
      descricao: "O game mais esperado do ano finalmente foi lançado e já bateu recordes de vendas!",
      imagem: "https://source.unsplash.com/400x250/?game",
    },
    {
      id: 2,
      titulo: "Filme Baseado em Anime é Sucesso",
      descricao: "A nova adaptação live-action de um anime clássico conquista fãs e críticos.",
      imagem: "https://source.unsplash.com/400x250/?movie",
    },
    {
      id: 3,
      titulo: "Campeonato de E-sports Milionário",
      descricao: "O torneio deste ano tem o maior prêmio da história dos e-sports.",
      imagem: "https://source.unsplash.com/400x250/?esports",
    },
  ];

  const personagens = [
    {
      id: 1,
      nome: "Kazuto Kirigaya (Kirito)",
      descricao: "Protagonista de Sword Art Online, um jogador habilidoso e destemido.",
      imagem: "https://source.unsplash.com/200x200/?anime",
    },
    {
      id: 2,
      nome: "Lara Croft",
      descricao: "Ícone dos games, protagonista da franquia Tomb Raider.",
      imagem: "https://source.unsplash.com/200x200/?lara-croft",
    },
    {
      id: 3,
      nome: "Geralt de Rivia",
      descricao: "O caçador de monstros de The Witcher, conhecido por sua força e sabedoria.",
      imagem: "https://source.unsplash.com/200x200/?the-witcher",
    },
  ];

  return (
    <div className="container3">
      <header className="header">
        <h1>Destaques</h1>
      </header>

      <section className="noticias">
        <h2>Últimas Notícias</h2>
        <div className="noticias-grid">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="noticia-card">
              <img src={noticia.imagem} alt={noticia.titulo} />
              <h3>{noticia.titulo}</h3>
              <p>{noticia.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="personagens">
        <h2>Personagens Famosos</h2>
        <div className="personagens-grid">
          {personagens.map((personagem) => (
            <div key={personagem.id} className="personagem-card">
              <img src={personagem.imagem} alt={personagem.nome} />
              <h3>{personagem.nome}</h3>
              <p>{personagem.descricao}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
