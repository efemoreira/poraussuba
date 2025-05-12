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
                    className="text-center text-white text-3xl md:text-4xl lg:text-[60px] font-bold mb-2"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-primary text-center text-base md:text-lg lg:text-xl mb-6"
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
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-row gap-4 mb-4"
                  >
                    {slide.buttons.map((button, index) => (
                      <Link 
                        key={index} 
                        href={button.buttonLink} 
                        className="px-6 py-3 text-white border-2 border-primary bg-transparent hover:bg-primary hover:text-dark transition duration-300 font-medium"
                      >
                        {button.buttonText}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;