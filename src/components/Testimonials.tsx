
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Martínez",
    role: "Propietario de vivienda",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Excelente trabajo en la impermeabilización de mi terraza. Llevaba años con problemas de filtraciones y ahora todo está perfecto. El equipo muy profesional y limpio.",
  },
  {
    id: 2,
    name: "Laura Sánchez",
    role: "Administradora de fincas",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Como administradora de varias comunidades de vecinos, he trabajado con Madrid Impermeabiliza en múltiples ocasiones y siempre con resultados sobresalientes. Cumplen plazos y presupuestos.",
  },
  {
    id: 3,
    name: "Miguel Ángel Gómez",
    role: "Propietario de local comercial",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 4,
    text: "Solucionaron un problema grave de humedades en mi local comercial. Trabajo rápido, limpio y muy profesional. Recomendaría sus servicios sin duda.",
  },
  {
    id: 4,
    name: "Ana Belén Rodríguez",
    role: "Presidenta de comunidad",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Han impermeabilizado la cubierta de nuestro edificio de forma excepcional. Llevan trabajando con nuestra comunidad desde hace años y la calidad es inmejorable.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-600">
            Estas son algunas opiniones de clientes que han confiado en nuestros
            servicios de impermeabilización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className="text-slate-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mt-14">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">
              ¿Por qué elegir Madrid Impermeabiliza?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-800 mb-1">Calidad garantizada</h4>
                <p className="text-sm text-slate-600">Utilizamos materiales de primera calidad</p>
              </div>
              <div>
                <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-800 mb-1">Rapidez</h4>
                <p className="text-sm text-slate-600">Cumplimos con los plazos acordados</p>
              </div>
              <div>
                <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-800 mb-1">Precio justo</h4>
                <p className="text-sm text-slate-600">Presupuestos claros sin sorpresas</p>
              </div>
              <div>
                <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-800 mb-1">Atención personalizada</h4>
                <p className="text-sm text-slate-600">Te asesoramos durante todo el proceso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
