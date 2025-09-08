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
      </main>
    </PageLayout>
  );
}
