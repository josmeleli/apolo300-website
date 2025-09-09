'use client';

import PageLayout from '../../components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function ImportanciaCapacitacion() {
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
              <span className="text-gray-900">La Importancia de la Capacitación Continua</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header del artículo */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Formación
              </span>
              <span className="text-gray-500 text-sm">02 Enero 2024</span>
              <span className="text-gray-500 text-sm">4 min lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              La Importancia de la Capacitación Continua
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              En APOLO300 entendemos que la formación constante de nuestro personal es la clave para mantener los más altos estándares de seguridad y excelencia en el servicio.
            </p>
          </header>

          {/* Imagen principal */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
              alt="La Importancia de la Capacitación Continua"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <p className="text-amber-900 font-medium">
                Un agente de seguridad bien capacitado no solo protege vidas y propiedades, sino que también proyecta la imagen profesional y confiabilidad que nuestros clientes esperan de APOLO300.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por Qué la Capacitación Continua?</h2>
            <p className="text-gray-700 mb-6">
              El mundo de la seguridad privada evoluciona constantemente. Nuevas amenazas emergen, las tecnologías se actualizan y las regulaciones cambian. Por eso, en APOLO300 hemos hecho de la capacitación continua una piedra angular de nuestro modelo de negocio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  Competencias Actualizadas
                </h4>
                <p className="text-gray-600 text-sm">
                  Mantenemos a nuestro personal al día con las últimas técnicas, tecnologías y mejores prácticas del sector.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  Respuesta Efectiva
                </h4>
                <p className="text-gray-600 text-sm">
                  Personal capacitado significa respuestas más rápidas y efectivas ante cualquier situación de riesgo.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Programa de Capacitación</h2>
            <p className="text-gray-700 mb-6">
              En APOLO300 hemos desarrollado un programa integral de capacitación que abarca múltiples áreas y se adapta a las necesidades específicas de cada tipo de servicio que ofrecemos.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Módulos de Capacitación</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <div>
                      <h4 className="font-medium text-blue-900">Fundamentos de Seguridad</h4>
                      <p className="text-blue-700 text-sm">Principios básicos y marco legal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <div>
                      <h4 className="font-medium text-blue-900">Primeros Auxilios</h4>
                      <p className="text-blue-700 text-sm">Atención médica de emergencia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <div>
                      <h4 className="font-medium text-blue-900">Control de Acceso</h4>
                      <p className="text-blue-700 text-sm">Sistemas y protocolos de entrada</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <div>
                      <h4 className="font-medium text-blue-900">Tecnología de Seguridad</h4>
                      <p className="text-blue-700 text-sm">CCTV, alarmas y sistemas modernos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <div>
                      <h4 className="font-medium text-blue-900">Atención al Cliente</h4>
                      <p className="text-blue-700 text-sm">Trato profesional y comunicación</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <div>
                      <h4 className="font-medium text-blue-900">Gestión de Crisis</h4>
                      <p className="text-blue-700 text-sm">Manejo de situaciones de emergencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Metodología de Entrenamiento</h2>
            <p className="text-gray-700 mb-6">
              Utilizamos una combinación de métodos de aprendizaje que garantizan la asimilación efectiva de conocimientos y habilidades prácticas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="font-semibold text-purple-900 mb-2">Teoría</h4>
                <p className="text-purple-700 text-sm">Fundamentos conceptuales y marco normativo</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h4 className="font-semibold text-green-900 mb-2">Simulación</h4>
                <p className="text-green-700 text-sm">Escenarios reales de entrenamiento</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="font-semibold text-orange-900 mb-2">Práctica</h4>
                <p className="text-orange-700 text-sm">Aplicación en entornos reales controlados</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certificaciones y Acreditaciones</h2>
            <p className="text-gray-700 mb-6">
              Todos nuestros agentes obtienen certificaciones reconocidas a nivel nacional e internacional, garantizando que cumplan con los más altos estándares profesionales.
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Certificaciones que otorgamos:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>Certificación en Seguridad Privada</li>
                <li>Primeros Auxilios y RCP</li>
                <li>Manejo de Sistemas de Seguridad</li>
                <li>Atención al Cliente Especializada</li>
                <li>Prevención de Riesgos Laborales</li>
                <li>Comunicación Profesional</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Evaluación y Mejora Continua</h2>
            <p className="text-gray-700 mb-6">
              Implementamos un sistema de evaluación continua que nos permite identificar áreas de mejora y adaptar nuestros programas de capacitación a las necesidades cambiantes del sector.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">💪 Nuestro Compromiso</h3>
              <p className="text-yellow-700">
                En APOLO300 invertimos más del 15% de nuestro presupuesto anual en capacitación y desarrollo profesional, porque creemos que un equipo bien preparado es la mejor garantía de un servicio excepcional.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resultados Tangibles</h2>
            <p className="text-gray-700 mb-6">
              La inversión en capacitación continua se refleja directamente en la calidad de nuestros servicios y la satisfacción de nuestros clientes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
                <p className="text-blue-700 text-sm">Retención de personal</p>
              </div>
              <div className="bg-white border-2 border-green-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                <p className="text-green-700 text-sm">Satisfacción cliente</p>
              </div>
              <div className="bg-white border-2 border-purple-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">90%</div>
                <p className="text-purple-700 text-sm">Reducción incidentes</p>
              </div>
              <div className="bg-white border-2 border-orange-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                <p className="text-orange-700 text-sm">Personal certificado</p>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">¿Interesado en formar parte de nuestro equipo?</h3>
              <p className="mb-6">
                Únete a APOLO300 y accede a nuestro programa de capacitación continua que te permitirá crecer profesionalmente.
              </p>
              <Link 
                href="/unete-a-nosotros" 
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block"
              >
                Únete a Nuestro Equipo
              </Link>
            </div>
          </div>

          {/* Navegación de artículos */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex justify-between items-center">
              <Link 
                href="/blog/protocolos-seguridad-centros-comerciales"
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
              <Link 
                href="/blog/tendencias-videovigilancia-inteligente"
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                Siguiente artículo →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
