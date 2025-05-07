'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUser, FaCalendarAlt, FaComments } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'Como pequenas doações transformam vidas',
    description: 'Descubra como mesmo as menores contribuições podem causar um grande impacto na vida de pessoas em situação de vulnerabilidade.',
    image: '/img/blog-1.jpg',
    author: 'Admin',
    date: '01 Mai 2025',
    comments: 15,
  },
  {
    id: 2,
    title: 'O papel da educação no combate à pobreza',
    description: 'Entenda como programas educacionais podem quebrar o ciclo de pobreza e criar oportunidades para comunidades carentes.',
    image: '/img/blog-2.jpg',
    author: 'Admin',
    date: '15 Abr 2025',
    comments: 10,
  },
  {
    id: 3,
    title: 'Ações sustentáveis para comunidades vulneráveis',
    description: 'Conheça projetos que combinam sustentabilidade ambiental e desenvolvimento social para melhorar a qualidade de vida.',
    image: '/img/blog-3.jpg',
    author: 'Admin',
    date: '30 Mar 2025',
    comments: 8,
  }
];

const BlogSection = () => {
  return (
    <section className="relative w-full py-[45px] pb-[15px] px-4 lg:px-[60px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center mb-12"
        >
          <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">Nosso Blog</p>
          <h2 className="text-3xl lg:text-[45px] font-bold text-textDark">Últimos artigos do nosso blog</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-[30px] pb-[30px] bg-light"
            >
              <div className="blog-img w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-[30px] pb-4">
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  <Link href="/blog">{post.title}</Link>
                </h3>
                <p className="text-text mb-0">{post.description}</p>
              </div>
              
              <div className="mx-[30px] pt-4 flex border-t border-black/15">
                <p className="m-0 text-text pr-[30px] border-r border-black/15">
                  <FaUser className="inline-block text-secondary mr-2" />
                  <Link href="#" className="text-text hover:text-primary">{post.author}</Link>
                </p>
                <p className="m-0 text-text px-[30px] border-r border-black/15">
                  <FaCalendarAlt className="inline-block text-secondary mr-2" />
                  <span>{post.date}</span>
                </p>
                <p className="m-0 text-text pl-[30px]">
                  <FaComments className="inline-block text-secondary mr-2" />
                  <Link href="#" className="text-text hover:text-primary">{post.comments} Comentários</Link>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;