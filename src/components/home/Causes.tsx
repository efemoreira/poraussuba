'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Importar estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const causes = [
  {
    id: 1,
    title: "Educação para crianças carentes",
    description: "Ajude a fornecer materiais escolares, uniformes e bolsas de estudo para crianças em situação de vulnerabilidade social",
    image: "/img/causes-1.jpg",
    raised: 5750,
    goal: 10000,
  },
  {
    id: 2,
    title: "Água potável para todos",
    description: "Contribua para levar água limpa e potável para comunidades que sofrem com escassez hídrica em regiões remotas",
    image: "/img/causes-2.jpg",
    raised: 12250,
    goal: 15000,
  },
  {
    id: 3,
    title: "Alimentos para famílias vulneráveis",
    description: "Apoie nossa campanha de distribuição de cestas básicas para famílias em situação de insegurança alimentar",
    image: "/img/causes-3.jpg",
    raised: 8430,
    goal: 20000,
  },
  {
    id: 4,
    title: "Saúde para comunidades carentes",
    description: "Ajude a financiar atendimento médico, medicamentos e campanhas de saúde em áreas sem acesso a serviços básicos",
    image: "/img/causes-4.jpg",
    raised: 17500,
    goal: 25000,
  },
];

const CausesSection = () => {
  const calculatePercentage = (raised: number, goal: number) => {
    return Math.min(Math.round((raised / goal) * 100), 100);
  };

  return (
    <section className="relative w-full py-[45px] px-4 lg:px-[60px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center mb-12"
        >
          <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">Nossas Causas</p>
          <h2 className="text-3xl lg:text-[45px] font-bold text-textDark">Vamos conhecer nossas causas e ajude</h2>
        </motion.div>

        <div className="relative -mx-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="px-4"
          >
            {causes.map((cause, index) => (
              <SwiperSlide key={cause.id} className="pb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden bg-light h-full"
                >
                  <div className="causes-img overflow-hidden">
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      width={500}
                      height={300}
                      className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  <div className="p-[30px] pt-8">
                    <div className="mb-4">
                      <div className="relative h-[10px] bg-gray-300 rounded-sm overflow-visible mb-2">
                        <div 
                          className="absolute h-full bg-primary" 
                          style={{ width: `${calculatePercentage(cause.raised, cause.goal)}%` }}
                        >
                          <span className="absolute -top-8 right-0 h-6 px-2 py-0.5 bg-primary text-dark text-sm leading-normal after:absolute after:content-[''] after:w-0 after:h-0 after:top-6 after:left-1/2 after:-ml-1.5 after:border-solid after:border-[6px] after:border-t-primary after:border-r-transparent after:border-b-transparent after:border-l-transparent">
                            {calculatePercentage(cause.raised, cause.goal)}%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <p>Arrecadado: R$ {cause.raised.toLocaleString()}</p>
                        <p>Meta: R$ {cause.goal.toLocaleString()}</p>
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-textDark mb-3">{cause.title}</h3>
                    <p className="mb-6">{cause.description}</p>

                    <div className="flex">
                      <Link 
                        href="/donate" 
                        className="w-1/2 py-2.5 text-center border-t border-r border-gray-200 hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        Saiba Mais
                      </Link>
                      <Link 
                        href="/donate" 
                        className="w-1/2 py-2.5 text-center border-t border-gray-200 bg-primary text-dark hover:text-white transition-all duration-300"
                      >
                        Doe Agora
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;