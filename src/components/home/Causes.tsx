'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import defaultData, { CausesData } from '@/data/default/causesData';

// Importar estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CausesSectionProps {
  data?: CausesData;
}

const CausesSection = ({ data = defaultData }: CausesSectionProps) => {
  const calculatePercentage = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100);
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
          <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">{data.sectionTitle}</p>
          <h2 className="text-3xl lg:text-[45px] font-bold text-textDark">{data.sectionSubtitle}</h2>
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
            {data.causes.map((cause, index) => (
              <SwiperSlide key={cause.id} className="pb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden bg-light h-full"
                >
                  <div className="causes-img overflow-hidden">
                    <Image
                      src={cause.imagePath}
                      alt={cause.title}
                      width={500}
                      height={300}
                      className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  <div className="p-[30px] pt-8 mt-2">
                    <div className="mb-4">
                      <div className="relative h-[10px] bg-gray-300 rounded-sm overflow-visible mb-2">
                        <div 
                          className="absolute h-full bg-primary" 
                          style={{ width: `${calculatePercentage(cause.currentAmount, cause.targetAmount)}%` }}
                        >
                          <span className="absolute -top-8 right-0 h-6 px-2 py-0.5 bg-primary text-dark text-sm leading-normal after:absolute after:content-[''] after:w-0 after:h-0 after:top-6 after:left-1/2 after:-ml-1.5 after:border-solid after:border-[6px] after:border-t-primary after:border-r-transparent after:border-b-transparent after:border-l-transparent">
                            {calculatePercentage(cause.currentAmount, cause.targetAmount)}%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <p>Assinaturas: {cause.currentAmount.toLocaleString()}</p>
                        <p>Meta: {cause.targetAmount.toLocaleString()}</p>
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-textDark mb-3">{cause.title}</h3>
                    <p className="mb-6">{cause.description}</p>

                    <div className="flex">
                      <Link 
                        href={cause.buttonLink} 
                        className="w-full py-2.5 text-center border-t border-gray-200 bg-primary text-dark hover:text-white transition-all duration-300"
                      >
                        {cause.buttonText}
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