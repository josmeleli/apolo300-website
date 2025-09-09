'use client';

import PageLayout from '../../components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function NuevasTecnologias() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Inicio</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span>›</span>
              <span className="text-gray-900">Nuevas Tecnologías en Seguridad Privada 2025</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header del artículo */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                DESTACADO
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Tecnología
              </span>
              <span className="text-gray-500 text-sm">15 Enero 2025</span>
              <span className="text-gray-500 text-sm">5 min lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nuevas Tecnologías en Seguridad Privada 2025
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubre las últimas innovaciones tecnológicas que están revolucionando el sector de la seguridad privada y cómo APOLO300 las implementa para brindar servicios de vanguardia.
            </p>
          </header>

          {/* Imagen principal */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://th.bing.com/th/id/R.31d8d711269fc94d40269978fe8f3cc4?rik=X3S5pFc7lBsOQg&pid=ImgRaw&r=0"
              alt="Nuevas Tecnologías en Seguridad Privada 2025"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-blue-900 font-medium">
                En APOLO300, nos mantenemos a la vanguardia de la innovación tecnológica para ofrecer servicios de seguridad privada de última generación que garantizan la máxima protección para nuestros clientes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Inteligencia Artificial en Videovigilancia</h2>
            <p className="text-gray-700 mb-6">
              La implementación de algoritmos de inteligencia artificial en nuestros sistemas de videovigilancia representa un salto cualitativo en la detección de amenazas. Estos sistemas pueden identificar comportamientos sospechosos, reconocer rostros en tiempo real y alertar automáticamente sobre situaciones de riesgo.
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Beneficios clave:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Detección automática de intrusos con 99.5% de precisión</li>
                <li>Reconocimiento facial en tiempo real</li>
                <li>Análisis predictivo de comportamientos</li>
                <li>Reducción de falsas alarmas en un 85%</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Drones de Seguridad Autónomos</h2>
            <p className="text-gray-700 mb-6">
              Los drones autónomos equipados con cámaras de alta resolución y sensores térmicos permiten realizar patrullajes aéreos eficientes, especialmente en áreas extensas como centros comerciales, instalaciones industriales y eventos masivos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Vigilancia Nocturna</h4>
                <p className="text-gray-600 text-sm">
                  Equipados con visión térmica para operaciones 24/7
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Respuesta Rápida</h4>
                <p className="text-gray-600 text-sm">
                  Despliegue inmediato en situaciones de emergencia
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sistemas de Control de Acceso Biométrico</h2>
            <p className="text-gray-700 mb-6">
              La integración de sistemas biométricos avanzados, incluyendo reconocimiento de huella dactilar, iris y reconocimiento facial 3D, garantiza un control de acceso infalible y completamente seguro.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comunicaciones Cifradas y IoT</h2>
            <p className="text-gray-700 mb-6">
              Nuestros equipos utilizan comunicaciones cifradas de grado militar y sensores IoT distribuidos que crean una red de seguridad inteligente capaz de detectar y responder a amenazas en tiempo real.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">💡 Innovación Constante</h3>
              <p className="text-yellow-700">
                En APOLO300 invertimos constantemente en I+D para mantenernos a la vanguardia tecnológica y ofrecer a nuestros clientes las soluciones más avanzadas del mercado.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">El Futuro de la Seguridad Privada</h2>
            <p className="text-gray-700 mb-6">
              Mirando hacia el futuro, estamos explorando tecnologías emergentes como la realidad aumentada para nuestros agentes, blockchain para registros de seguridad inmutables, y machine learning para análisis predictivo de riesgos.
            </p>

            <div className="bg-blue-950 text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">¿Interesado en nuestros servicios tecnológicos?</h3>
              <p className="mb-6">
                Contacta con nuestro equipo de expertos para conocer cómo podemos implementar estas tecnologías en tu empresa.
              </p>
              <Link 
                href="/contacto" 
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block"
              >
                Solicitar Consulta Gratuita
              </Link>
            </div>
          </div>

          {/* Navegación de artículos */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex justify-between items-center">
              <Link 
                href="/blog" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                ← Volver al Blog
              </Link>
              <div className="flex space-x-4">
                <Link 
                  href="/blog/protocolos-seguridad-centros-comerciales"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Siguiente artículo →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
