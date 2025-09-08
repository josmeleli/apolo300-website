import PageLayout from '../../components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

export default function PrevencionPerdidas() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              PREVENCIÓN DE PÉRDIDAS
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Estrategias avanzadas contra robos y fraudes
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/servicio-de-seguridad-de-prevención-de-perdidas.webp"
                  alt="Prevención de Pérdidas"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Protección Preventiva Inteligente
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Implementamos estrategias y tecnologías avanzadas para prevenir robos, fraudes y 
                  pérdidas en establecimientos comerciales y empresariales, reduciendo riesgos operacionales.
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

            

            {/* Call to Action */}
            <div className="bg-blue-950 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                Reduce las Pérdidas de tu Negocio
              </h2>
              <p className="text-xl mb-6 text-blue-200">
                No permitas que los hurtos afecten tu rentabilidad. Implementa nuestras 
                soluciones especializadas de prevención de pérdidas.
              </p>
              <Link 
                href="/contacto"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                PREVENIR PÉRDIDAS
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
