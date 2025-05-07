'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Importar estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Miguel Pereira',
    position: 'Beneficiado pelo programa de educação',
    image: '/img/testimonial-1.jpg',
    text: 'Graças ao programa de bolsas de estudo desta organização, consegui completar minha formação superior e hoje trabalho como professor. Sem esta ajuda, jamais teria alcançado meu sonho de fazer faculdade.',
  },
  {
    id: 2,
    name: 'Sofia Mendes',
    position: 'Mãe beneficiada pelo programa de saúde',
    image: '/img/testimonial-2.jpg',
    text: 'Meu filho precisava de um tratamento médico especializado que seria impossível para nossa família custear. A organização nos apoiou completamente, e hoje meu filho está saudável e feliz novamente.',
  },
  {
    id: 3,
    name: 'Roberto Almeida',
    position: 'Morador de comunidade assistida',
    image: '/img/testimonial-3.jpg',
    text: 'Após a enchente que destruiu nossa comunidade, ficamos sem nada. A equipe chegou rapidamente com alimentos, água potável e material para reconstrução. Nunca vou esquecer o carinho e dedicação desses voluntários.',
  },
  {
    id: 4,
    name: 'Carla Ferreira',
    position: 'Beneficiada pelo programa de moradia',
    image: '/img/testimonial-4.jpg',
    text: 'Por anos vivemos em condições precárias, com teto que deixava entrar água da chuva. O programa de moradia nos ajudou a reformar nossa casa, e agora temos um lar seguro e digno para criar nossos filhos.',
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative w-full py-[45px] px-4 lg:px-[60px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center mb-12"
        >
          <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">Depoimentos</p>
          <h2 className="text-3xl lg:text-[45px] font-bold text-textDark">O que as pessoas dizem sobre nossa organização</h2>
        </motion.div>

        <div className="relative -mx-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
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
            className="px-4 pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col overflow-hidden"
                >
                  <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="mb-[-1px]"
                    />
                    
                    <div className="pl-4 w-[calc(100%-95px)]">
                      <h3 className="text-xl font-semibold mb-1 text-textDark">{testimonial.name}</h3>
                      <p className="m-0 italic text-text">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="testimonial-text">
                    <p className="text-text">{testimonial.text}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;