import PageLayout from '../components/PageLayout'

export default function Servicios() {
  const services = [
    {
      id: 1,
      title: "Seguridad Privada",
      image: "/images/servicio-de-seguridad-privada.webp",
      description: "Servicios de seguridad personalizada para residencias, oficinas y propiedades privadas con personal capacitado las 24 horas del día.",
      features: ["Vigilancia 24/7", "Personal certificado", "Sistemas de comunicación", "Informes detallados"]
    },
    {
      id: 2,
      title: "Seguridad para Eventos",
      image: "/images/servicio-de-seguridad-para-eventos.webp",
      description: "Protección especializada para eventos corporativos, sociales y masivos con control de acceso profesional y manejo de multitudes.",
      features: ["Control de acceso", "Manejo de multitudes", "Coordinación logística", "Personal especializado"]
    },
    {
      id: 3,
      title: "Seguridad Corporativa",
      image: "/images/servicio-de-seguridad-corporativa.webp",
      description: "Soluciones integrales de seguridad para empresas con vigilancia ejecutiva y protección de instalaciones empresariales.",
      features: ["Vigilancia ejecutiva", "Protección de instalaciones", "Control de personal", "Sistemas integrados"]
    },
    {
      id: 4,
      title: "Seguridad de Resguardo",
      image: "/images/servicio-de-seguridad-de-resguardo.webp",
      description: "Protección especializada para bienes, valores y custodia de mercancías con los más altos estándares de seguridad.",
      features: ["Custodia de valores", "Transporte seguro", "Almacenamiento protegido", "Seguimiento GPS"]
    },
    {
      id: 5,
      title: "Seguridad de Prevención de Pérdidas",
      image: "/images/servicio-de-seguridad-de-prevención-de-perdidas.webp",
      description: "Servicios especializados en prevención de robos y pérdidas en comercios y almacenes con vigilancia discreta y efectiva.",
      features: ["Vigilancia discreta", "Análisis de riesgos", "Capacitación preventiva", "Monitoreo continuo"]
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              NUESTROS SERVICIOS
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Soluciones integrales de seguridad para cada necesidad
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <h2 className="text-3xl font-bold text-blue-950 mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-blue-950">Características principales:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-yellow-500 mr-3">✓</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-6 bg-yellow-400 text-black px-8 py-3 rounded font-bold hover:bg-yellow-300 transition-colors">
                      Solicitar Cotización
                    </button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="h-96 overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
