'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulando uma chamada de API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribed(true);
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-light py-12">
      <div className="container mx-auto px-4 lg:px-[60px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-textDark mb-4">Assine Nossa Newsletter</h2>
          <p className="text-text mb-8">
            Receba atualizações sobre nossos projetos, eventos e campanhas diretamente na sua caixa de entrada.
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
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email" 
                className="flex-grow px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                required
              />
              <button 
                type="submit"
                disabled={loading}
                className={`px-6 py-3 bg-primary text-white hover:bg-secondary transition-colors whitespace-nowrap ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Inscrevendo...' : 'Inscrever-se'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;