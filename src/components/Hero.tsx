
import React from "react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen bg-slate-900 flex items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/60"></div>
      
      <div className="container-padding relative z-10 mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Protegemos tu hogar de las humedades con soluciones profesionales
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8">
            Servicio especializado en impermeabilizaciones para viviendas, comunidades, 
            empresas e industrias en Leganés, Madrid y alrededores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto" className="btn-primary inline-block text-center">
              Solicita tu presupuesto gratis
            </a>
            <a href="#servicios" className="btn-outline bg-white/10 border-white text-white hover:bg-white/20 inline-block text-center">
              Descubre nuestros servicios
            </a>
          </div>
          <div className="mt-12">
            <p className="text-slate-300 font-medium">
              Operamos en: <span className="text-white">Leganés, Madrid centro, Getafe, Alcorcón, Móstoles</span> y alrededores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
