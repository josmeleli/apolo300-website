"use client"

import Hero from './components/Hero'
import Services from './components/Services'
import PageLayout from './components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <PageLayout>
      <main>
        <Hero />
        <Services />
        
        {/* Sección de Fortalezas */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nuestras FORTALEZAS
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Logo */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <Image
                    src="/images/apolo300-logo-footer.webp"
                    alt="APOLO300 Logo"
                    width={500}
                    height={350}
                    className="mx-auto"
                  />
                </div>
                <div className="text-center">
                  <Link
                    href="/unete-a-nosotros"
                    className="inline-block bg-blue-950 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors"
                  >
                    TRABAJA CON NOSOTROS
                  </Link>
                </div>
              </div>

              {/* Fortalezas */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-blue-900 text-4xl">🛡️</span>
                  </div>
                  <div className="text-blue-900 text-lg font-bold">Personal Altamente Calificado</div>
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-blue-900 text-4xl">🏢</span>
                  </div>
                  <div className="text-blue-900 text-lg font-bold">Miembros de la Sociedad Nacional de Seguridad</div>
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-blue-900 text-4xl">📖</span>
                  </div>
                  <div className="text-blue-900 text-lg font-bold">Capacitación permanente a nuestros colaboradores</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section className="py-16 bg-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Solicita una Cotización
              </h2>
              <p className="text-xl text-blue-200">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Nombre Completo *"
                />

                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Empresa"
                />

                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Teléfono *"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Email *"
                />
              </div>

              <select
                id="servicio"
                name="servicio"
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                <option value="">Selecciona un servicio</option>
                <option value="seguridad-privada">Seguridad Privada</option>
                <option value="seguridad-eventos">Seguridad para Eventos</option>
                <option value="seguridad-corporativa">Seguridad Corporativa</option>
                <option value="seguridad-resguardo">Seguridad de Resguardo</option>
                <option value="prevencion-perdidas">Prevención de Pérdidas</option>
              </select>

              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Describe tus necesidades de seguridad... *"
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-400 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
                >
                  ENVIAR SOLICITUD
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
