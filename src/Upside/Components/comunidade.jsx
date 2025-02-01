import React from "react";
import './Estilizacao/comunidade.css';

export function GamesPage() {
  const characters = [
    { name: "Ellie", imgSrc: "https://meups.com.br/wp-content/uploads/2016/12/The-Last-of-Us-Part-II-900x503.jpg", wikiLink: "The Last of Us Wiki" },
    { name: "Lara Croft", imgSrc: "https://preview.redd.it/a8xh0sovyvf51.jpg?auto=webp&s=e5a210c7755ab64a859b85d282c7acc5ce561e7d", wikiLink: "Tomb Raider Wiki" },
    { name: "Nathan Drake", imgSrc: "https://assetsio.gnwcdn.com/digitalfoundry-2015-hands-on-with-uncharted-the-nathan-drake-collection-1443340941444.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp", wikiLink: "Uncharted Wiki" },
    { name: "Link", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg/1200px-Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg", wikiLink: "Zelda Wiki" },
    { name: "Pikachu", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VSWIYAR4LL-agG3Xd1HYV-MFzThjMmr9Tw&s", wikiLink: "Pokemon Wiki" },
    { name: "Rathalos", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYc8Lykji7RW0FFT0exxQQvhP1_i66BOc_KF1Nm2TvRWz-1dXoE_ZT-3NY2O19qmUKLSSO6LPdEfRGBNcmp1HW8dHnpLc1UBWNufKQIplC6bs2EA2Y8suJ7k09IaNAS27d09FQfL3DuoQ/s1600/rathalosrathian-gameblast.jpg", wikiLink: "Monster Hunter Wiki" },
  ];

  const articles = [
    {
      title: "Let Your Mom Help You Survive The Zombie Apocalypse",
      imgSrc: "https://webfones.vtexassets.com/arquivos/ids/244916/console-ps5-slim-fisico-1tb-c-returnal-ratchet-clank-sony-2.jpg?v=638725500912000000",
      description: "A mother only has a few days to teach her son...",
      time: "5m",
    },
    {
      title: "PS5's Classic Anniversary Themes Are Leaving",
      imgSrc: "https://webfones.vtexassets.com/arquivos/ids/244916/console-ps5-slim-fisico-1tb-c-returnal-ratchet-clank-sony-2.jpg?v=638725500912000000",
      description: "There aren’t any plans for additional themes.",
      time: "6m",
    },
    {
      title: "Legacy Of Kain, Indiana Jones, And More",
      imgSrc: "https://webfones.vtexassets.com/arquivos/ids/244916/console-ps5-slim-fisico-1tb-c-returnal-ratchet-clank-sony-2.jpg?v=638725500912000000",
      description: "Steam’s top titles for December include...",
      time: "19h",
    },
  ];

  return (
  
    <div className="page-container">
      <div className="section-title">
        Comunidade
      </div>
      <footer className="footer2"></footer>

      <div className="content-news">
      <h2 className="section-subtitle">Personagens populares</h2>
      <div className="character-grid">
        {characters.map((character, index) => (
          <div key={index} className="character-card">
            <img
              src={character.imgSrc}
              alt={character.name}
              className="character-image"
            />
            <p className="character-name">{character.name}</p>
            <p className="wiki-link">{character.wikiLink}</p>
          </div>
        ))}
      </div>
      </div>

      <footer className="footer2"/>
      
      <div className="container-comunidade">
        <h2 className="section-subtitle">Notícias atuais</h2>
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.imgSrc} alt={article.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-description">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
