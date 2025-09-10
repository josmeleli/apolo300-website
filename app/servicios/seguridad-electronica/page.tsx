import Link from 'next/link'
import PageLayout from '../../components/PageLayout'

export default function SeguridadElectronica() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              SEGURIDAD ELECTRÓNICA
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Sistemas avanzados de seguridad electrónica con tecnología de punta
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-950 mb-6">
                    Tecnología Avanzada para Su Seguridad
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    En APOLO300 implementamos los sistemas de seguridad electrónica más avanzados del mercado, 
                    combinando tecnología de punta con monitoreo profesional las 24 horas del día. Nuestras 
                    soluciones integrales garantizan la máxima protección para su propiedad.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    ¿Por Qué Elegir Nuestros Sistemas Electrónicos?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <span className="text-blue-800">Tecnología de última generación con IA integrada</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <span className="text-blue-800">Monitoreo 24/7 desde nuestra central de alarmas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <span className="text-blue-800">Respuesta inmediata ante cualquier incidencia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <span className="text-blue-800">Instalación y mantenimiento profesional</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/servicio-de-seguridad-corporativa.webp" 
                  alt="Seguridad Electrónica APOLO300"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
                Nuestros Servicios Electrónicos
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* CCTV Systems */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-blue-600">📹</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900">Sistemas CCTV</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cámaras HD y 4K Ultra</li>
                    <li>• Visión nocturna avanzada</li>
                    <li>• Grabación en la nube</li>
                    <li>• Acceso remoto móvil</li>
                    <li>• Análisis de video inteligente</li>
                  </ul>
                </div>

                {/* Access Control */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-green-600">🔐</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900">Control de Acceso</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tarjetas de proximidad</li>
                    <li>• Biometría facial y dactilar</li>
                    <li>• Códigos PIN personalizados</li>
                    <li>• Registro de entradas/salidas</li>
                    <li>• Gestión centralizada</li>
                  </ul>
                </div>

                {/* Alarm Systems */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-red-600">🚨</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900">Sistemas de Alarma</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sensores de movimiento</li>
                    <li>• Detectores de apertura</li>
                    <li>• Sensores perimetrales</li>
                    <li>• Botones de pánico</li>
                    <li>• Integración con móvil</li>
                  </ul>
                </div>

                {/* Smart Monitoring */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-purple-600">📱</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900">Monitoreo Inteligente</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Central de monitoreo 24/7</li>
                    <li>• Aplicación móvil exclusiva</li>
                    <li>• Notificaciones instantáneas</li>
                    <li>• Reportes detallados</li>
                    <li>• Soporte técnico remoto</li>
                  </ul>
                </div>

                {/* Fire Detection */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-orange-600">🔥</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900">Detección de Incendios</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Detectores de humo</li>
                    <li>• Sensores de temperatura</li>
                    <li>• Rociadores automáticos</li>
                    <li>• Alarmas audibles</li>
                    <li>• Conexión con bomberos</li>
                  </ul>
                </div>

                {/* Integration */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-yellow-600">⚙️</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900">Integración Total</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Plataforma unificada</li>
                    <li>• Automatización del hogar</li>
                    <li>• Control de iluminación</li>
                    <li>• Gestión energética</li>
                    <li>• Escalabilidad futura</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technology Features */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-16">
              <h2 className="text-3xl font-bold text-blue-950 text-center mb-8">
                Tecnología de Vanguardia
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Inteligencia Artificial</h4>
                  <p className="text-sm text-gray-700">Análisis automático de patrones y detección de anomalías</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <span className="text-3xl">☁️</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Tecnología Cloud</h4>
                  <p className="text-sm text-gray-700">Almacenamiento seguro y acceso desde cualquier lugar</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <span className="text-3xl">📡</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">IoT Avanzado</h4>
                  <p className="text-sm text-gray-700">Dispositivos interconectados para máxima eficiencia</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Ciberseguridad</h4>
                  <p className="text-sm text-gray-700">Protección avanzada contra amenazas digitales</p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
                Nuestro Proceso de Implementación
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Evaluación</h4>
                  <p className="text-gray-700">Análisis detallado de sus necesidades de seguridad</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Diseño</h4>
                  <p className="text-gray-700">Planificación personalizada del sistema integral</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Instalación</h4>
                  <p className="text-gray-700">Implementación profesional con mínima interrupción</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Monitoreo</h4>
                  <p className="text-gray-700">Vigilancia continua y soporte técnico permanente</p>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
                Sectores que Atendemos
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">🏢</span>
                  <p className="text-sm font-medium text-gray-800">Corporativo</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">🏠</span>
                  <p className="text-sm font-medium text-gray-800">Residencial</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">🏭</span>
                  <p className="text-sm font-medium text-gray-800">Industrial</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">🛒</span>
                  <p className="text-sm font-medium text-gray-800">Comercial</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">🏥</span>
                  <p className="text-sm font-medium text-gray-8OO">Salud</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">🎓</span>
                  <p className="text-sm font-medium text-gray-800">Educación</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-950 text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Modernizar Su Seguridad?
              </h2>
              <p className="text-blue-200 mb-8 text-lg">
                Solicite una evaluación gratuita y descubra cómo nuestros sistemas electrónicos pueden proteger lo que más valora.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contacto" 
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  Solicitar Cotización
                </Link>
                <Link 
                  href="/servicios" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-950 transition-colors"
                >
                  Ver Todos los Servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
