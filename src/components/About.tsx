
import React from "react";

const About = () => {
  return (
    <section id="nosotros" className="section-padding">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Sobre nosotros
            </h2>
            <p className="text-slate-600 mb-6">
              Con más de 15 años de experiencia en el sector, Madrid Impermeabiliza 
              se ha convertido en un referente en servicios de impermeabilización en 
              toda la Comunidad de Madrid.
            </p>
            <p className="text-slate-600 mb-6">
              Nuestra misión es ofrecer soluciones efectivas y duraderas para problemas de 
              humedades, filtración y aislamiento, utilizando las técnicas más avanzadas 
              y materiales de primera calidad.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-blue-600 font-bold text-3xl mb-2">15+</div>
                <div className="text-slate-700">Años de experiencia</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-blue-600 font-bold text-3xl mb-2">500+</div>
                <div className="text-slate-700">Clientes satisfechos</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-blue-600 font-bold text-3xl mb-2">100%</div>
                <div className="text-slate-700">Garantía de calidad</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-blue-600 font-bold text-3xl mb-2">24h</div>
                <div className="text-slate-700">Respuesta rápida</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary inline-block text-center">
                Contactar ahora
              </a>
              <a href="#trabajos" className="btn-outline inline-block text-center">
                Ver nuestros trabajos
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800"
              alt="Equipo de Madrid Impermeabiliza"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-white font-medium italic">
                "Nuestro compromiso es ofrecer la mejor calidad y un servicio personalizado a cada cliente."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
