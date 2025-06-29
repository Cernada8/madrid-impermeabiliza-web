
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pt-16 pb-6">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Gloteber Impermeabilización S.L</h3>
            <p className="text-slate-300 mb-4">
              Soluciones profesionales de impermeabilización para viviendas, 
              comunidades, empresas e industrias en Madrid y alrededores.
            </p>
            <div className="text-slate-300 text-sm mb-4">
              <p><strong>CIF:</strong> B70892161</p>
              <p><strong>Registro:</strong> Tomo 46599, Folio 205, Hoja 818080</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-slate-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-slate-300 hover:text-white transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#trabajos" className="text-slate-300 hover:text-white transition-colors">
                  Trabajos realizados
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-slate-300 hover:text-white transition-colors">
                  Impermeabilización de tejados
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-300 hover:text-white transition-colors">
                  Sellado de terrazas y balcones
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-300 hover:text-white transition-colors">
                  Impermeabilización de sótanos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-300 hover:text-white transition-colors">
                  Protección de fachadas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-300 hover:text-white transition-colors">
                  Impermeabilización industrial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <p><strong>Teléfonos:</strong></p>
              <p>637 311 310 (Teodoro)</p>
              <p>91 688 29 38 (Fijo)</p>
              <p><strong>Email:</strong></p>
              <p>gloteber@gmail.com</p>
              <p><strong>Dirección:</strong></p>
              <p>C. Salvaleón, 6, local 1A</p>
              <p>28918 Leganés, Madrid</p>
              <p><strong>Horarios:</strong></p>
              <p>Invierno: 8:30 - 18:00</p>
              <p>Verano: 7:00 - 15:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Gloteber Impermeabilización S.L. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Aviso legal
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
