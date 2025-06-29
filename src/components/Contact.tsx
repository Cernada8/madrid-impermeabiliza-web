
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="section-padding">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Contacta con nosotros
            </h2>
            <p className="text-slate-600 mb-8">
              Estamos a tu disposición para resolver cualquier duda o facilitar un 
              presupuesto sin compromiso. Nuestro equipo te atenderá a la mayor brevedad.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">Teléfonos</h4>
                  <div className="space-y-1">
                    <div>
                      <a href="tel:+34637311310" className="text-slate-600 hover:text-blue-600 transition-colors">
                        637 311 310 (Teodoro)
                      </a>
                    </div>
                    <div>
                      <a href="tel:+34916882938" className="text-slate-600 hover:text-blue-600 transition-colors">
                        91 688 29 38 (Fijo)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">Email</h4>
                  <a href="mailto:gloteber@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                    gloteber@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">Dirección</h4>
                  <p className="text-slate-600">
                    C. Salvaleón, 6, local 1A<br />
                    28918 Leganés, Madrid
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Clock className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">Horarios</h4>
                  <div className="text-slate-600 space-y-1">
                    <p>Invierno: 8:30 - 18:00</p>
                    <p>Verano: 7:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-3">Zonas de servicio</h4>
              <p className="text-slate-600 mb-4">
                Ofrecemos nuestros servicios de impermeabilización en:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Leganés", "Madrid Centro", "Getafe", "Alcorcón", "Móstoles", "Fuenlabrada", "Parla", "Pinto"].map((zone) => (
                  <span key={zone} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    {zone}
                  </span>
                ))}
              </div>
              <a
                href="https://wa.me/34637311310"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Solicita información o presupuesto
              </h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="637 311 310"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                    Servicio que te interesa
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="tejados">Impermeabilización de tejados</option>
                    <option value="terrazas">Sellado de terrazas y balcones</option>
                    <option value="sotanos">Impermeabilización de sótanos</option>
                    <option value="fachadas">Protección de fachadas</option>
                    <option value="industrial">Impermeabilización industrial</option>
                    <option value="otro">Otro (especificar en mensaje)</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe tu proyecto o consulta..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-between items-center">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                      required
                    />
                    <span className="ml-2 text-sm text-slate-600">
                      Acepto la política de privacidad
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Enviar solicitud
                  </button>
                </div>
              </form>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.8!2d-3.76!3d40.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE5JzEyLjAiTiAzwrA0NSczNi4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Gloteber Impermeabilización"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
