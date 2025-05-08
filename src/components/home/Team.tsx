'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import defaultData from '@/data/default/teamData';
import type { TeamData, TeamMember } from '@/data/default/teamData';

interface TeamSectionProps {
  data?: TeamData;
}

const MemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="relative overflow-hidden group">
      <div className="relative">
        <Image
          src={member.imagePath}
          alt={member.name}
          width={300}
          height={400}
          className="w-full transform scale-110 transition-transform duration-300 group-hover:mt-[-15px] group-hover:mb-[15px]"
        />
      </div>

      <div className="absolute w-[calc(100%-40px)] h-24 bottom-0 left-5 py-[22px] text-center bg-white transition-all duration-300 ease-in-out overflow-hidden group-hover:h-[160px]">
        <div>
          <h2 className="text-lg font-bold mb-2.5 text-textDark">{member.name}</h2>
          <p className="mb-5 text-text">{member.role}</p>
        </div>
        
        <div className="flex justify-center gap-1.5">
          {member.socialLinks.facebook && (
            <a 
              href={member.socialLinks.facebook} 
              className="flex items-center justify-center w-[35px] h-[35px] border-2 border-primary text-textDark hover:bg-primary hover:text-dark transition-all"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a 
              href={member.socialLinks.twitter} 
              className="flex items-center justify-center w-[35px] h-[35px] border-2 border-primary text-textDark hover:bg-primary hover:text-dark transition-all"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          )}
          {member.socialLinks.linkedin && (
            <a 
              href={member.socialLinks.linkedin} 
              className="flex items-center justify-center w-[35px] h-[35px] border-2 border-primary text-textDark hover:bg-primary hover:text-dark transition-all"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          )}
          {member.socialLinks.instagram && (
            <a 
              href={member.socialLinks.instagram} 
              className="flex items-center justify-center w-[35px] h-[35px] border-2 border-primary text-textDark hover:bg-primary hover:text-dark transition-all"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({ data = defaultData }: TeamSectionProps) => {
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
          <p className="mt-4 text-text">{data.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-[35px]"
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;