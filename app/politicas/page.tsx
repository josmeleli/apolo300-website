import PageLayout from '../components/PageLayout'

export default function Politicas() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              POLÍTICAS
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Conoce nuestras políticas de calidad y protección de datos
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Política de Calidad */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">Política de Calidad</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  En APOLO300 nos comprometemos a brindar servicios de seguridad de la más alta calidad, 
                  cumpliendo y superando las expectativas de nuestros clientes a través de:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">Personal altamente capacitado y certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">Mejora continua de nuestros procesos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">Cumplimiento de normativas y estándares internacionales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">Innovación tecnológica en nuestros servicios</span>
                  </li>
                </ul>
              </div>

              {/* Política de Privacidad */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">Política de Privacidad</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Protegemos la privacidad y confidencialidad de la información de nuestros clientes:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">Recopilación de Datos</h3>
                    <p className="text-gray-600">
                      Recopilamos únicamente la información necesaria para brindar nuestros servicios de seguridad.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">Uso de Información</h3>
                    <p className="text-gray-600">
                      La información se utiliza exclusivamente para la prestación de servicios y mejora de los mismos.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">Protección de Datos</h3>
                    <p className="text-gray-600">
                      Implementamos medidas de seguridad técnicas y organizativas para proteger los datos personales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Política de Seguridad */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">Política de Seguridad</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Nuestros protocolos de seguridad están diseñados para garantizar la máxima protección:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950 mb-3">Protocolos de Acción</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span className="text-gray-600">Evaluación de riesgos</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span className="text-gray-600">Respuesta inmediata</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span className="text-gray-600">Comunicación efectiva</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950 mb-3">Certificaciones</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span className="text-gray-600">ISO 9001</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span className="text-gray-600">Certificación SUCAMEC</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span className="text-gray-600">Estándares internacionales</span>
                      </li>
                    </ul>
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
