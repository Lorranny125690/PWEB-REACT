import Icon from './Icon.png';

export function Searcher() {
  const filter = [
    'comunidade',
    'filmes',
    'séries',
  ]
  return (
    <div className="container">
      <div className="logo-container">
        <img src={Icon} alt="Luluzinha Logo" className="logo" />
        <h1 className="title">LULUZINHA</h1>
      </div>
      <div className="search-container">
        <label htmlFor="search-input" className="search-label">
          <i className="search-icon"></i> Pesquisar
        </label>
        <ul>
          {filter.map(filter => 
            <li key={filter}>{filter}</li>
          )}
        </ul>
      </div>
      <div className="notification-container">
        <i className="notification-icon"></i>
      </div>
    </div>
  );
}
