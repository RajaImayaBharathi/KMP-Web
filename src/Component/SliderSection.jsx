/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const images = [
    "/images/Minimalistic Creative Agency Business Banner(4).png",
    "/images/Minimalistic Creative Agency Business Banner(2).png",
    "/images/Minimalistic.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fade out when changing image
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true); // Start fade in after the image is changed
      }, 500); // Timeout duration should match the fade-out duration
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-20 relative">
      <img
        src={images[currentIndex]}
        alt="Slider Image"
        className={`rounded-md w-full transition-opacity duration-500 ease-in-out ${fadeIn ? "opacity-100" : "opacity-0"}`}
      />
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-28 h-[3px] mx-2 rounded-full ${
              index === currentIndex ? "bg-blue-900" : "bg-gray-300 opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
