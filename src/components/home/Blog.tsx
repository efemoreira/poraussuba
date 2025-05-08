'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import defaultData, { BlogSectionData } from '@/data/default/blogData';

interface BlogSectionProps {
  data?: BlogSectionData;
}

const BlogSection = ({ data = defaultData }: BlogSectionProps) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-[30px] pb-[30px] bg-light"
            >
              <div className="blog-img w-full">
                <Image
                  src={post.imagePath}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-[30px] pb-4">
                <h3 className="text-xl font-bold mb-3 text-textDark hover:text-primary transition-colors">
                  <Link href={post.link}>{post.title}</Link>
                </h3>
                <p className="text-text mb-0">{post.excerpt}</p>
              </div>
              
              <div className="mx-[30px] pt-4 flex border-t border-black/15">
                <p className="m-0 text-text pr-[30px] border-r border-black/15">
                  <FaUser className="inline-block text-textDark mr-2" />
                  <Link href="#" className="text-text hover:text-primary">{post.author}</Link>
                </p>
                <p className="m-0 text-text px-[30px] ">
                  <FaCalendarAlt className="inline-block text-textDark mr-2" />
                  <span>{post.date}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href={data.buttonLink}
            className="inline-block px-6 py-3 border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            {data.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;