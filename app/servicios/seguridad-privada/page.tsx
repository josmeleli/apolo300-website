import PageLayout from '../../components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

export default function SeguridadPrivada() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              SEGURIDAD PRIVADA
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Protección personalizada las 24 horas del día
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
                  src="/images/servicio-de-seguridad-privada.webp"
                  alt="Seguridad Privada"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Protección Integral para tu Propiedad
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Nuestros servicios de seguridad privada ofrecen protección completa para residencias, 
                  oficinas y propiedades privadas. Con personal altamente capacitado y tecnología de 
                  vanguardia, garantizamos la seguridad de sus bienes y seres queridos las 24 horas del día.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contacto"
                    className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
                  >
                    CONTACTAR
                  </Link>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Vigilancia 24/7</h3>
                <p className="text-gray-600">
                  Protección continua con guardias profesionales durante todo el día y la noche.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🔐</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Control de Acceso</h3>
                <p className="text-gray-600">
                  Sistemas avanzados de control de entrada y salida para máxima seguridad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📹</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Monitoreo CCTV</h3>
                <p className="text-gray-600">
                  Videovigilancia profesional con monitoreo en tiempo real.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🚨</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Respuesta Inmediata</h3>
                <p className="text-gray-600">
                  Respuesta rápida ante emergencias y situaciones de riesgo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Informes Detallados</h3>
                <p className="text-gray-600">
                  Reportes completos de actividades y incidentes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Personal Certificado</h3>
                <p className="text-gray-600">
                  Guardias entrenados y certificados con amplia experiencia.
                </p>
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                Nuestro Proceso de Servicio
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                  <h3 className="font-bold text-blue-950 mb-2">Evaluación</h3>
                  <p className="text-gray-600 text-sm">Análisis completo de las necesidades de seguridad específicas.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                  <h3 className="font-bold text-blue-950 mb-2">Planificación</h3>
                  <p className="text-gray-600 text-sm">Diseño de estrategias de seguridad personalizadas.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                  <h3 className="font-bold text-blue-950 mb-2">Implementación</h3>
                  <p className="text-gray-600 text-sm">Despliegue de personal y equipos de seguridad.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                  <h3 className="font-bold text-blue-950 mb-2">Monitoreo</h3>
                  <p className="text-gray-600 text-sm">Supervisión continua y optimización del servicio.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
