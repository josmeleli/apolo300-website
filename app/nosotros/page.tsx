import PageLayout from '../components/PageLayout'

export default function Nosotros() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-400">
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
                  Somos <span className="font-semibold text-blue-950">APOLO300</span>, un Grupo Empresarial moderno e integral que le ofrece los más amplios patrones de <span className="font-semibold text-blue-950">calidad, seguridad, tecnología y recursos humanos especializados</span>. Con amplia experiencia y consolidada presencia en el mercado empresarial peruano, nos especializamos en brindar <span className="font-semibold text-blue-950">Servicios Integrales de Seguridad</span> de clase mundial.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Nuestra filosofía se centra en ofrecer <span className="font-semibold text-blue-950">servicios de máxima calidad</span>, perfectamente alineados a los requerimientos específicos y particulares de cada uno de nuestros clientes, desde pequeñas empresas hasta grandes corporaciones.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="font-semibold text-blue-950">Nuestro objetivo es claro:</span> promover un nivel de servicio excepcional, contar con el mejor recurso humano del sector y desarrollar continuamente nuevas estrategias innovadoras para proteger lo que más valoras. En APOLO300, tu seguridad es nuestra prioridad número uno.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/apolo300-nosotros.webp"
                  alt="APOLO300 - Equipo de Seguridad"
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              <div className="bg-blue-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Nuestra Misión</h3>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-950">Transformar la seguridad en tranquilidad</span> mediante servicios integrales de excelencia incomparable. Garantizamos la protección total de nuestros clientes a través de soluciones personalizadas, tecnología de vanguardia y un equipo humano de élite, creando un escudo de confianza que permite a nuestros clientes enfocarse en lo que realmente importa: hacer crecer sus negocios y disfrutar de su vida con total serenidad.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Nuestra Visión</h3>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-950">Ser la empresa de seguridad más confiable y respetada del Perú</span>, reconocida internacionalmente por nuestra innovación constante, profesionalismo excepcional y compromiso inquebrantable con la excelencia. Aspiramos a convertirmos en el <span className="font-semibold text-blue-600">socio estratégico de seguridad preferido</span> por las empresas y familias más exigentes, estableciendo nuevos estándares en la industria de protección integral.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
