'use client';

import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import defaultData from '@/data/default/topBarData';
import type { TopBarData } from '@/data/default/topBarData';

// Mapeamento de nomes de ícones para componentes de ícones
const iconMap = {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
};

interface TopBarProps {
  data?: TopBarData;
}

const TopBar = ({ data = defaultData }: TopBarProps) => {
  // Função para renderizar o ícone correto com base no nome do ícone
  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="text-base" /> : null;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-[45px] z-10 border-b border-white/30">
      <div className="container mx-auto px-4 lg:px-[60px] h-full">
        <div className="flex justify-between items-center h-full">
          {/* Top Bar Left */}
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-center h-[45px] px-[10px] text-center border-l border-white/30">
              <FaPhone className="text-primary mr-[5px] text-base" />
              <p className="text-white text-base font-medium m-0">{data.contactInfo.phone}</p>
            </div>
            <div className="flex items-center justify-center h-[45px] px-[10px] text-center border-l border-white/30">
              <FaEnvelope className="text-primary mr-[5px] text-base" />
              <p className="text-white text-base font-medium m-0">{data.contactInfo.email}</p>
            </div>
          </div>
          
          {/* Top Bar Right */}
          <div className="flex items-center justify-end">
            {/* <div className="flex items-center justify-center h-[45px] px-[10px] text-center border-l border-white/30 border-r border-white/30">
              <FaMapMarkerAlt className="text-primary mr-[5px] text-base" />
              <p className="text-white text-base font-medium m-0">{data.contactInfo.address}</p>
            </div> */}
            <div className="flex h-[45px] border-l border-white/30">
              {data.socialLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.url} 
                  className="flex items-center justify-center w-[45px] h-full text-primary border-r border-white/30 hover:bg-primary hover:text-white transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;