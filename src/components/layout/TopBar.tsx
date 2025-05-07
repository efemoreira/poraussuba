'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[45px] z-10 border-b border-white/30">
      <div className="container mx-auto px-4 lg:px-[60px] h-full">
        <div className="flex justify-between items-center h-full">
          {/* Top Bar Left */}
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-center h-[45px] px-[10px] text-center border-l border-white/30">
              <FaEnvelope className="text-primary mr-[5px] text-base" />
              <p className="text-white text-base font-medium m-0">info@example.com</p>
            </div>
            <div className="flex items-center justify-center h-[45px] px-[10px] text-center border-l border-white/30">
              <FaPhone className="text-primary mr-[5px] text-base" />
              <p className="text-white text-base font-medium m-0">+012 345 6789</p>
            </div>
          </div>
          
          {/* Top Bar Right */}
          <div className="flex items-center justify-end">
            <div className="flex items-center justify-center h-[45px] px-[10px] text-center border-l border-white/30 border-r border-white/30">
              <FaMapMarkerAlt className="text-primary mr-[5px] text-base" />
              <p className="text-white text-base font-medium m-0">123 Street, Cidade</p>
            </div>
            <div className="flex h-[45px]">
              <a href="#" className="flex items-center justify-center w-[45px] h-full text-primary border-r border-white/30 hover:bg-primary hover:text-white transition-all">
                <FaFacebookF className="text-base" />
              </a>
              <a href="#" className="flex items-center justify-center w-[45px] h-full text-primary border-r border-white/30 hover:bg-primary hover:text-white transition-all">
                <FaTwitter className="text-base" />
              </a>
              <a href="#" className="flex items-center justify-center w-[45px] h-full text-primary border-r border-white/30 hover:bg-primary hover:text-white transition-all">
                <FaLinkedinIn className="text-base" />
              </a>
              <a href="#" className="flex items-center justify-center w-[45px] h-full text-primary border-r border-white/30 hover:bg-primary hover:text-white transition-all">
                <FaInstagram className="text-base" />
              </a>
              <a href="#" className="flex items-center justify-center w-[45px] h-full text-primary border-r border-white/30 hover:bg-primary hover:text-white transition-all">
                <FaYoutube className="text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;