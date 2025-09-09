'use client';

import PageLayout from '../../components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function TendenciasVideovigilancia() {
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
              <span className="text-gray-900">Tendencias en Videovigilancia Inteligente</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header del artículo */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Tecnología
              </span>
              <span className="text-gray-500 text-sm">28 Diciembre 2023</span>
              <span className="text-gray-500 text-sm">6 min lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tendencias en Videovigilancia Inteligente
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Explora cómo la inteligencia artificial y las tecnologías emergentes están revolucionando los sistemas de videovigilancia y cómo APOLO300 lidera esta transformación.
            </p>
          </header>

          {/* Imagen principal */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&crop=center"
              alt="Tendencias en Videovigilancia Inteligente"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8">
              <p className="text-indigo-900 font-medium">
                La videovigilancia ha evolucionado de simples cámaras de grabación a sistemas inteligentes capaces de analizar, interpretar y responder autónomamente a las situaciones que detectan.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">La Revolución de la IA en Videovigilancia</h2>
            <p className="text-gray-700 mb-6">
              Los sistemas de videovigilancia modernos han dejado de ser herramientas pasivas de grabación para convertirse en asistentes inteligentes que pueden identificar patrones, reconocer objetos y personas, y tomar decisiones en tiempo real.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">🧠</span>
                  Análisis Comportamental
                </h4>
                <p className="text-blue-700 text-sm">
                  Los algoritmos pueden detectar comportamientos anómalos y predecir posibles incidentes antes de que ocurran.
                </p>
              </div>
              <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                  <span className="text-2xl mr-3">👁️</span>
                  Reconocimiento Facial
                </h4>
                <p className="text-green-700 text-sm">
                  Identificación instantánea de personas en listas de búsqueda o control de acceso automatizado.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías Emergentes en APOLO300</h2>
            <p className="text-gray-700 mb-6">
              En APOLO300 hemos implementado las tecnologías más avanzadas para ofrecer a nuestros clientes sistemas de videovigilancia de última generación.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">🚀 Innovaciones Implementadas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mt-1.5"></div>
                    <div>
                      <h4 className="font-medium text-purple-900">Cámaras 4K Ultra HD</h4>
                      <p className="text-purple-700 text-sm">Calidad de imagen excepcional para identificación precisa</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mt-1.5"></div>
                    <div>
                      <h4 className="font-medium text-purple-900">Visión Nocturna Avanzada</h4>
                      <p className="text-purple-700 text-sm">Tecnología infrarroja y starlight para vigilancia 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mt-1.5"></div>
                    <div>
                      <h4 className="font-medium text-purple-900">Audio Inteligente</h4>
                      <p className="text-purple-700 text-sm">Detección de sonidos específicos como gritos o cristales rotos</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mt-1.5"></div>
                    <div>
                      <h4 className="font-medium text-blue-900">Almacenamiento en la Nube</h4>
                      <p className="text-blue-700 text-sm">Backup automático y acceso remoto seguro</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mt-1.5"></div>
                    <div>
                      <h4 className="font-medium text-blue-900">Análisis de Tráfico</h4>
                      <p className="text-blue-700 text-sm">Conteo y análisis de flujo de personas y vehículos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mt-1.5"></div>
                    <div>
                      <h4 className="font-medium text-blue-900">Alertas Inteligentes</h4>
                      <p className="text-blue-700 text-sm">Notificaciones instantáneas vía móvil y email</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Detección de Objetos y Situaciones</h2>
            <p className="text-gray-700 mb-6">
              Los sistemas inteligentes pueden identificar y clasificar objetos específicos, desde vehículos hasta objetos abandonados, proporcionando alertas contextuales precisas.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🚗</div>
                <h5 className="font-medium text-gray-900 text-sm">Vehículos</h5>
                <p className="text-gray-600 text-xs">Detección y clasificación</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">👥</div>
                <h5 className="font-medium text-gray-900 text-sm">Multitudes</h5>
                <p className="text-gray-600 text-xs">Análisis de densidad</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📦</div>
                <h5 className="font-medium text-gray-900 text-sm">Objetos</h5>
                <p className="text-gray-600 text-xs">Abandonados o sospechosos</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔥</div>
                <h5 className="font-medium text-gray-900 text-sm">Incendios</h5>
                <p className="text-gray-600 text-xs">Detección temprana</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Integración con Otros Sistemas</h2>
            <p className="text-gray-700 mb-6">
              La verdadera potencia de la videovigilancia inteligente se manifiesta cuando se integra con otros sistemas de seguridad, creando un ecosistema de protección completo.
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Integraciones Disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                  <h4 className="font-medium text-orange-900 mb-2">Control de Acceso</h4>
                  <p className="text-orange-700 text-sm">Verificación visual automática de identificaciones</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                  <h4 className="font-medium text-green-900 mb-2">Sistemas de Alarma</h4>
                  <p className="text-green-700 text-sm">Activación automática basada en eventos detectados</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                  <h4 className="font-medium text-blue-900 mb-2">Iluminación</h4>
                  <p className="text-blue-700 text-sm">Control automático según detección de movimiento</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Beneficios para Diferentes Sectores</h2>
            <p className="text-gray-700 mb-6">
              La videovigilancia inteligente se adapta a las necesidades específicas de cada sector, proporcionando soluciones personalizadas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3">🏪 Retail</h4>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• Prevención de hurtos con análisis de comportamiento</li>
                  <li>• Análisis de tráfico de clientes</li>
                  <li>• Optimización de layout de tienda</li>
                  <li>• Verificación de transacciones</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3">🏭 Industrial</h4>
                <ul className="text-green-700 text-sm space-y-2">
                  <li>• Monitoreo de cumplimiento de seguridad</li>
                  <li>• Detección de equipos de protección</li>
                  <li>• Análisis de procesos productivos</li>
                  <li>• Prevención de accidentes laborales</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">El Futuro de la Videovigilancia</h2>
            <p className="text-gray-700 mb-6">
              Las tendencias futuras apuntan hacia sistemas aún más inteligentes y autónomos, con capacidades predictivas avanzadas y integración total con ciudades inteligentes.
            </p>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">🔮 Próximas Innovaciones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-indigo-700">
                <div>
                  <h4 className="font-medium mb-2">Realidad Aumentada</h4>
                  <p className="text-sm">Superposición de información contextual en tiempo real</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Edge Computing</h4>
                  <p className="text-sm">Procesamiento local para respuesta instantánea</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">5G Integration</h4>
                  <p className="text-sm">Transmisión ultra-rápida de video 4K/8K</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">IoT Convergence</h4>
                  <p className="text-sm">Integración total con dispositivos inteligentes</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">ROI y Beneficios Cuantificables</h2>
            <p className="text-gray-700 mb-6">
              La inversión en videovigilancia inteligente genera retornos medibles a través de la reducción de pérdidas, optimización operativa y mejora de la seguridad.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border-2 border-red-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">75%</div>
                <p className="text-red-700 text-sm">Reducción en robos</p>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">60%</div>
                <p className="text-blue-700 text-sm">Menos falsas alarmas</p>
              </div>
              <div className="bg-white border-2 border-green-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">40%</div>
                <p className="text-green-700 text-sm">Ahorro en personal</p>
              </div>
              <div className="bg-white border-2 border-purple-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
                <p className="text-purple-700 text-sm">Precisión detección</p>
              </div>
            </div>

            <div className="bg-blue-950 text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">¿Listo para modernizar tu sistema de videovigilancia?</h3>
              <p className="mb-6">
                Nuestros expertos pueden evaluar tus necesidades y diseñar un sistema de videovigilancia inteligente personalizado.
              </p>
              <Link 
                href="/contacto" 
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block"
              >
                Solicitar Demostración
              </Link>
            </div>
          </div>

          {/* Navegación de artículos */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex justify-between items-center">
              <Link 
                href="/blog/importancia-capacitacion-continua"
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                ← Artículo anterior
              </Link>
              <Link 
                href="/blog" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                Volver al Blog
              </Link>
              <div className="text-gray-400 text-sm">
                Último artículo
              </div>
            </div>
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
