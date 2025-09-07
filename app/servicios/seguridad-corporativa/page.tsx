import PageLayout from '../../components/PageLayout'
import Image from 'next/image'

export default function SeguridadCorporativa() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              SEGURIDAD CORPORATIVA
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Protección integral para empresas y ejecutivos
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/servicio-de-seguridad-corporativa.webp"
                  alt="Seguridad Corporativa"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Soluciones Empresariales Avanzadas
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Servicios integrales de seguridad corporativa que incluyen protección ejecutiva, 
                  seguridad de instalaciones, gestión de riesgos y auditorías de seguridad para 
                  empresas de todos los tamaños.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                    Consulta Gratuita
                  </button>
                  <button className="border-2 border-blue-950 text-blue-950 px-6 py-3 rounded-lg font-bold hover:bg-blue-950 hover:text-white transition-colors">
                    Descargar Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
