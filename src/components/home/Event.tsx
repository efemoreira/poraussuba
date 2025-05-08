'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import defaultData, { EventSectionData } from '@/data/default/eventData';

interface EventSectionProps {
  data?: EventSectionData;
}

const EventSection = ({ data = defaultData }: EventSectionProps) => {
  return (
    <section className="relative w-full py-[45px] pb-[15px] px-4 lg:px-[60px]">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 bg-light"
            >
              <Image
                src={event.imagePath}
                alt={event.title}
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
              
              <div className="p-[30px] flex flex-col md:flex-row">
                <div className="flex flex-row md:flex-col mb-4 md:mb-0 w-2/5">
                  <div className="relative whitespace-nowrap border-b border-gray-200 pb-2 mb-2 md:mr-0 mr-4">
                    <FaCalendarAlt className="inline-block mr-2.5 text-textDark" />
                    <span>{event.date}</span>
                  </div>
                  <div className="relative whitespace-nowrap border-b border-gray-200 pb-2 mb-2 md:mr-0 mr-4">
                    <FaClock className="inline-block mr-2.5 text-textDark" />
                    <span>{event.time}</span>
                  </div>
                  <div className="relative ">
                    <FaMapMarkerAlt className="inline-block mr-2.5 text-textDark" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="relative md:ml-5 md:pl-5 md:border-l md:border-gray-200 before:hidden md:before:block md:before:absolute md:before:content-[''] md:before:w-[1px] md:before:h-[calc(100%-5px)] md:before:top-[6px] md:before:left-0 md:before:bg-black/15 after:hidden md:after:block md:after:absolute md:after:content-[''] md:after:w-[3px] md:after:h-[40px] md:after:top-[calc(50%-20px)] md:after:left-[-1px] md:after:bg-primary">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2.5 text-textDark">{event.title}</h3>
                  <p className="text-text mb-5">{event.description}</p>
                  <Link
                    href={event.buttonLink}
                    className="inline-block px-6 py-2 border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {event.buttonText}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;