import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../css/caraousel.css';

function Caraousel() {
  const images = [
     { src:"/photos/gallery/caraousel/team25-26.jpeg", alt: "IEEE SJCE team 25-26" },
    { src: "/photos/gallery/caraousel/IMG_5944.JPG", alt: "IEEE SJCE team event" },
    { src: "/photos/gallery/caraousel/IMG_0350.JPG", alt: "IEEE SJCE activity" },
    { src: "/photos/gallery/caraousel/IMG_3552.JPG", alt: "IEEE SJCE members" },
    { src: "/photos/gallery/caraousel/IMG_3103.JPG", alt: "IEEE SJCE workshop" },
    { src: "/photos/gallery/caraousel/IMG_6602.JPG", alt: "IEEE SJCE conference" }
  ];

  return (
    <div className="carousel-container"> 
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={true}
        selectedItem={0}
        transitionTime={700}
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image.src}
              alt={image.alt}
              onError={(e) => {
                e.target.onerror = null;
                // Try lowercase extension as fallback
                e.target.src = image.src.replace('.JPG', '.jpg');
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Caraousel;