
import React from "react";

const servicesList = [
  {
    title: "Impermeabilización de tejados",
    description:
      "Protegemos y sellamos tu tejado para evitar filtraciones de agua, aumentando su vida útil y previniendo daños estructurales.",
    icon: "/lovable-uploads/6bf59fe9-c773-44c2-a4f9-c650ad0b71f4.png",
  },
  {
    title: "Sellado de terrazas y balcones",
    description:
      "Aplicamos tratamientos especializados para evitar humedades y filtraciones en terrazas y balcones, manteniendo su estética.",
    icon: "/lovable-uploads/c13a337e-558b-46c8-b51a-659a69199f1e.png",
  },
  {
    title: "Impermeabilización de sótanos",
    description:
      "Soluciones efectivas contra humedades en sótanos y garajes, aplicando técnicas avanzadas para eliminar problemas de agua.",
    icon: "/lovable-uploads/69b1818f-d47a-46e5-823c-69088cd3d424.png",
  },
  {
    title: "Protección de fachadas",
    description:
      "Tratamientos hidrofugantes que protegen tus fachadas de la lluvia y la humedad sin alterar su transpirabilidad.",
    icon: "/lovable-uploads/c9eadf29-b070-489a-af97-6fe744ff5b75.png",
  },
  {
    title: "Impermeabilización industrial",
    description:
      "Soluciones a medida para grandes superficies industriales, garantizando la continuidad de la actividad empresarial.",
    icon: "/lovable-uploads/cd7990f7-ff64-4513-9bb0-cfb72512311e.png",
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
