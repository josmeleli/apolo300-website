import PageLayout from '../components/PageLayout'
import Services from '../components/Services'

export default function ServiciosPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              NUESTROS SERVICIOS
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Soluciones integrales de seguridad para todas tus necesidades
            </p>
          </div>
        </section>

        {/* Services Component */}
        <Services />
      </div>
    </PageLayout>
  )
}
