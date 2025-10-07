
import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">ROBELI REAL ESTATE</h3>
            <p className="text-gray-400">
              Comprometidos a encontrar la propiedad perfecta para ti, con un servicio de excelencia y confianza.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#alojamientos" className="text-gray-400 hover:text-white transition-colors">Alojamientos</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="WhatsApp" className="text-gray-400 hover:text-white transition-colors"><WhatsAppIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} ROBELI REAL ESTATE — Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
