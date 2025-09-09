const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="mb-4 text-center">
              <img 
                src="/images/apolo300-logo-footer.webp" 
                alt="APOLO300" 
                className="h-48 w-auto mx-auto"
              />
            </div>
          </div>

          {/* Mapa de Ubicación */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Nuestra Ubicación</h4>
            <div className="rounded-lg overflow-hidden border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.0!2d-79.029!3d-8.111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDYnNDAuMCJTIDc5wrAwMSc0NC40Ilc!5e0!3m2!1ses!2spe!4v1647123456789!5m2!1ses!2spe"
                width="100%"
                height="192"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación APOLO300 - Jirón Bolívar 350, Trujillo 13001, Perú"
              ></iframe>
            </div>
          </div>

          {/* Contáctenos */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contáctenos</h4>
            <div className="space-y-3">
              <div className="flex items-start justify-center md:justify-start">
                <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-200 text-sm">Jirón Bolívar 350, Trujillo 13001, Perú</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-blue-200 text-sm">+51 999 888 777</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-blue-200 text-sm">+51 888 777 666</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-blue-200 text-sm">info@apolo300.com</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-blue-200 text-sm">ventas@apolo300.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm text-center md:text-left">
            COPYRIGHT © 2025 CORPORACIPÓN APOLO300 PERÚ
          </p>
          <p className="text-blue-200 text-sm text-center md:text-right mt-2 md:mt-0">
            Desarrollado por <a 
              href="https://josmeldev.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-100 transition-colors underline"
            >
              Josmel Vergara
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
