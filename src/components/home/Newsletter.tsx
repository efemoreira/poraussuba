'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import defaultData from '@/data/default/newsletterData';
import type { NewsletterData } from '@/data/default/newsletterData';
import Image from 'next/image';

interface NewsletterProps {
  data?: NewsletterData;
}

const Newsletter = ({ data = defaultData }: NewsletterProps) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulando uma chamada de API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribed(true);
      setEmail('');
      setAcceptTerms(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-light py-12">
      {data.bgImagePath && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={data.bgImagePath}
              alt="Newsletter background"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10"></div>
          </div>
        </>
      )}
      
      <div className={`container mx-auto px-4 lg:px-[60px] ${data.bgImagePath ? 'relative z-20' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center"
        >
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${data.bgImagePath ? 'text-white' : 'text-textDark'}`}>{data.title}</h2>
          <p className={`mb-8 ${data.bgImagePath ? 'text-white' : 'text-text'}`}>
            {data.subtitle}
          </p>

          {subscribed ? (
            <div className="bg-white p-6 shadow-md">
              <div className="text-primary text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-textDark mb-2">Inscrição Realizada!</h3>
              <p className="mb-4">Obrigado por se inscrever em nossa newsletter.</p>
              <button 
                onClick={() => setSubscribed(false)}
                className="px-6 py-2 bg-primary text-white hover:bg-secondary transition-colors"
              >
                Inscrever outro email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={data.placeholderText} 
                  className="flex-grow px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                  required
                />
                <button 
                  type="submit"
                  disabled={loading || !acceptTerms}
                  className={`px-6 py-3 bg-primary text-dark hover:bg-secondary transition-colors whitespace-nowrap ${
                    (loading || !acceptTerms) ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Inscrevendo...' : data.buttonText}
                </button>
              </div>
              <div className="flex items-center justify-center mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                  className="mr-2"
                  required
                />
                <label htmlFor="terms" className={`text-sm ${data.bgImagePath ? 'text-white' : 'text-gray-600'}`}>
                  {data.termsText}
                </label>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;