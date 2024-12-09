import Icon from './Icon.png';

export function Searcher() {
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
      </div>
      <div className="notification-container">
        <i className="notification-icon"></i>
      </div>
    </div>
  );
}
