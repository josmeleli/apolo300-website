import PageLayout from '../components/PageLayout'

export default function Nosotros() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              NOSOTROS
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Conoce más sobre APOLO300 y nuestro compromiso con la seguridad
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  ¿Quiénes Somos?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  APOLO300 es una empresa especializada en servicios de seguridad integral, 
                  comprometida con la protección de personas, bienes y propiedades. Con años 
                  de experiencia en el sector, nos hemos consolidado como una empresa líder 
                  en soluciones de seguridad personalizada.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nuestro equipo está conformado por profesionales altamente capacitados y 
                  certificados, que trabajan con dedicación para brindar servicios de la 
                  más alta calidad y confiabilidad.
                </p>
              </div>
              <div className="bg-blue-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Nuestra Misión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Brindar servicios de seguridad integral de excelencia, garantizando la 
                  protección y tranquilidad de nuestros clientes a través de soluciones 
                  personalizadas y tecnología de vanguardia.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              <div className="bg-yellow-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Nuestra Visión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconocidos como la empresa líder en servicios de seguridad en el Perú, 
                  destacando por nuestra innovación, profesionalismo y compromiso con la 
                  excelencia en cada servicio que brindamos.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Nuestros Valores
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-3">✓</span>
                    <span className="text-gray-600">Compromiso y responsabilidad</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-3">✓</span>
                    <span className="text-gray-600">Profesionalismo y excelencia</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-3">✓</span>
                    <span className="text-gray-600">Confiabilidad y transparencia</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-3">✓</span>
                    <span className="text-gray-600">Innovación y mejora continua</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-3">✓</span>
                    <span className="text-gray-600">Respeto y integridad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
