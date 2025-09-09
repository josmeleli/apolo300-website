import PageLayout from '../../components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

export default function SeguridadResguardo() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              SEGURIDAD DE RESGUARDO
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Custodia y transporte seguro de valores
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/servicio-de-seguridad-de-resguardo.webp"
                  alt="Seguridad de Resguardo"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Protección de Activos de Alto Valor
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  <span className="font-semibold text-blue-950">Confíe sus activos más valiosos a los verdaderos expertos en protección.</span> Nuestros servicios especializados de custodia y resguardo representan <span className="font-semibold text-blue-950">el estándar de oro en protección de alto valor</span>, diseñados para salvaguardar sus bienes más preciados con la misma dedicación que un tesoro nacional. Ofrecemos <span className="font-semibold text-yellow-600">transporte blindado de valores, custodia ultra-segura de documentos críticos</span> y resguardo de mercancías de alto valor, todo respaldado por <span className="font-semibold text-blue-950">protocolos de seguridad militares y tecnología de vanguardia</span> que garantiza que sus activos lleguen a su destino en perfectas condiciones, sin excepción.
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
                Protege tus Activos más Valiosos
              </h2>
              <p className="text-xl mb-6 text-blue-200">
                No arriesgues la seguridad de tus valores y activos importantes. Confía en 
                nuestros servicios profesionales de resguardo y transporte seguro.
              </p>
              <Link 
                href="/contacto"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                SOLICITAR RESGUARDO
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
