'use client';

import PageLayout from '../components/PageLayout';
import Image from 'next/image';

export default function Blog() {
  // Artículos de ejemplo para el blog
  const articles = [
    {
      id: 1,
      title: "Nuevas Tecnologías en Seguridad Privada 2024",
      excerpt: "Descubre las últimas innovaciones tecnológicas que están revolucionando el sector de la seguridad privada.",
      date: "15 Enero 2024",
      category: "Tecnología",
      readTime: "5 min",
      image: "/images/apolo300-logo.webp",
      featured: true
    },
    {
      id: 2,
      title: "Protocolos de Seguridad en Centros Comerciales",
      excerpt: "Guía completa sobre los procedimientos y mejores prácticas para la seguridad en espacios comerciales.",
      date: "08 Enero 2024",
      category: "Protocolos",
      readTime: "7 min",
      image: "/images/apolo300-logo.webp"
    },
    {
      id: 3,
      title: "La Importancia de la Capacitación Continua",
      excerpt: "Por qué la formación constante es clave para mantener altos estándares de seguridad.",
      date: "02 Enero 2024",
      category: "Formación",
      readTime: "4 min",
      image: "/images/apolo300-logo.webp"
    },
    {
      id: 4,
      title: "Tendencias en Videovigilancia Inteligente",
      excerpt: "Cómo la inteligencia artificial está transformando los sistemas de videovigilancia modernos.",
      date: "28 Diciembre 2023",
      category: "Tecnología",
      readTime: "6 min",
      image: "/images/apolo300-logo.webp"
    },
    {
      id: 5,
      title: "Seguridad Residencial: Consejos Prácticos",
      excerpt: "Recomendaciones esenciales para mejorar la seguridad en comunidades residenciales.",
      date: "20 Diciembre 2023",
      category: "Consejos",
      readTime: "8 min",
      image: "/images/apolo300-logo.webp"
    },
    {
      id: 6,
      title: "Control de Acceso: Sistemas Biométricos",
      excerpt: "Análisis de las ventajas y aplicaciones de los sistemas de control de acceso biométrico.",
      date: "15 Diciembre 2023",
      category: "Tecnología",
      readTime: "5 min",
      image: "/images/apolo300-logo.webp"
    }
  ];

  const categories = ["Todos", "Tecnología", "Protocolos", "Formación", "Consejos"];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              BLOG APOLO300
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Mantente informado sobre las últimas tendencias en seguridad privada
            </p>
          </div>
        </section>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtros por Categoría */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  category === "Todos" 
                    ? "bg-blue-600 text-white border-blue-600" 
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Artículo Destacado */}
          {articles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      DESTACADO
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <span className="text-gray-500 text-sm">{article.readTime} lectura</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {article.excerpt}
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium w-fit">
                    Leer Artículo Completo
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Grid de Artículos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{article.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Leer más →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-blue-600 rounded-lg p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Suscríbete a Nuestro Newsletter
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Recibe las últimas noticias, artículos y actualizaciones sobre seguridad 
              directamente en tu correo electrónico.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Suscribirse
              </button>
            </div>
          </div>

          {/* Categorías Populares */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Categorías Populares
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Tecnología", "Protocolos", "Formación", "Consejos"].map((category) => (
                <div key={category} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl">📋</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm">
                    {Math.floor(Math.random() * 20) + 5} artículos
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Paginación */}
          <div className="flex justify-center items-center gap-4 mt-16">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              ← Anterior
            </button>
            <div className="flex gap-2">
              {[1, 2, 3, "...", 8].map((page, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-lg transition-colors ${
                    page === 1 
                      ? "bg-blue-600 text-white" 
                      : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              Siguiente →
            </button>
          </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
