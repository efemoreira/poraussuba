'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch {
      setError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-[45px]">
      <div className="container mx-auto px-4 lg:px-[60px]">
        <div className="relative w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Image 
              src="/img/contact.jpg" 
              alt="Entre em contato" 
              width={1200} 
              height={440}
              className="w-full h-[440px] object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[700px] mx-auto -mt-[220px] p-[30px] bg-light"
          >
            {success ? (
              <div className="text-center py-8">
                <div className="text-primary text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-textDark mb-4">Mensagem Enviada!</h3>
                <p className="mb-6">Obrigado por entrar em contato. Responderemos em breve!</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-6 py-3 bg-primary text-white hover:bg-secondary transition-colors"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 focus:outline-none focus:border-primary" 
                    placeholder="Seu Nome"
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 focus:outline-none focus:border-primary" 
                    placeholder="Seu Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 focus:outline-none focus:border-primary" 
                    placeholder="Assunto"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-4 border border-gray-200 focus:outline-none focus:border-primary resize-none" 
                    placeholder="Sua Mensagem"
                    required
                  ></textarea>
                </div>
                
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
                  {submitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;