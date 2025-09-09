import PageLayout from '../../components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

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
                  <span className="font-semibold text-blue-950">Transforma tu evento en una experiencia inolvidable y completamente segura.</span> Nuestros servicios especializados en seguridad para eventos representan <span className="font-semibold text-blue-950">la excelencia en protección integral</span> para eventos corporativos de alto nivel, celebraciones sociales exclusivas y eventos masivos de gran envergadura. Contamos con <span className="font-semibold text-yellow-600">especialistas certificados en manejo de multitudes</span> y sistemas de control de acceso de última generación que garantizan que su evento se desarrolle <span className="font-semibold text-blue-950">sin ningún contratiempo, permitiendo que usted y sus invitados se enfoquen únicamente en disfrutar</span> de momentos únicos e irrepetibles.
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
                ¿Planificando un Evento?
              </h2>
              <p className="text-xl mb-6 text-blue-200">
                Asegura el éxito de tu evento con nuestros servicios profesionales de seguridad. 
                Contactanos para una consulta gratuita y cotización personalizada.
              </p>
              <Link 
                href="/contacto"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                SOLICITAR COTIZACIÓN
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
