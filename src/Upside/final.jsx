import React from "react";
import "../Estlizacao/styles2.css";

const categories = ["Comédia", "Drama", "Suspense", "Terror", "Cult"];

export const Final = () => {
  return (
    <div className="container1">
      <div className="box1">
        <p>Aqui você encontra seus programas e jogos favoritos!</p>
        <p>E aproveite para conhecer novas coisas!</p>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className={`category-item category-${index}`}>
            {category}
          </div>
        ))}
      </div>
      {/* <footer className="footer">
        <h2>Luluzinha™️</h2>
        <p>© 2025 Todos os direitos reservados.</p>
      </footer> */}
    </div>
  );
};
