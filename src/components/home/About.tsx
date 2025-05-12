'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import defaultData, { AboutData } from '@/data/default/aboutData';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface AboutSectionProps {
  data?: AboutData;
}

// Componente para exibir os itens de conquistas
const AchievementsList = ({ achievements, achievementTitle }: { achievementTitle: string; achievements: string[] }) => (
  <div className="mt-8">
    <p className="font-medium mb-4 text-primary text-xl">
      {achievementTitle}
    </p>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-center">
          <span className="mr-2 text-primary">&#10003;</span>
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Componente para o botão de ação
const ActionButton = ({ link, text }: { link: string; text: string }) => (
  <div className="mt-8">
    <a 
      href={link}
      className="inline-block px-6 py-3 border-2 border-primary text-text hover:bg-primary hover:text-dark transition-all duration-300"
    >
      {text}
    </a>
  </div>
);

const AboutSection = ({ data = defaultData }: AboutSectionProps) => {
  const [categories] = useState(data.tabs);

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
                  src={data.imagePath}
                  alt={data.imageAlt}
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
              <p className="mb-1 relative text-xl lg:text-2xl font-semibold text-primary">{data.title}</p>
              <h2 className="text-3xl lg:text-[45px] font-bold text-textDark">{data.subtitle}</h2>
            </motion.div>
            
            <div className="w-full">
              <TabGroup>
                <TabList className="flex border-b border-gray-200">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          'w-1/3 py-2 font-semibold text-textDark focus:outline-none',
                          selected
                            ? 'text-primary border-b-3 border-primary'
                            : 'hover:text-primary hover:border-b-3 hover:border-primary'
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels className="mt-6">
                  {Object.values(categories).map((posts, idx) => (
                    <TabPanel
                      key={idx}
                      className="ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
                    >
                      {posts.map((post) => (
                        <div key={post.id} className="text-text">
                          <p className="text-base leading-relaxed">
                            {post.content}
                          </p>
                          <AchievementsList achievements={data.achievements} achievementTitle={data.achievementTitle} />
                          <ActionButton link={data.buttonLink} text={data.buttonText} />
                        </div>
                      ))}
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;