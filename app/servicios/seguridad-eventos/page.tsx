import PageLayout from '../../components/PageLayout'
import Image from 'next/image'

export default function SeguridadEventos() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              SEGURIDAD PARA EVENTOS
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Protección especializada para eventos exitosos
            </p>
          </div>
        </section>

        {/* Service Detail Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Image */}
              <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/servicio-de-seguridad-para-eventos.webp"
                  alt="Seguridad para Eventos"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Eventos Seguros y Exitosos
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Ofrecemos servicios especializados de seguridad para eventos corporativos, sociales 
                  y masivos. Nuestro equipo experimentado en manejo de multitudes y control de acceso 
                  garantiza que su evento se desarrolle sin contratiempos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                    Solicitar Cotización
                  </button>
                  <button className="border-2 border-blue-950 text-blue-950 px-6 py-3 rounded-lg font-bold hover:bg-blue-950 hover:text-white transition-colors">
                    Ver Portfolio
                  </button>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Planificación</h3>
                <p className="text-gray-600">
                  Análisis previo y planificación detallada de la seguridad del evento.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Control de Multitudes</h3>
                <p className="text-gray-600">
                  Manejo profesional de flujos de personas y control de capacidad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Revisión de Accesos</h3>
                <p className="text-gray-600">
                  Control riguroso de entrada con revisión de seguridad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🚓</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Coordinación</h3>
                <p className="text-gray-600">
                  Trabajo conjunto con autoridades locales y servicios de emergencia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Respuesta de Emergencia</h3>
                <p className="text-gray-600">
                  Protocolos de emergencia y evacuación bien establecidos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📡</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Comunicación</h3>
                <p className="text-gray-600">
                  Sistemas de comunicación profesional entre todo el equipo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
