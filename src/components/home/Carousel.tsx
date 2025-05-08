'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import defaultData, { CarouselData } from '@/data/default/carouselData';

// Importar os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface CarouselProps {
  data?: CarouselData;
}

const Carousel = ({ data = defaultData }: CarouselProps) => {
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
          autoplay={data.autoplay ? {
            delay: data.delay,
            disableOnInteraction: false,
          } : false}
          loop
          className="w-full h-full"
        >
          {data.slides.map((slide) => (
            <SwiperSlide key={slide.id} className="w-full h-full">
              <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
                <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] lg:min-h-[700px] text-right overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 z-10"></div>
                  <Image 
                    src={slide.imagePath} 
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
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white text-center text-base md:text-lg lg:text-xl mb-3"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-white text-center text-base md:text-lg mb-6"
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
                      href={slide.buttonLink} 
                      className="px-6 py-3 text-white border-2 border-primary bg-transparent hover:bg-primary hover:text-dark transition duration-300 font-medium"
                    >
                      {slide.buttonText}
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
          <div className="absolute w-[60px] h-[60px] flex items-center justify-center text-primary bg-white/20 hover:bg-primary hover:text-white transition-all duration-300 top-1/2 left-0 -translate-y-1/2 z-10">
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