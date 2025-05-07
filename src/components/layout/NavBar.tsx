'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavLinkProps {
  href: string;
  title: string;
  isActive?: boolean;
}

const NavLink = ({ href, title, isActive = false }: NavLinkProps) => (
  <Link 
    href={href}
    className={`py-2 px-4 text-base tracking-wider ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`}
  >
    {title}
  </Link>
);

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 45);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <nav 
      className={`w-full py-5 lg:py-0 transition-all duration-500 z-[999] ${
        isSticky 
          ? 'fixed top-0 shadow-md bg-dark lg:py-2.5' 
          : 'absolute top-[45px] bg-transparent lg:border-b border-white/30'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-[60px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="m-0 text-white text-[45px] font-bold tracking-wider uppercase">
            <span className="text-primary">C</span>aridade
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavLink href="/" title="Home" isActive={activeLink === '/'} />
            <NavLink href="/about" title="Sobre" isActive={activeLink === '/about'} />
            <NavLink href="/causes" title="Causas" isActive={activeLink === '/causes'} />
            <NavLink href="/event" title="Eventos" isActive={activeLink === '/event'} />
            <NavLink href="/blog" title="Blog" isActive={activeLink === '/blog'} />
            <NavLink href="/donate" title="Doar" isActive={activeLink === '/donate'} />
            <NavLink href="/contact" title="Contato" isActive={activeLink === '/contact'} />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col">
              <Link href="/" className="py-2 text-white hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="py-2 text-white hover:text-primary" onClick={() => setIsOpen(false)}>Sobre</Link>
              <Link href="/causes" className="py-2 text-white hover:text-primary" onClick={() => setIsOpen(false)}>Causas</Link>
              <Link href="/event" className="py-2 text-white hover:text-primary" onClick={() => setIsOpen(false)}>Eventos</Link>
              <Link href="/blog" className="py-2 text-white hover:text-primary" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link href="/donate" className="py-2 text-white hover:text-primary" onClick={() => setIsOpen(false)}>Doar</Link>
              <Link href="/contact" className="py-2 text-white hover:text-primary" onClick={() => setIsOpen(false)}>Contato</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;