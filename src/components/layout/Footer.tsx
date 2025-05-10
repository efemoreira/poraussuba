'use client';

import Link from 'next/link';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaAngleRight, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import defaultData from '@/data/default/footerData';
import type { FooterData } from '@/data/default/footerData';

// Mapeamento de nomes de ícones para componentes de ícones
const iconMap = {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube
};

interface FooterProps {
  data?: FooterData;
}

const Footer = ({ data = defaultData }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  // Função para renderizar o ícone correto com base no nome do ícone
  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="inline-block" /> : null;
  };

  return (
    <footer className="relative mt-[45px] pt-[90px] bg-dark">
      <div className="container mx-auto px-4 lg:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Contato */}
          <div className="mb-[45px]">
            <h2 className="mb-[30px] text-xl font-bold text-primary">Nosso Contato</h2>
            <p className="text-white mb-2">
              <FaMapMarkerAlt className="inline-block w-[25px] text-white mr-2" />
              {data.contactInfo.address}
            </p>
            <p className="text-white mb-2">
              <FaPhoneAlt className="inline-block w-[25px] text-white mr-2" />
              {data.contactInfo.phone}
            </p>
            <p className="text-white mb-6">
              <FaEnvelope className="inline-block w-[25px] text-white mr-2" />
              {data.contactInfo.email}
            </p>
            <div className="mt-5">
              {data.socialLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.url}
                  className="inline-flex items-center justify-center w-[40px] h-[40px] mx-1 mb-2 text-primary border border-primary rounded-none hover:bg-primary hover:text-white transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {data.columns.map((column, index) => (
            <div className="mb-[45px]" key={index}>
              <h2 className="mb-[30px] text-xl font-bold text-primary">{column.title}</h2>
              <div className="flex flex-col">
                {column.links.map((link) => (
                  <Link 
                    key={link.id}
                    href={link.url} 
                    className="mb-2.5 text-white hover:text-primary hover:tracking-wider transition-all"
                  >
                    <FaAngleRight className="inline-block mr-2" />
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Footer Newsletter */}
          <div className="mb-[45px]">
            <h2 className="mb-[30px] text-xl font-bold text-primary">Newsletter</h2>
            <p className="text-white mb-6">
              {data.description}
            </p>
            <form>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Seu Email" 
                  className="w-full h-[60px] px-4 border-none focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full h-[60px] px-4 text-white bg-primary hover:bg-white hover:text-primary transition-all border-2 border-primary"
                >
                  Inscrever
                </button>
              </div>
              <div>
                <label className="text-gray-500 text-sm">
                  <input type="checkbox" className="mr-2" />
                  Aceito receber emails de newsletter
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-[30px]">
        <div className="container mx-auto">
          <div className="py-6 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="m-0 text-gray-400">
                  &copy; {currentYear} {data.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;