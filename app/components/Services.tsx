const Services = () => {
  const services = [
    {
      id: 1,
      title: "Servicio de Seguridad",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Personal altamente capacitado para la protección de personas y bienes."
    },
    {
      id: 2,
      title: "Vigilancia Privada",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Servicios de vigilancia profesional para empresas y residencias."
    },
    {
      id: 3,
      title: "Escoltas Personales",
      image: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Protección personal especializada para ejecutivos y personalidades."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Principales Servicios
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
