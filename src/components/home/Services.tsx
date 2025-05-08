'use client';

import { motion } from 'framer-motion';
import defaultData from '@/data/default/servicesData';
import type { ServicesData, Service } from '@/data/default/servicesData';
import * as fa from 'react-icons/fa';

interface ServiceItemProps {
  data: Service;
  index: number;
}

const serviceIcons = {
  'health': fa.FaHeartbeat,
  'education': fa.FaBookReader,
  'housing': fa.FaHome,
  'volunteering': fa.FaHandsHelping,
  'donation': fa.FaHandHoldingHeart,
  'scholarship': fa.FaGraduationCap,
  'humanitarian': fa.FaHandHoldingHeart,
  'community': fa.FaHandsHelping,
  'arts': fa.FaBookReader,
  'user': fa.FaUser,
  'animal': fa.FaDog,
  'environment': fa.FaTree,
};

const ServiceItem = ({ data, index }: ServiceItemProps) => {
  const IconComponent = serviceIcons[data.icon as keyof typeof serviceIcons] || fa.FaQuestionCircle;
  const icon = <IconComponent className="text-primary text-[60px]" />;
  const IconWrapper = () => (
    <div className="w-[60px] flex-shrink-0">
      {icon}
    </div>
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex mb-8"
    >
      <IconWrapper />

      <div className="relative ml-[20px] pl-[20px] before:absolute before:content-[''] before:w-[1px] before:h-[calc(100%-10px)] before:top-[5px] before:left-0 before:bg-black/10 after:absolute after:content-[''] after:w-[3px] after:h-[40px] after:top-[calc(50%-20px)] after:left-[-1px] after:bg-primary">
        <h3 className="mb-[10px] text-xl lg:text-2xl font-bold tracking-wide text-textDark">{data.title}</h3>
        <p className="m-0">{data.description}</p>
      </div>
    </motion.div>
  );
};

interface ServicesProps {
  data?: ServicesData;
}

const Services = ({ data = defaultData }: ServicesProps) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <ServiceItem
              key={service.id}
              data={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;