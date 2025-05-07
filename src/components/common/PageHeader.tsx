'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  breadcrumb: {
    name: string;
    link: string;
  }[];
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
  return (
    <div className="relative mb-[45px] py-[210px] pb-[90px] text-center bg-page-header bg-fixed bg-center bg-no-repeat bg-cover">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-primary text-4xl md:text-[60px] font-bold mb-5 pb-[5px] after:absolute after:content-[''] after:w-[100px] after:h-[2px] after:left-[calc(50%-50px)] after:bottom-0 after:bg-primary"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {breadcrumb.map((item, index) => (
          <span key={index} className="relative">
            <Link 
              href={item.link} 
              className="relative px-3 text-xl text-white hover:text-primary"
            >
              {item.name}
            </Link>
            {index < breadcrumb.length - 1 && (
              <span className="relative text-white text-xl after:absolute after:content-['/'] after:w-2 after:h-2 after:top-[-2px] after:right-[-7px] after:text-center">
              </span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default PageHeader;