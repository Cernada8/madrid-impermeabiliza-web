
import React from "react";

const servicesList = [
  {
    title: "Impermeabilización de tejados",
    description:
      "Protegemos y sellamos tu tejado para evitar filtraciones de agua, aumentando su vida útil y previniendo daños estructurales.",
    icon: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sellado de terrazas y balcones",
    description:
      "Aplicamos tratamientos especializados para evitar humedades y filtraciones en terrazas y balcones, manteniendo su estética.",
    icon: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Impermeabilización de sótanos",
    description:
      "Soluciones efectivas contra humedades en sótanos y garajes, aplicando técnicas avanzadas para eliminar problemas de agua.",
    icon: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Protección de fachadas",
    description:
      "Tratamientos hidrofugantes que protegen tus fachadas de la lluvia y la humedad sin alterar su transpirabilidad.",
    icon: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Impermeabilización industrial",
    description:
      "Soluciones a medida para grandes superficies industriales, garantizando la continuidad de la actividad empresarial.",
    icon: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-slate-50">
      <div className="container-padding mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Nuestros Servicios de Impermeabilización
          </h2>
          <p className="text-slate-600">
            Ofrecemos soluciones profesionales y duraderas para todo tipo de
            problemas de humedad e impermeabilización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
                <a
                  href="#contacto"
                  className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800"
                >
                  Solicitar información →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
