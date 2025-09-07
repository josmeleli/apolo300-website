const Services = () => {
  const services = [
    {
      id: 1,
      title: "Seguridad Privada",
      image: "/images/servicio-de-seguridad-privada.webp",
      description: "Servicios de seguridad personalizada para residencias, oficinas y propiedades privadas con personal capacitado."
    },
    {
      id: 2,
      title: "Seguridad para Eventos",
      image: "/images/servicio-de-seguridad-para-eventos.webp",
      description: "Protección especializada para eventos corporativos, sociales y masivos con control de acceso profesional."
    },
    {
      id: 3,
      title: "Seguridad Corporativa",
      image: "/images/servicio-de-seguridad-corporativa.webp",
      description: "Soluciones integrales de seguridad para empresas con vigilancia ejecutiva y protección de instalaciones."
    },
    {
      id: 4,
      title: "Seguridad de Resguardo",
      image: "/images/servicio-de-seguridad-de-resguardo.webp",
      description: "Protección especializada para bienes, valores y custodia de mercancías con máxima seguridad."
    },
    {
      id: 5,
      title: "Seguridad de Prevención de Pérdidas",
      image: "/images/servicio-de-seguridad-de-prevención-de-perdidas.webp",
      description: "Servicios especializados en prevención de robos y pérdidas en comercios con vigilancia discreta."
    }
  ];

  return (
    <section className="pt-8 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Principales Servicios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors">
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
