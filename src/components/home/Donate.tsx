'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import defaultData, { DonateData } from '@/data/default/donateData';

interface DonateSectionProps {
  data?: DonateData;
}

const DonateSection = ({ data = defaultData }: DonateSectionProps) => {
  const [selectedOption, setSelectedOption] = useState('Sim');
  const [formData, setFormData] = useState<Record<string, string>>({
    nome: '',
    telefone: '',
    endereco: '',
    bairro: '',
    cidade: 'Fortaleza',
    estado: 'Ceará',
  });
  // const [termsAccepted, setTermsAccepted] = useState(false);
  
  // Referência para a seção de parallax
  const sectionRef = useRef(null);
  
  // Configuração do efeito parallax com framer-motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transforma o valor de scroll em movimento vertical para a imagem
  const imageY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      nome: formData.nome,
      telefone: formData.telefone,
      endereco: formData.endereco,
      bairro: formData.bairro,
      cidade: formData.cidade,
      estado: formData.estado,
      opcaoAssinatura: selectedOption,
    };

    const Url = 'https://script.google.com/macros/s/AKfycbwohBVliHz9qXsU_IfnqYOIfAJZ0zVlEMFC_u8L5UFAojW7QCsZIeifoIJbM23q60do/exec';

    try {
      const response = await fetch(Url, {
        redirect: "follow",
        method: 'POST',
        headers: {  'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      console.log('Dados enviados com sucesso!', response);
    } catch (error) {
      console.log('Erro ao enviar os dados. ' + error);
    }

    // Reset form data
    setFormData({
      nome: '',
      telefone: '',
      endereco: '',
      bairro: '',
      cidade: 'Fortaleza',
      estado: 'Ceará'
    });
    // setTermsAccepted(false);
    setSelectedOption('Sim');
    alert('Obrigado por assinar! Sua assinatura foi registrada com sucesso.');

  };

  const calculatePercentage = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  return (
    <section ref={sectionRef} className="relative w-full my-[45px] overflow-hidden">
      {/* Imagem de fundo com parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute w-full h-full"
          style={{ y: imageY }}
        >
          <Image
            src={data.imagePath}
            alt={data.imageAlt}
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>
      
      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-[45px] px-4 lg:px-[60px] lg:pb-[15px]"
          >
            <div className="max-w-[700px] mb-[30px]">
              <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">{data.sectionTitle}</p>
              <h2 className="text-3xl lg:text-[45px] font-bold text-white">{data.sectionSubtitle}</h2>
            </div>
            
            <div className="text-white text-lg mb-6">
              <p>{data.description}</p>
            </div>

            <div className="mt-8">
              <div className="mb-4">
                <h3 className="text-xl text-white font-semibold mb-2">Progresso da Campanha</h3>
                <div className="relative h-[15px] bg-gray-700 rounded-sm overflow-visible mb-2 mt-8">
                  <div 
                    className="absolute h-full bg-primary" 
                    style={{ width: `${calculatePercentage(data.currentSignatures, data.signatureGoal)}%` }}
                  >
                    <span className="absolute -top-8 right-0 h-6 px-2 py-0.5 bg-primary text-dark text-sm leading-normal after:absolute after:content-[''] after:w-0 after:h-0 after:top-6 after:left-1/2 after:-ml-1.5 after:border-solid after:border-[6px] after:border-t-primary after:border-r-transparent after:border-b-transparent after:border-l-transparent">
                      {calculatePercentage(data.currentSignatures, data.signatureGoal)}%
                    </span>
                  </div>
                </div>
                <div className="flex justify-between text-white">
                  <p>Assinaturas: {data.currentSignatures.toLocaleString()}</p>
                  <p>Meta: {data.signatureGoal.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="py-[45px] px-[30px] bg-primary"
          >
            <h3 className="text-2xl font-bold text-dark mb-6">{data.formTitle}</h3>

            {/* Signature Options */}
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-3">Possui título de eleitor com base em Fortaleza?</p>
              <div className="space-y-3">
                {data.signatureOptions.map((option, index) => (
                  <div key={index} className="flex items-start">
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name="signatureOption"
                      checked={selectedOption === option.label}
                      onChange={() => setSelectedOption(option.label)}
                      className="mt-1 mr-3"
                    />
                    <label htmlFor={`option-${index}`} className="cursor-pointer">
                      <span className="font-medium text-gray-700">{option.label}</span>
                      <p className="text-sm text-gray-700">{option.description}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Personal Info Fields */}
              {data.personalInfoFields.map((field) => (
                <div key={field.id} className="mb-4">
                  <label htmlFor={field.id} className="block mb-1 font-medium text-gray-700">
                    {field.label}{field.required && <span className="text-red-600">*</span>}
                  </label>
                  <input 
                    type={field.type} 
                    id={field.id}
                    name={field.id}
                    className="w-full h-[45px] p-3 bg-transparent border border-dark/50 focus:border-dark focus:outline-none" 
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                  />
                </div>
              ))}
              
              {/* Terms Checkbox */}
              {/* <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="terms" className="text-sm">{data.termsText}</label>
                </div>
              </div> */}
              
              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-3 bg-dark text-white font-medium border border-dark hover:bg-transparent hover:text-dark transition-colors"
              >
                {data.submitButtonText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;