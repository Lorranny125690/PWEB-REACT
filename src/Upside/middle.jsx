import React, { useState } from 'react';
import '../Estlizacao/styles1.css';

export function Mid() {
  const images = [
    "https://pa1.aminoapps.com/6714/44b86a6b50808f8d08d063b801237a2c2c59742c_hq.gif",
    "https://pa1.aminoapps.com/6714/942b1f21e6b4aeac616fc3dc269316df0bdcaa1d_hq.gif",
    "https://i.pinimg.com/originals/3c/80/36/3c80363c0c2aea38673b3f0cfefa9180.gif",
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