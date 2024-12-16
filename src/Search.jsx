import React, { useState } from 'react';
import Icon from './Icon.png';

const filter = ['comunidade', 'filmes', 'séries'];

export function Searcher() {
  const [busca, setBusca] = useState('');
  const [focus, setFocus] = useState(false);

  const filterFiltrados = filter.filter((item) =>
    item.toLowerCase().includes(busca.toLowerCase())
  );

  const handleSelectOption = (item) => {
    setBusca(item); // Atualiza o input com o valor selecionado
    setFocus(false); // Fecha os resultados
  };

  return (
    <div className="container">
      {/* Logo e título */}
      <div className="Super-container">
        <div className="logo-container">
          <img src={Icon} alt="Luluzinha Logo" className="logo" />
          <h1 className="title">LULUZINHA</h1>
        </div>
      </div>

      {/* Barra de pesquisa */}
      <div className="search-container">
        <div className="Pesquisar">
          {/* Ícone de pesquisa */}
          <div className="search-icon"></div>
          <input
            id="search-input"
            type="text"
            value={busca}
            placeholder="Pesquisar"
            onChange={(ev) => setBusca(ev.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setTimeout(() => setFocus(false), 200)} // Evita o fechamento imediato
            className="search-input"
          />
        </div>
        {/* Resultados filtrados */}
        {focus && filterFiltrados.length > 0 && (
          <div className="results-container">
            {filterFiltrados.map((item, index) => (
              <div
                key={index}
                className="result-item"
                onMouseDown={() => handleSelectOption(item)} // Atualiza o input
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ícone de notificações */}
      <div className="notification-container">
        <i className="fa fa-bell notification-icon"></i>
      </div>
    </div>
  );
}
