'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "SERVICIO ESPECIAL - RESGUARDO VIP",
      description: "Nuestro personal de resguardos está conformado por profesionales en el campo de la seguridad, altamente capacitados y en constante actualización y entrenamiento.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      buttonText: "INGRESAR"
    },
    {
      id: 2,
      title: "SERVICIO ESPECIAL - RESGUARDO VIP",
      description: "Nuestro personal de resguardos está conformado por profesionales en el campo de la seguridad, altamente capacitados y en constante actualización y entrenamiento.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      buttonText: "INGRESAR"
    },
    {
      id: 3,
      title: "SERVICIO ESPECIAL - RESGUARDO VIP",
      description: "Nuestro personal de resguardos está conformado por profesionales en el campo de la seguridad, altamente capacitados y en constante actualización y entrenamiento.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      buttonText: "INGRESAR"
    },
    {
      id: 4,
      title: "SERVICIO ESPECIAL - RESGUARDO VIP",
      description: "Nuestro personal de resguardos está conformado por profesionales en el campo de la seguridad, altamente capacitados y en constante actualización y entrenamiento.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
      buttonText: "INGRESAR"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                {slide.description}
              </p>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded font-bold text-lg hover:bg-yellow-300 transition-colors">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
