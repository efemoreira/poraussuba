'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import defaultData from '@/data/default/testimonialData';
import type { TestimonialData } from '@/data/default/testimonialData';

// Importar estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TestimonialSectionProps {
  data?: TestimonialData;
}

const TestimonialSection = ({ data = defaultData }: TestimonialSectionProps) => {
  return (
    <section className={`relative w-full py-[45px] px-4 lg:px-[60px] ${data.bgImagePath ? 'bg-cover bg-center bg-no-repeat' : ''}`}
      style={data.bgImagePath ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.bgImagePath})` } : {}}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center mb-12"
        >
          <p className={`mb-1 text-xl lg:text-2xl font-semibold text-primary`}>{data.sectionTitle}</p>
          <h2 className={`text-3xl lg:text-[45px] font-bold ${data.bgImagePath ? 'text-white' : 'text-textDark'}`}>
            {data.sectionSubtitle}
          </h2>
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
            {data.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col overflow-hidden ${data.bgImagePath ? 'bg-white/10 backdrop-blur-sm' : ''} p-4 rounded`}
                >
                  <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
                    <Image
                      src={testimonial.imagePath}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="mb-[-1px] rounded-full"
                    />
                    
                    <div className="pl-4 w-[calc(100%-95px)]">
                      <h3 className={`text-xl font-semibold mb-1 ${data.bgImagePath ? 'text-white' : 'text-textDark'}`}>
                        {testimonial.name}
                      </h3>
                      <p className={`m-0 italic ${data.bgImagePath ? 'text-white/80' : 'text-text'}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="testimonial-text">
                    <p className={`${data.bgImagePath ? 'text-white' : 'text-text'}`}>{testimonial.content}</p>
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