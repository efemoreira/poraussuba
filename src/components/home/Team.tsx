'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'João Silva',
    position: 'Fundador e CEO',
    image: '/img/team-1.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 2,
    name: 'Maria Santos',
    position: 'Diretora de Projetos',
    image: '/img/team-2.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    position: 'Diretor Financeiro',
    image: '/img/team-3.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 4,
    name: 'Ana Costa',
    position: 'Coordenadora de Voluntários',
    image: '/img/team-4.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
];

const TeamSection = () => {
  return (
    <section className="relative w-full py-[45px] pb-[15px] px-4 lg:px-[60px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center mb-12"
        >
          <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">Conheça nosso Time</p>
          <h2 className="text-3xl lg:text-[45px] font-bold text-textDark">Pessoas incríveis por trás de nossa organização</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-[35px]"
            >
              <div className="relative overflow-hidden group">
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full transform scale-110 transition-transform duration-300 group-hover:mt-[-15px] group-hover:mb-[15px]"
                  />
                </div>

                <div className="absolute w-[calc(100%-40px)] h-24 bottom-0 left-5 py-[22px] text-center bg-white transition-all duration-300 ease-in-out overflow-hidden group-hover:h-[160px]">
                  <div>
                    <h2 className="text-lg font-bold mb-2.5 text-textDark">{member.name}</h2>
                    <p className="mb-5 text-text">{member.position}</p>
                  </div>
                  
                  <div className="flex justify-center gap-1.5">
                    <a 
                      href={member.socialLinks.facebook} 
                      className="flex items-center justify-center w-[35px] h-[35px] border-2 border-primary text-secondary hover:bg-primary hover:text-dark transition-all"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a 
                      href={member.socialLinks.twitter} 
                      className="flex items-center justify-center w-[35px] h-[35px] border-2 border-primary text-secondary hover:bg-primary hover:text-dark transition-all"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a 
                      href={member.socialLinks.linkedin} 
                      className="flex items-center justify-center w-[35px] h-[35px] border-2 border-primary text-secondary hover:bg-primary hover:text-dark transition-all"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a 
                      href={member.socialLinks.instagram} 
                      className="flex items-center justify-center w-[35px] h-[35px] border-2 border-primary text-secondary hover:bg-primary hover:text-dark transition-all"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;