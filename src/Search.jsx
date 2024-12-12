import Icon from './Icon.png';
import React, { useState } from 'react';

const filter = [
  'comunidade',
  'filmes',
  'séries',
];

export function Searcher() {
  const [busca, setBusca] = useState('');
  const [focus, setFocus] = useState(false);

  const filterFiltrados = filter.filter((item) =>
    item.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main>
      <div className="container">
        <div className="logo-container">
          <img src={Icon} alt="Luluzinha Logo" className="logo" />
          <h1 className="title">LULUZINHA</h1>
        </div>
        <div className="search-container">
          <div className="Pesquisar">
            <div className="search-icon"></div>
            <input
              id="search-input"
              type="text"
              value={busca}
              placeholder="Pesquisar"
              onChange={(ev) => setBusca(ev.target.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setTimeout(() => setFocus(false), 200)}
              className="search-input"
            />
          </div>
        </div>
        {focus && filterFiltrados.length > 0 && (
          <div className="results-container">
            {filterFiltrados.map((item, index) => (
              <div key={index} className="result-item">
                {item}
              </div>
            ))}
          </div>
        )}

        <div className="notification-container">
          <i className="notification-icon"></i>
        </div>
      </div>
    </main>
  );
}
