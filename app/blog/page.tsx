'use client';

import PageLayout from '../components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  // Artículos de ejemplo para el blog
  const articles = [
    {
      id: 1,
      title: "Nuevas Tecnologías en Seguridad Privada 2025",
      excerpt: "Descubre las últimas innovaciones tecnológicas que están revolucionando el sector de la seguridad privada.",
      date: "15 Enero 2025",
      category: "Tecnología",
      readTime: "5 min",
      image: "https://th.bing.com/th/id/R.31d8d711269fc94d40269978fe8f3cc4?rik=X3S5pFc7lBsOQg&pid=ImgRaw&r=0",
      featured: true,
      slug: "nuevas-tecnologias-en-seguridad-privada-2025"
    },
    {
      id: 2,
      title: "Protocolos de Seguridad en Centros Comerciales",
      excerpt: "Guía completa sobre los procedimientos y mejores prácticas para la seguridad en espacios comerciales.",
      date: "08 Enero 2024",
      category: "Protocolos",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop&crop=center",
      slug: "protocolos-seguridad-centros-comerciales"
    },
    {
      id: 3,
      title: "La Importancia de la Capacitación Continua",
      excerpt: "Por qué la formación constante es clave para mantener altos estándares de seguridad.",
      date: "02 Enero 2024",
      category: "Formación",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      slug: "importancia-capacitacion-continua"
    },
    {
      id: 4,
      title: "Tendencias en Videovigilancia Inteligente",
      excerpt: "Cómo la inteligencia artificial está transformando los sistemas de videovigilancia modernos.",
      date: "28 Diciembre 2023",
      category: "Tecnología",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&crop=center",
      slug: "tendencias-videovigilancia-inteligente"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-400">
              BLOG APOLO300
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Mantente informado sobre las últimas tendencias en seguridad privada
            </p>
          </div>
        </section>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium w-fit inline-block"
                  >
                    Leer Artículo Completo
                  </Link>
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
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Leer más →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
