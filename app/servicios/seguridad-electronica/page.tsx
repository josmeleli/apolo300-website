import PageLayout from '../../components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

export default function SeguridadElectronica() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-400">
              SEGURIDAD ELECTRÓNICA
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Control total desde cualquier dispositivo
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
                  src="/images/servicio-de-seguridad-electrónica.webp"
                  alt="Seguridad Electrónica"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Tecnología Inteligente a su Alcance
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  <span className="font-semibold text-blue-950">Supervise y controle su propiedad desde cualquier lugar del mundo.</span> Nuestros sistemas de seguridad electrónica representan la <span className="font-semibold text-blue-950">evolución más avanzada en monitoreo remoto</span>, diseñados para propietarios inteligentes que valoran la tranquilidad y el control total. Con <span className="font-semibold text-blue-600">cámaras de alta definición, alertas instantáneas y acceso móvil 24/7</span>, transformamos su smartphone en el centro de comando más poderoso, permitiéndole <span className="font-semibold text-blue-950">vigilar cada rincón de su propiedad en tiempo real</span>, sin importar si está en la oficina, de viaje o en casa. <span className="font-semibold text-blue-950">Su seguridad, siempre a un toque de distancia.</span>
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
                Moderniza tu Seguridad Hoy
              </h2>
              <p className="text-xl mb-6 text-blue-200">
                Experimenta el futuro de la seguridad con nuestros sistemas electrónicos inteligentes.
                Solicita una demostración gratuita y descubre el control total.
              </p>
              <Link 
                href="/contacto"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                DEMOSTRACIÓN GRATUITA
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
