import PageLayout from '../components/PageLayout'

export default function Contacto() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              CONTACTO
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Estamos aquí para ayudarte. Contáctanos ahora
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Envíanos un Mensaje
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-600"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-600"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-600"
                      placeholder="+51 999 999 999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="vigilancia-privada">Vigilancia Privada</option>
                      <option value="seguridad-residencial">Seguridad Residencial</option>
                      <option value="seguridad-corporativa">Seguridad Corporativa</option>
                      <option value="seguridad-resguardo">Seguridad de Resguardo</option>
                      <option value="prevencion-perdidas">Prevención de Pérdidas</option>
                      <option value="seguridad-electronica">Seguridad Electrónica</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black placeholder-gray-600"
                      placeholder="Cuéntanos sobre tus necesidades de seguridad..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              {/* Google Maps */}
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Nuestra Ubicación
                </h2>
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.52345!2d-79.02894568562256!3d-8.110987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d3d7a0c0c01%3A0x1234567890abcdef!2sJir%C3%B3n%20Bol%C3%ADvar%20350%2C%20Trujillo%2013001%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1694123456789!5m2!1ses!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="APOLO300 - Jirón Bolívar 350, Trujillo"
                  ></iframe>
                </div>
                <div className="mt-4 text-gray-600">
                  <p className="text-lg font-semibold">📍 Jirón Bolívar 350, Trujillo 13001</p>
                  <p className="mt-1">Oficinas principales de APOLO300 - Servicios de Seguridad</p>
                </div>
              </div>
            </div>

            {/* Contact Information Section Below */}
            <div className="mt-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-950 mb-6 text-center">Información de Contacto</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Dirección</h4>
                        <p className="text-gray-600">Jirón Bolívar 350, Trujillo 13001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Teléfono</h4>
                        <p className="text-gray-600">+51 944 123 456</p>
                        <p className="text-gray-600">+51 44 456 789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">info@apolo300.com</p>
                        <p className="text-gray-600">contacto@apolo300.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-4">Horarios de Atención</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lunes - Viernes:</span>
                        <span className="font-semibold">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sábados:</span>
                        <span className="font-semibold">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Domingos:</span>
                        <span className="font-semibold">Cerrado</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-4">Servicios de Emergencia</h4>
                    <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-gray-700">
                        <strong>Emergencias 24/7:</strong><br/>
                        +51 999 888 777<br/>
                        Disponible todos los días del año
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
