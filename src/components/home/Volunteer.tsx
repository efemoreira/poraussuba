'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Obrigado por se voluntariar! Entraremos em contato em breve.');
    // Limpar formulário após envio
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="relative w-full my-[45px] bg-black/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Volunteer Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-[45px] px-4 lg:px-[60px] lg:pb-[15px]"
          >
            <div className="max-w-[700px] mb-[30px]">
              <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">Seja Voluntário</p>
              <h2 className="text-3xl lg:text-[45px] font-bold text-white">Faça a diferença sendo um voluntário hoje</h2>
            </div>
            
            <div className="text-white text-lg mb-6">
              <p>
                Nossos voluntários são a espinha dorsal da nossa organização. 
                Seja ajudando em eventos, participando de ações sociais, oferecendo serviços 
                profissionais ou contribuindo com seu tempo e talento, cada voluntário é 
                fundamental para ampliarmos nosso alcance e impacto.
              </p>
              <p className="mt-4">
                Junte-se a nós e faça parte de uma rede de pessoas comprometidas em transformar vidas. 
                Você pode dedicar apenas algumas horas por semana ou se envolver em projetos específicos 
                de acordo com sua disponibilidade e habilidades.
              </p>
              <p className="mt-4">
                Preencha o formulário ao lado para se cadastrar como voluntário, e entraremos 
                em contato para conversar sobre as melhores formas de você contribuir para nossa missão.
              </p>
            </div>
          </motion.div>
          
          {/* Volunteer Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="py-[90px] px-[30px] bg-primary"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[60px] text-white p-4 bg-transparent border border-white placeholder-white focus:outline-none" 
                  placeholder="Nome Completo"
                  required
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[60px] text-white p-4 bg-transparent border border-white placeholder-white focus:outline-none" 
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
                  className="w-full h-[60px] text-white p-4 bg-transparent border border-white placeholder-white focus:outline-none" 
                  placeholder="Área de Interesse"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[120px] text-white p-4 bg-transparent border border-white placeholder-white focus:outline-none resize-none" 
                  placeholder="Conte-nos sobre você, suas habilidades e disponibilidade"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-[15px] h-[60px] text-white border border-white hover:bg-white hover:text-primary transition-all"
              >
                Enviar Cadastro
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;