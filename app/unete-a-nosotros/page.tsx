'use client';

import PageLayout from '../components/PageLayout';

export default function UneteANosotros() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
              ÚNETE A NOSOTROS
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Forma parte del equipo APOLO300. Oportunidades de crecimiento profesional
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Aplicación */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Solicitud de Empleo
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cédula de Identidad *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Número de cédula"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+58 412 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección Completa *
                  </label>
                  <textarea 
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu dirección completa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo de Interés *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un cargo</option>
                    <option value="vigilante">Vigilante</option>
                    <option value="supervisor">Supervisor de Seguridad</option>
                    <option value="coordinador">Coordinador de Operaciones</option>
                    <option value="tecnico">Técnico en Sistemas de Seguridad</option>
                    <option value="administrativo">Personal Administrativo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experiencia Previa en Seguridad
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe tu experiencia en el sector seguridad, empresas anteriores, tiempo de servicio, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Disponibilidad Horaria
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Turno Diurno (6:00 AM - 6:00 PM)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Turno Nocturno (6:00 PM - 6:00 AM)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Fines de Semana</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Disponibilidad Completa</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Información Adicional
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cualquier información adicional que consideres relevante..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>

            {/* Información sobre Trabajar con Nosotros */}
            <div className="space-y-8">
              {/* Por qué Trabajar con APOLO300 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  ¿Por qué trabajar con APOLO300?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Estabilidad Laboral</h3>
                      <p className="text-gray-600">Contratos estables con empresas reconocidas que garantizan continuidad laboral.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Formación Continua</h3>
                      <p className="text-gray-600">Programas de capacitación y actualización en técnicas de seguridad modernas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Beneficios Competitivos</h3>
                      <p className="text-gray-600">Paquete de beneficios que incluye seguro médico, bonificaciones y más.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Crecimiento Profesional</h3>
                      <p className="text-gray-600">Oportunidades de ascenso y desarrollo de carrera dentro de la empresa.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Ambiente de Trabajo</h3>
                      <p className="text-gray-600">Equipo profesional comprometido con la excelencia en el servicio.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proceso de Selección */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Proceso de Selección
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Solicitud</h3>
                      <p className="text-gray-600">Envía tu solicitud a través de este formulario.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Revisión</h3>
                      <p className="text-gray-600">Nuestro equipo de RRHH evaluará tu perfil.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Entrevista</h3>
                      <p className="text-gray-600">Entrevista personal y evaluación de competencias.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Capacitación</h3>
                      <p className="text-gray-600">Programa de inducción y entrenamiento.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Incorporación</h3>
                      <p className="text-gray-600">Asignación a puesto de trabajo y inicio de labores.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}