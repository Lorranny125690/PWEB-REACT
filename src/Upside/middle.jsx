import React, { useState } from 'react';
import '../Estlizacao/styles1.css';

export function Mid() {
  const images = [
    "https://cdn.pixabay.com/photo/2023/08/23/15/44/ai-generated-8208847_1280.png",
    "https://media.istockphoto.com/id/1322104312/pt/foto/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=612x612&w=0&k=20&c=e5oxSsSFlsD8bdgXTCKNW4X0POTo1hs7nqAaNOeLgoo=",
    "https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg",
  ];
  

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='background'>
    <div id="characters-section">
      <div className="image-container">
        {images.map((imageSrc, index) => (
          <img
            key={index}
            className={`image char ${index === currentImage ? 'active' : 'hidden'}`}
            src={imageSrc}
            alt={`Slide ${index + 1}`}
            style={{ display: index === currentImage ? 'block' : 'none' }}
          />
        ))}
        <button id="prev-button" className="nav-button" onClick={handlePrev}>
        </button>
        <button id="next-button" className="nav-button" onClick={handleNext}>
        </button>
      </div>
    </div>
    </div>
  );
}