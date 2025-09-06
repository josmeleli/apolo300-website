'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "CÁMARAS DE SEGURIDAD",
      description: "Sistemas de videovigilancia de alta calidad para proteger tu hogar o negocio. Instalación profesional con tecnología de punta y monitoreo 24/7.",
      image: "/images/instalación-de-cámaras-de-seguridad.webp",
      buttonText: "SOLICITAR COTIZACIÓN"
    },
    {
      id: 2,
      title: "SISTEMAS DE ALARMAS",
      description: "Alarmas contra intrusos con sensores de movimiento, contactos magnéticos y sistemas de respuesta inmediata para máxima seguridad.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "SOLICITAR COTIZACIÓN"
    },
    {
      id: 3,
      title: "VENTA Y MANTENIMIENTO DE EQ. DE CÓMPUTO",
      description: "Computadoras, laptops, impresoras y equipos informáticos. Servicio técnico especializado y mantenimiento preventivo y correctivo.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "SOLICITAR COTIZACIÓN"
    },
    {
      id: 4,
      title: "INTERNET HOGAR - CABLE SATELITAL",
      description: "Servicio de internet de alta velocidad y televisión por cable satelital. Instalación profesional y soporte técnico especializado.",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "SOLICITAR COTIZACIÓN"
    },
    {
      id: 5,
      title: "INTERCOMUNICADORES", 
      description: "Sistemas de intercomunicación para edificios, casas y oficinas. Video porteros y sistemas de control de acceso con tecnología avanzada.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "SOLICITAR COTIZACIÓN"
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
            style={{ 
              backgroundImage: `url(${slide.image})`,
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
              <button className="bg-yellow-400 text-black px-8 py-3 rounded font-bold text-lg hover:bg-yellow-300 transition-colors drop-shadow-lg">
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
