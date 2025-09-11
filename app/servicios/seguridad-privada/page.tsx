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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-400">
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
                  <span className="font-semibold text-blue-950">Protege lo que más amas con la tranquilidad que mereces.</span> Nuestros servicios de seguridad privada representan la <span className="font-semibold text-blue-950">máxima expresión en protección residencial y empresarial</span>, diseñados exclusivamente para clientes que no aceptan compromisos en su seguridad. Con <span className="font-semibold text-blue-600">personal de élite altamente especializado</span> y tecnología de vanguardia de última generación, creamos un <span className="font-semibold text-blue-950">escudo invisible e impenetrable</span> que protege sus bienes más valiosos y seres queridos las 24 horas del día, los 365 días del año. <span className="font-semibold text-blue-950">Su paz mental es nuestra misión.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contacto"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                  >
                    CONTACTAR
                  </Link>
                </div>
              </div>
            </div>

            

            {/* Call to Action */}
            <div className="bg-blue-950 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-blue-400">
                Protege lo que más Valoras
              </h2>
              <p className="text-xl mb-6 text-blue-200">
                Tu seguridad y la de tu familia no tienen precio. Contáctanos hoy para 
                una evaluación gratuita de seguridad y cotización personalizada.
              </p>
              <Link 
                href="/contacto"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                EVALUAR MI PROPIEDAD
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
