'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Importar os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/img/carousel-1.jpg',
    title: 'Juntos nós podemos mudar o mundo',
    description: 'Junte-se a nós para ajudar os mais necessitados',
  },
  {
    id: 2,
    image: '/img/carousel-2.jpg',
    title: 'Faça parte desta mudança',
    description: 'Sua pequena ajuda significa muito para alguém necessitado',
  },
  {
    id: 3,
    image: '/img/carousel-3.jpg',
    title: 'Doe para os mais necessitados',
    description: 'Uma doação pode salvar muitas vidas',
  }
];

const Carousel = () => {
  return (
    <div className="relative w-full min-h-[300px] md:min-h-[500px] lg:min-h-[700px] mb-[45px] bg-white">
      <div className="w-full h-full">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="w-full h-full">
              <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
                <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] lg:min-h-[700px] text-right overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 z-10"></div>
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                
                <div className="absolute max-w-[700px] flex items-center justify-center flex-col z-20">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center text-white text-3xl md:text-4xl lg:text-[60px] font-bold mb-5"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-white text-center text-base md:text-lg lg:text-xl mb-6"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex gap-4"
                  >
                    <Link 
                      href="/donate" 
                      className="px-6 py-3 text-white border-2 border-primary bg-transparent hover:bg-primary hover:text-dark transition duration-300 font-medium"
                    >
                      Doar Agora
                    </Link>
                    <Link
                      href="#video-modal" 
                      className="px-6 py-3 text-dark border-2 border-primary bg-primary hover:bg-transparent hover:text-white transition duration-300 font-medium"
                    >
                      Assista Vídeo
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-next absolute w-[60px] h-[60px] flex items-center justify-center text-primary bg-white/20 hover:bg-primary hover:text-white transition-all duration-300 top-1/2 right-0 -translate-y-1/2 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          <div className="swiper-button-prev absolute w-[60px] h-[60px] flex items-center justify-center text-primary bg-white/20 hover:bg-primary hover:text-white transition-all duration-300 top-1/2 left-0 -translate-y-1/2 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;