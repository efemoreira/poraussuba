'use client';

import { useEffect, useState } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import Loader from '../common/Loader';
import { FaArrowUp } from 'react-icons/fa';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Controle do botão "Voltar ao Topo"
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolar suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Loader />
      <TopBar />
      <NavBar />
      
      <main>{children}</main>
      
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-[15px] bottom-[15px] w-[44px] h-[44px] flex items-center justify-center bg-primary hover:bg-secondary transition-all duration-500 z-[9] ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <FaArrowUp className="text-secondary hover:text-primary" />
      </button>
    </>
  );
};

export default MainLayout;