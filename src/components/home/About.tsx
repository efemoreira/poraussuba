'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { motion, useScroll, useTransform } from 'framer-motion';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const AboutSection = () => {
  const [categories] = useState({
    'Nossa Missão': [
      {
        id: 1,
        content: `Nossa missão é fornecer ajuda humanitária para crianças, adultos e famílias em situação de vulnerabilidade. 
                  Trabalhamos para criar oportunidades, levar esperança e transformar vidas através de programas educacionais, 
                  assistência médica e apoio comunitário.`,
      },
    ],
    'Nossa Visão': [
      {
        id: 1,
        content: `Buscamos um mundo onde todas as pessoas tenham acesso a necessidades básicas, oportunidades de desenvolvimento 
                  e possam viver com dignidade. Acreditamos em construir uma sociedade mais justa e igualitária, onde ninguém seja 
                  deixado para trás.`,
      },
    ],
    'Nossos Valores': [
      {
        id: 1,
        content: `Nossos valores fundamentais incluem respeito pela dignidade humana, transparência em nossas ações, 
                  responsabilidade com nossos doadores e beneficiários, eficiência na gestão de recursos e comprometimento 
                  com resultados de longo prazo que promovam mudanças duradouras.`,
      },
    ],
  });

  // Referência para a seção de parallax
  const sectionRef = useRef(null);
  
  // Configuração do efeito parallax com framer-motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transforma o valor de scroll em movimento vertical para a imagem
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={sectionRef} className="relative w-full py-4">
      <div className="container mx-auto px-4 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full h-[100vh] lg:h-[100vh] lg:w-[100%] lg:mx-auto overflow-hidden">
              <motion.div 
                className="absolute w-full h-full"
                style={{ y: imageY }}
              >
                <Image
                  src="/img/about.jpg"
                  alt="Sobre nossa organização"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-12 self-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <p className="mb-1 relative text-xl lg:text-2xl font-semibold text-primary">Sobre Nós</p>
              <h2 className="text-3xl lg:text-[45px] font-bold text-textDark">Ajudando os não privilegiados há 20 anos</h2>
            </motion.div>
            
            <div className="w-full">
              <Tab.Group>
                <Tab.List className="flex border-b border-gray-200">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          'w-1/3 py-2 font-semibold text-textDark focus:outline-none',
                          selected
                            ? 'text-primary border-b-3 border-primary'
                            : 'hover:text-primary'
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-6">
                  {Object.values(categories).map((posts, idx) => (
                    <Tab.Panel
                      key={idx}
                      className="ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
                    >
                      {posts.map((post) => (
                        <div key={post.id} className="text-text">
                          <p className="text-base leading-relaxed">
                            {post.content}
                          </p>
                          <div className="mt-8">
                            <p className="font-medium mb-4">
                              Ao longo dos anos, nossa organização alcançou:
                            </p>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <span className="mr-2 text-primary">&#10003;</span>
                                <span>Mais de 10.000 crianças beneficiadas</span>
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2 text-primary">&#10003;</span>
                                <span>Centenas de comunidades assistidas</span>
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2 text-primary">&#10003;</span>
                                <span>Programas educacionais reconhecidos</span>
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2 text-primary">&#10003;</span>
                                <span>Transparência e eficiência na gestão de recursos</span>
                              </li>
                            </ul>
                          </div>
                          <div className="mt-8">
                            <a 
                              href="/about" 
                              className="inline-block px-6 py-3 border-2 border-primary text-text hover:bg-primary hover:text-dark transition-all duration-300"
                            >
                              Saiba Mais
                            </a>
                          </div>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;