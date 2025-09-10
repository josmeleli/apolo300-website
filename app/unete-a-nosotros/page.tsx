'use client';

import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { sendJobEmail, type JobFormData, isValidEmail, isValidPhone } from '../utils/emailService';

export default function UneteANosotros() {
  const [formData, setFormData] = useState<JobFormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<JobFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<JobFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Por favor ingresa un teléfono válido';
    }

    if (!formData.position.trim()) {
      newErrors.position = 'Por favor selecciona un puesto';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'Por favor selecciona tu experiencia';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar errores cuando el usuario comience a escribir
    if (errors[name as keyof JobFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendJobEmail(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending job application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
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
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-green-800 font-medium">¡Solicitud enviada exitosamente! Revisaremos tu perfil y nos contactaremos contigo pronto.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <p className="text-red-800 font-medium">Error al enviar la solicitud. Por favor, inténtalo de nuevo.</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+51 999 999 999"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="tu.email@ejemplo.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Puesto de Interés *
                  </label>
                  <select 
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
                      errors.position ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecciona un puesto</option>
                    <option value="guardia-seguridad">Guardia de Seguridad</option>
                    <option value="supervisor-seguridad">Supervisor de Seguridad</option>
                    <option value="operador-central">Operador de Central de Alarmas</option>
                    <option value="tecnico-electronico">Técnico en Sistemas Electrónicos</option>
                    <option value="vigilante">Vigilante</option>
                    <option value="jefe-operaciones">Jefe de Operaciones</option>
                    <option value="administrativo">Personal Administrativo</option>
                  </select>
                  {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experiencia en Seguridad *
                  </label>
                  <select 
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
                      errors.experience ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecciona tu experiencia</option>
                    <option value="sin-experiencia">Sin experiencia</option>
                    <option value="1-2-años">1-2 años</option>
                    <option value="3-5-años">3-5 años</option>
                    <option value="mas-5-años">Más de 5 años</option>
                    <option value="experiencia-militar">Experiencia militar/policial</option>
                  </select>
                  {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Por qué quieres unirte a APOLO300? *
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Cuéntanos sobre tu motivación, disponibilidad horaria, y qué puedes aportar a nuestro equipo..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-yellow-400 text-black hover:bg-yellow-300'
                  }`}
                >
                  {isSubmitting ? 'Enviando Solicitud...' : 'Enviar Solicitud'}
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