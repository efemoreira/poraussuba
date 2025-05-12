'use client';
import Link from 'next/link';
import * as fa from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const steps = [
  {
    id: 1,
    icon: fa.FaUserPlus,
    title: 'Você se cadastra aqui no site',
  },
  {
    id: 2,
    icon: fa.FaShareAlt,
    title: 'Divulga para seus amigos e familiares',
  },
  {
    id: 3,
    icon: fa.FaUsers,
    title: 'Atingido os [89.000] cadastros, chamamos todos para assinatura oficial da proposta de lei',
  },
  {
    id: 4,
    icon: fa.FaBuilding,
    title: 'Levamos a proposta para a Prefeitura e garantimos que vire realidade!',
  },
];

const HowItWorks = () => {
  // Referência para a seção de parallax
  const sectionRef = useRef(null);
  
  // Configuração do efeito parallax com framer-motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transforma o valor de scroll em movimento vertical para a imagem
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[400px] my-[45px] flex items-center overflow-hidden">
      {/* Imagem de fundo com parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute w-full h-full"
          style={{ y: imageY }}
        >
          <Image
            src="/img/facts.jpg" // Substitua pelo caminho correto da imagem
            alt="Como Funciona"
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/75 z-10"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-[60px] py-12 relative z-20">
        <div className="max-w-[700px] mx-auto text-center mb-12">
          <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">Como Funciona?</p>
          <h2 className="text-3xl lg:text-[45px] font-bold text-white">Entenda o processo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.id * 0.2 }}
              className="flex flex-row items-center"
            >
              <div className="w-[60px] flex-shrink-0 flex items-center justify-center text-primary text-[40px]">
                <step.icon />
              </div>
              <div className="pl-5">
                <p className="text-white font-semibold">{step.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <Link 
            href="/cadastro" 
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            Cadastre-se
          </Link>
          <Link 
            href="/compartilhar" 
            className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            Compartilhe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
