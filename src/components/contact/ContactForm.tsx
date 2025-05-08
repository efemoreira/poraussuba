'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import defaultData from '@/data/default/contactFormData';
import type { ContactFormData, ContactFormField } from '@/data/default/contactFormData';

interface ContactFormProps {
  data?: ContactFormData;
}

const ContactForm = ({ data = defaultData }: ContactFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSubmitting(true);
    setError('');
    
    // Simulando uma submissão de formulário
    try {
      // Em uma aplicação real, aqui seria feita uma requisição para o backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulando uma resposta bem-sucedida
      setSuccess(true);
      setFormData({});
    } catch {
      setError(data.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const renderField = (field: ContactFormField) => {
    if (field.type === 'textarea') {
      return (
        <div className="mb-4" key={field.id}>
          <label htmlFor={field.id} className="block mb-1 text-textDark">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          <textarea 
            id={field.id}
            value={formData[field.id] || ''}
            onChange={handleChange}
            rows={field.rows || 6}
            className="w-full p-4 border border-gray-200 focus:outline-none focus:border-primary resize-none" 
            placeholder={field.placeholder}
            required={field.required}
          ></textarea>
        </div>
      );
    }
    
    return (
      <div className="mb-4" key={field.id}>
        <label htmlFor={field.id} className="block mb-1 text-textDark">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        <input 
          type={field.type} 
          id={field.id}
          value={formData[field.id] || ''}
          onChange={handleChange}
          className="w-full p-4 border border-gray-200 focus:outline-none focus:border-primary" 
          placeholder={field.placeholder}
          required={field.required}
        />
      </div>
    );
  };

  return (
    <section className="relative w-full py-[45px]">
      <div className="container mx-auto px-4 lg:px-[60px]">
        <div className="max-w-[700px] mx-auto text-center mb-10">
          <h2 className="text-3xl lg:text-[45px] font-bold text-textDark mb-4">{data.title}</h2>
          <p className="text-text">{data.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações de contato */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="bg-light p-6 h-full">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <div className="text-primary mr-3">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <p>{data.contactInfo.address}</p>
                </div>
                
                <div className="flex items-start mb-3">
                  <div className="text-primary mr-3">
                    <FaPhoneAlt size={24} />
                  </div>
                  <p>{data.contactInfo.phone}</p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-3">
                    <FaEnvelope size={24} />
                  </div>
                  <p>{data.contactInfo.email}</p>
                </div>
              </div>
              
              {data.contactInfo.mapEmbedUrl && (
                <div className="w-full h-[250px] mt-6">
                  <iframe 
                    src={data.contactInfo.mapEmbedUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
          
          {/* Formulário de contato */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-light p-6">
              {success ? (
                <div className="text-center py-8">
                  <div className="text-primary text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-textDark mb-4">Mensagem Enviada!</h3>
                  <p className="mb-6">{data.successMessage}</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 bg-primary text-white hover:bg-secondary transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.fields.slice(0, 2).map(field => (
                      <div key={field.id}>{renderField(field)}</div>
                    ))}
                  </div>
                  
                  {data.fields.slice(2).map(renderField)}
                  
                  {error && (
                    <div className="mb-4 text-red-500 text-sm">{error}</div>
                  )}
                  
                  <button 
                    type="submit"
                    disabled={submitting}
                    className={`w-full py-4 text-white bg-primary hover:bg-secondary transition-colors ${
                      submitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {submitting ? 'Enviando...' : data.submitButtonText}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;