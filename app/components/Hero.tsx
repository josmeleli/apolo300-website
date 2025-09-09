'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "SEGURIDAD PRIVADA",
      description: "Servicios de seguridad personalizada para residencias, oficinas y propiedades privadas. Protección profesional 24/7 con personal capacitado y tecnología avanzada.",
      image: "/images/servicio-de-seguridad-privada.webp",
      buttonText: "INGRESAR",
      route: "/servicios/seguridad-privada"
    },
    {
      id: 2,
      title: "SEGURIDAD PARA EVENTOS",
      description: "Protección especializada para eventos corporativos, sociales y masivos. Control de acceso, vigilancia perimetral y manejo de multitudes con personal experimentado.",
      image: "/images/servicio-de-seguridad-para-eventos.webp",
      buttonText: "INGRESAR",
      route: "/servicios/seguridad-eventos"
    },
    {
      id: 3,
      title: "SEGURIDAD CORPORATIVA",
      description: "Soluciones integrales de seguridad para empresas y corporaciones. Vigilancia ejecutiva, protección de instalaciones y control de acceso empresarial.",
      image: "/images/servicio-de-seguridad-corporativa.webp",
      buttonText: "INGRESAR",
      route: "/servicios/seguridad-corporativa"
    },
    {
      id: 4,
      title: "SEGURIDAD DE RESGUARDO",
      description: "Protección especializada para bienes y valores. Custodia de mercancías, transporte de valores y resguardo de activos importantes con máxima seguridad.",
      image: "/images/servicio-de-seguridad-de-resguardo.webp",
      buttonText: "INGRESAR",
      route: "/servicios/seguridad-resguardo"
    },
    {
      id: 5,
      title: "SEGURIDAD DE PREVENCIÓN DE PÉRDIDAS", 
      description: "Servicios especializados en prevención de robos y pérdidas en comercios y almacenes. Vigilancia discreta y estrategias de protección efectivas.",
      image: "/images/servicio-de-seguridad-de-prevención-de-perdidas.webp",
      buttonText: "INGRESAR",
      route: "/servicios/prevencion-perdidas"
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
    <div className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-hidden pt-24 sm:pt-28 md:pt-32">
      {slides.map((slide, index) => {
        let slideClass = '';
        if (index === currentSlide) {
          slideClass = 'translate-x-0'; // Slide actual visible
        } else if (index > currentSlide) {
          slideClass = 'translate-x-full'; // Slides futuros a la derecha
        } else {
          slideClass = '-translate-x-full'; // Slides pasados a la izquierda
        }
        
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${slideClass}`}
          >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: (slide.id === 2 || slide.id === 3) ? 'center' : 'center top',
              filter: 'blur(2px)'
            }}
          >
          </div>
          
          {/* CSS Overlay Negro */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              zIndex: 5
            }}
          ></div>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div 
              className="text-center text-white max-w-4xl px-6 py-8 rounded-lg"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400 drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-lg">
                {slide.description}
              </p>
              <Link 
                href={slide.route}
                className="bg-yellow-400 text-black px-8 py-3 rounded font-bold text-lg hover:bg-yellow-300 transition-colors drop-shadow-lg inline-block"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
          </div>
        );
      })}

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
