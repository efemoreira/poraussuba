'use client';

import { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando o carregamento da página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-white z-[999] transition-all duration-600 ${
        loading ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div 
        className="relative w-[45px] h-[45px] border-4 border-gray-300 border-t-primary rounded-full animate-spin"
      />
    </div>
  );
};

export default Loader;