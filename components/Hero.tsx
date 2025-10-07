
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <img src="https://picsum.photos/1920/1080?random=1" alt="Moderno edificio de apartamentos de lujo" className="absolute top-0 left-0 w-full h-full object-cover"/>
      <div className="relative z-20 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 animate-fade-in-down" style={{ fontFamily: "'Playfair Display', serif" }}>
          Tu Próximo Hogar te Espera
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Descubre propiedades exclusivas para vivir, invertir o vacacionar. La excelencia es nuestra promesa.
        </p>
        <div className="space-x-4 animate-fade-in-up">
          <a href="#alojamientos" className="inline-block bg-[#0b6efd] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
            Ver Alojamientos
          </a>
          <a href="#contacto" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-black transition-all">
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
