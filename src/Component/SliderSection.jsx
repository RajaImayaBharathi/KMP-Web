/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const images = [
    "/images/slider1.png",
    "/images/slider2.png",
    "/images/slider3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fade out when changing image
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true); // Start fade in after the image is changed
      }, 300); // Timeout duration should match the fade-out duration
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-20 relative">
      <img
        src={images[currentIndex]}
        className={`rounded-md w-full transition-opacity duration-500 ease-in-out ${fadeIn ? "opacity-100" : "opacity-0"}`}
      />
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-28 h-[2px] mx-2 rounded-full ${
              index === currentIndex ? "bg-blue-600 h-[5px]" : "bg-blue-900 opacity-[30%]"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
