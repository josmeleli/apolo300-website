import * as emailjs from '@emailjs/browser';

// Tipos para los formularios
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface JobFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
}

// Validaciones
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  // Acepta formatos como: +51 999 999 999, 999-999-999, 999999999, etc.
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,}$/;
  return phoneRegex.test(phone.trim());
};

// Configuración de EmailJS
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID_CONTACT = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT || '';
const EMAILJS_TEMPLATE_ID_JOB = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_JOBS || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

// Inicializar EmailJS
const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
};

// Función para enviar email de contacto
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  initEmailJS();
  
  // Debug: verificar variables de entorno
  console.log('EmailJS Config:', {
    serviceId: EMAILJS_SERVICE_ID ? 'Set' : 'Missing',
    templateId: EMAILJS_TEMPLATE_ID_CONTACT ? 'Set' : 'Missing',
    publicKey: EMAILJS_PUBLIC_KEY ? 'Set' : 'Missing'
  });
  
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_CONTACT || !EMAILJS_PUBLIC_KEY) {
    const missingVars = [];
    if (!EMAILJS_SERVICE_ID) missingVars.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
    if (!EMAILJS_TEMPLATE_ID_CONTACT) missingVars.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT');
    if (!EMAILJS_PUBLIC_KEY) missingVars.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
    
    throw new Error(`EmailJS no está configurado correctamente. Variables faltantes: ${missingVars.join(', ')}`);
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service: formData.service,
    message: formData.message,
    to_name: 'APOLO300',
  };

  console.log('Template params:', templateParams);

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('EmailJS response:', response);
    
    if (response.status !== 200) {
      throw new Error(`Error al enviar email: ${response.text}`);
    }
  } catch (error) {
    console.error('Error enviando email de contacto:', error);
    console.error('Error type:', typeof error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    throw error;
  }
};

// Función para enviar email de solicitud de empleo
export const sendJobEmail = async (formData: JobFormData): Promise<void> => {
  initEmailJS();
  
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_JOB || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS no está configurado correctamente. Verifica las variables de entorno.');
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    position: formData.position,
    experience: formData.experience,
    message: formData.message,
    to_name: 'APOLO300 - Recursos Humanos',
  };

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_JOB,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    if (response.status !== 200) {
      throw new Error(`Error al enviar email: ${response.text}`);
    }
  } catch (error) {
    console.error('Error enviando email de solicitud de empleo:', error);
    throw error;
  }
};
