'use client';

import PageLayout from '../../components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function ProtocolosSeguridad() {
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
              <span className="text-gray-900">Protocolos de Seguridad en Centros Comerciales</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header del artículo */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Protocolos
              </span>
              <span className="text-gray-500 text-sm">08 Enero 2024</span>
              <span className="text-gray-500 text-sm">7 min lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Protocolos de Seguridad en Centros Comerciales
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Una guía completa sobre los procedimientos y mejores prácticas que APOLO300 implementa para garantizar la seguridad integral en espacios comerciales de alto tráfico.
            </p>
          </header>

          {/* Imagen principal */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop&crop=center"
              alt="Protocolos de Seguridad en Centros Comerciales"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
              <p className="text-green-900 font-medium">
                Los centros comerciales requieren estrategias de seguridad especializadas debido a su alta afluencia de personas, diversidad de establecimientos y múltiples puntos de acceso. En APOLO300 hemos desarrollado protocolos específicos para estos entornos complejos.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Análisis de Riesgos Específicos</h2>
            <p className="text-gray-700 mb-6">
              Cada centro comercial presenta características únicas que requieren un análisis detallado. Nuestro equipo evalúa factores como ubicación geográfica, perfil socioeconómico del área, horarios de operación y eventos especiales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏪</div>
                <h4 className="font-semibold text-gray-900 mb-2">Zonas Comerciales</h4>
                <p className="text-gray-600 text-sm">Protección de tiendas y áreas de venta</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🍽️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Áreas de Comida</h4>
                <p className="text-gray-600 text-sm">Vigilancia en patios de comida y restaurantes</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🚗</div>
                <h4 className="font-semibold text-gray-900 mb-2">Estacionamientos</h4>
                <p className="text-gray-600 text-sm">Seguridad vehicular y peatonal</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Protocolos de Prevención de Pérdidas</h2>
            <p className="text-gray-700 mb-6">
              La prevención de hurtos y robos requiere una estrategia multicapa que combina presencia física, tecnología de vigilancia y coordinación con el personal del centro comercial.
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Estrategias implementadas:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Patrullajes aleatorios e impredecibles</li>
                <li>Vigilancia discreta en puntos críticos</li>
                <li>Coordinación con sistemas de CCTV</li>
                <li>Protocolos de seguimiento de sospechosos</li>
                <li>Capacitación del personal comercial</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestión de Emergencias y Evacuación</h2>
            <p className="text-gray-700 mb-6">
              Los centros comerciales requieren planes de evacuación específicos que consideren la alta densidad de personas y la complejidad arquitectónica del espacio.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 Protocolos de Emergencia</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-red-700">
                <div>
                  <h4 className="font-medium mb-2">Incendios</h4>
                  <p className="text-sm">Activación inmediata de alarmas y dirección de evacuación por rutas seguras</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Amenazas de Bomba</h4>
                  <p className="text-sm">Protocolos de búsqueda y evacuación coordinada con autoridades</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Disturbios</h4>
                  <p className="text-sm">Contención y control de multitudes con mínimo riesgo</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Emergencias Médicas</h4>
                  <p className="text-sm">Primeros auxilios y coordinación con servicios de emergencia</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Control de Acceso y Horarios</h2>
            <p className="text-gray-700 mb-6">
              La gestión de accesos antes, durante y después del horario comercial es fundamental para mantener la seguridad del centro comercial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Horario Comercial</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Vigilancia en todas las entradas principales</li>
                  <li>• Monitoreo de áreas comunes</li>
                  <li>• Patrullajes regulares por locales</li>
                  <li>• Atención inmediata a incidentes</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3">Fuera de Horario</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Control estricto de acceso de personal</li>
                  <li>• Rondas de seguridad cada 30 minutos</li>
                  <li>• Activación de sistemas de alarma</li>
                  <li>• Coordinación con empresas de limpieza</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnología Integrada</h2>
            <p className="text-gray-700 mb-6">
              La combinación de presencia humana y tecnología avanzada maximiza la efectividad de nuestros protocolos de seguridad.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Herramientas Tecnológicas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">📹</div>
                  <p className="text-blue-700 text-sm font-medium">CCTV HD</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="text-blue-700 text-sm font-medium">Apps Móviles</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🔊</div>
                  <p className="text-blue-700 text-sm font-medium">Comunicación</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-blue-700 text-sm font-medium">Sensores</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resultados y Beneficios</h2>
            <p className="text-gray-700 mb-6">
              La implementación de nuestros protocolos ha demostrado resultados excepcionales en la reducción de incidentes y mejora de la percepción de seguridad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-100 border border-green-300 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">85%</div>
                <p className="text-green-700 text-sm">Reducción en hurtos</p>
              </div>
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">95%</div>
                <p className="text-blue-700 text-sm">Satisfacción cliente</p>
              </div>
              <div className="bg-purple-100 border border-purple-300 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-700 mb-2">99%</div>
                <p className="text-purple-700 text-sm">Tiempo respuesta</p>
              </div>
            </div>

            <div className="bg-blue-950 text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">¿Necesitas seguridad para tu centro comercial?</h3>
              <p className="mb-6">
                Nuestros especialistas pueden diseñar un protocolo de seguridad personalizado para tu establecimiento.
              </p>
              <Link 
                href="/contacto" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Solicitar Evaluación Gratuita
              </Link>
            </div>
          </div>

          {/* Navegación de artículos */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex justify-between items-center">
              <Link 
                href="/blog/nuevas-tecnologias-en-seguridad-privada-2025"
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
                href="/blog/importancia-capacitacion-continua"
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
