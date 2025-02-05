import React from "react";
import "./Char.css";

export function Character({ character }) {
  return (
    <div className="character-page">
      <aside className="character-sidebar">
        <div className="sidebar-header">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
        <div className="sidebar-info">
          <p><strong>Type:</strong> {character.type}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Abilities:</strong> {character.abilities.join(", ")}</p>
          <p><strong>Species:</strong> {character.species}</p>
        </div>
      </aside>

      <main className="character-content">
        <h1>{character.name}</h1>
        <p>{character.description}</p>
      </main>
    </div>
  );
}
