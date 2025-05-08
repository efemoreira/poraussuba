'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import Image from 'next/image';
import Link from 'next/link';
import defaultData, { FactsData, Fact } from '@/data/default/factsData';
import * as fa from 'react-icons/fa';

interface FactItemProps {
  data: Fact;
}

const factIcons = {
  'health': fa.FaHeartbeat,
  'education': fa.FaBookReader,
  'housing': fa.FaHome,
  'volunteering': fa.FaHandsHelping,
  'donation': fa.FaHandHoldingHeart,
  'scholarship': fa.FaGraduationCap,
  'humanitarian': fa.FaHandHoldingHeart,
  'community': fa.FaHandsHelping,
  'arts': fa.FaBookReader,
  'user': fa.FaUser,
  'animal': fa.FaDog,
  'environment': fa.FaTree,
};

const FactItem = ({ data }: FactItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const IconComponent = factIcons[data.icon as keyof typeof factIcons] || fa.FaQuestionCircle;
  const icon = <IconComponent className="text-primary text-[60px]" />;
  const IconWrapper = () => (
    <div className="w-[60px] flex-shrink-0">
      {icon}
    </div>
  );

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="flex flex-row my-6"
    >
      <IconWrapper />
      <div className="pl-5">
        <h3 className="relative inline-block text-white text-[45px] font-bold">
          {data.prefix}
          {isInView ? (
            <CountUp end={data.count} duration={2.5} />
          ) : (
            0
          )}
          {data.suffix}
        </h3>
        <p className="text-white text-[22px] font-semibold m-0">{data.title}</p>
      </div>
    </motion.div>
  );
};

interface FactsSectionProps {
  data?: FactsData;
}

const FactsSection = ({ data = defaultData }: FactsSectionProps) => {
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
    <section ref={sectionRef} className="relative w-full min-h-[400px] my-[45px] flex items-center overflow-hidden">
      {/* Imagem de fundo com parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute w-full h-full"
          style={{ y: imageY }}
        >
          <Image
            src={data.imagePath}
            alt="Nossos resultados e impacto"
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/75 z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-[60px] py-12 relative z-20">
        <div className="max-w-[700px] mx-auto text-center mb-12">
          <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">{data.sectionTitle}</p>
          <h2 className="text-3xl lg:text-[45px] font-bold text-white">{data.sectionSubtitle}</h2>
          <p className="mt-4 text-white">{data.description}</p>
          <Link 
            href={data.buttonLink} 
            className="inline-block mt-6 px-6 py-3 border-2 border-primary text-white hover:bg-primary hover:text-dark transition-all duration-300"
          >
            {data.buttonText}
          </Link>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.facts.map((fact) => (
            <FactItem 
              key={fact.id}
              data={fact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;