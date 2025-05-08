'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import defaultVolunteerData, { VolunteerData } from '@/data/default/volunteerData';

interface VolunteerSectionProps {
  data?: VolunteerData;
}

const VolunteerSection = ({ 
  data = defaultVolunteerData,
}: VolunteerSectionProps) => {
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
    alert(data.formSuccessMessage);
    // Limpar formulário após envio
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  // Referência para a seção de parallax
  const sectionRef = useRef(null);
  
  // Configuração do efeito parallax com framer-motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transforma o valor de scroll em movimento vertical para a imagem
  const imageY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section ref={sectionRef} className="relative w-full my-[45px] overflow-hidden">
      {/* Imagem de fundo com parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute w-full h-full"
          style={{ y: imageY }}
        >
          <Image
            src={data.backgroundImage}
            alt={data.title}
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>
      
      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Volunteer Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-[45px] px-4 lg:px-[60px] lg:pb-[15px]"
          >
            <div className="max-w-[700px] mb-[30px]">
              <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">{data.title}</p>
              <h2 className="text-3xl lg:text-[45px] font-bold text-white">{data.subtitle}</h2>
            </div>
            
            <div className="text-white text-lg mb-6">
              {data.description.map((paragraph, index) => (
                <p key={index} className={index > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))}
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
                  placeholder={data.formPlaceholders.name}
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
                  placeholder={data.formPlaceholders.email}
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
                  placeholder={data.formPlaceholders.subject}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[120px] text-white p-4 bg-transparent border border-white placeholder-white focus:outline-none resize-none" 
                  placeholder={data.formPlaceholders.message}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-[15px] h-[60px] text-white border border-white hover:bg-white hover:text-primary transition-all"
              >
                {data.formLabels.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;