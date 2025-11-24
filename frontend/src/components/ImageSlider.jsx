import React, { useState, useEffect } from "react";

import image1 from "../assets/slider-images/image1.jpg";
import image2 from "../assets/slider-images/image2.jpg";
import image3 from "../assets/slider-images/image3.jpg";
import image4 from "../assets/slider-images/image4.png";
import image5 from "../assets/slider-images/image5.jpg";

const ImageSlider = () => {
  const images = [image1, image2, image3, image4, image5];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(timer);
  });

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Only changed this div to flex with transition */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full shrink-0 h-[661px]items-center">
            <img
              src={img}
              className="max-h-[661px] w-auto object-contain"
              alt={`slide-${i}`}
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="btn btn-outline btn-circle absolute left-5 top-1/2 -translate-y-1/2 border "
        onClick={prev}
      >
        ❮
      </button>

      <button
        className="btn btn-outline btn-circle absolute right-5 top-1/2 -translate-y-1/2 border"
        onClick={next}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
