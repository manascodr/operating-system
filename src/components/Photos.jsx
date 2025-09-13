import { useState } from "react";
import "./photos/Photos.css"; // ✅ import SCSS

const Photos = () => {
  const images = [
    "https://images6.alphacoders.com/139/thumb-440-1399966.webp",
    "https://images7.alphacoders.com/139/thumb-440-1399916.webp",
    "https://images8.alphacoders.com/140/thumb-440-1400268.webp",
    "https://images6.alphacoders.com/139/thumb-440-1399823.webp",
    "https://images3.alphacoders.com/139/thumb-440-1399837.webp",
    "https://images6.alphacoders.com/140/thumb-440-1400097.webp",
    "https://images.alphacoders.com/140/thumb-440-1400528.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="photos-app">
      <div className="viewer">
        <img src={images[currentIndex]} alt="Photo" className="main-photo" />
      </div>

      <div className="controls">
        <button onClick={prevImage}>⬅ Prev</button>
        <button onClick={nextImage}>Next ➡</button>
      </div>

      <div className="thumbnails">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i}`}
            className={i === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
