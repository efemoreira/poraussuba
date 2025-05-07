'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';
import { FaUserFriends, FaHandsHelping, FaProjectDiagram, FaDonate } from 'react-icons/fa';

interface FactItemProps {
  icon: React.ReactNode;
  number: number;
  suffix?: string;
  text: string;
}

const FactItem = ({ icon, number, suffix = '', text }: FactItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

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
      <div className="text-primary text-[60px] mt-2.5">
        {icon}
      </div>
      <div className="pl-5">
        <h3 className="relative inline-block text-white text-[45px] font-bold">
          {isInView ? (
            <CountUp end={number} duration={2.5} />
          ) : (
            0
          )}
          {suffix}
        </h3>
        <p className="text-white text-[22px] font-semibold m-0">{text}</p>
      </div>
    </motion.div>
  );
};

const FactsSection = () => {
  return (
    <section className="relative w-full min-h-[400px] my-[45px] flex items-center bg-facts bg-cover bg-fixed">
      <div className="container mx-auto px-4 lg:px-[60px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FactItem 
            icon={<FaUserFriends />} 
            number={12345}
            suffix="+"
            text="Pessoas Ajudadas" 
          />
          <FactItem 
            icon={<FaHandsHelping />} 
            number={1234}
            text="Voluntários" 
          />
          <FactItem 
            icon={<FaProjectDiagram />} 
            number={123}
            text="Projetos Completos" 
          />
          <FactItem 
            icon={<FaDonate />} 
            number={1234567}
            suffix="R$"
            text="Doações Recebidas" 
          />
        </div>
      </div>
    </section>
  );
};

export default FactsSection;