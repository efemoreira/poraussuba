'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import defaultData from '@/data/default/navBarData';
import type { NavBarData } from '@/data/default/navBarData';

interface NavLinkProps {
  href: string;
  title: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: {
    id: number;
    label: string;
    path: string;
  }[];
}

const NavLink = ({ href, title, isActive = false, hasDropdown = false, dropdownItems = [] }: NavLinkProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (hasDropdown) {
    return (
      <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
        <button 
          className="py-2 px-4 text-base tracking-wider flex items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className={`${isActive ? 'text-primary' : 'text-white group-hover:text-primary'}`}>{title}</span>
          <ChevronDownIcon className={`ml-1 h-4 w-4 ${isActive ? 'text-primary' : 'text-white group-hover:text-primary'}`} />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 z-50">
            {dropdownItems.map((item) => (
              <Link 
                key={item.id}
                href={item.path}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link 
      href={href}
      className={`py-2 px-4 text-base tracking-wider ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`}
    >
      {title}
    </Link>
  );
};

interface NavBarProps {
  data?: NavBarData;
}

const NavBar = ({ data = defaultData }: NavBarProps) => {
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
            <span className="text-primary">{data.logoText.charAt(0)}</span>{data.logoText.slice(1)}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            {data.navItems.map((item) => (
              <NavLink 
                key={item.id}
                href={item.path} 
                title={item.label} 
                isActive={activeLink === item.path}
                hasDropdown={item.hasDropdown}
                dropdownItems={item.dropdownItems}
              />
            ))}
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
              {data.navItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <>
                      <div className="py-2 text-white flex justify-between items-center">
                        <span>{item.label}</span>
                        <ChevronDownIcon className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-4">
                        {item.dropdownItems?.map((dropItem) => (
                          <Link 
                            key={dropItem.id}
                            href={dropItem.path} 
                            className="py-2 block text-white hover:text-primary" 
                            onClick={() => setIsOpen(false)}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link 
                      href={item.path} 
                      className="py-2 text-white hover:text-primary" 
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;