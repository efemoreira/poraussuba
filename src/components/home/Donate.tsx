'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const DonateSection = () => {
  const [activeAmount, setActiveAmount] = useState('100');
  
  const amounts = ['10', '20', '30', '50', '100', 'Custom'];

  return (
    <section className="relative w-full my-[45px] bg-black/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Donate Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-[45px] px-4 lg:px-[60px] lg:pb-[15px]"
          >
            <div className="max-w-[700px] mb-[30px]">
              <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">Doe Agora</p>
              <h2 className="text-3xl lg:text-[45px] font-bold text-white">Vamos fazer a diferença na vida de outros</h2>
            </div>
            
            <div className="text-white text-lg mb-6">
              <p>
                Sua doação ajuda diretamente pessoas em situação de vulnerabilidade. Com sua contribuição, podemos 
                fornecer alimentos, abrigo, educação e cuidados médicos para quem mais precisa. Cada doação, 
                independentemente do valor, faz uma enorme diferença na vida de alguém.
              </p>
              <p className="mt-4">
                Todos os recursos são utilizados com transparência e eficiência, garantindo o máximo impacto possível. 
                Juntos, podemos construir um mundo mais justo e solidário.
              </p>
            </div>
          </motion.div>
          
          {/* Donate Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="py-[90px] px-[30px] bg-primary"
          >
            <div className="mb-4">
              <input 
                type="text" 
                className="w-full h-[60px] text-white p-4 bg-transparent border border-white placeholder-white focus:outline-none mb-4" 
                placeholder="Nome"
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                className="w-full h-[60px] text-white p-4 bg-transparent border border-white placeholder-white focus:outline-none mb-4" 
                placeholder="Email"
              />
            </div>
            
            {/* Amount Buttons */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setActiveAmount(amount)}
                  className={`py-[15px] h-[60px] text-center w-full border border-white transition-all ${
                    activeAmount === amount 
                      ? 'bg-white text-primary' 
                      : 'bg-transparent text-white hover:bg-white hover:text-primary'
                  }`}
                >
                  {amount !== 'Custom' ? `$${amount}` : amount}
                </button>
              ))}
            </div>
            
            {/* Custom Amount Input (shown only if 'Custom' is selected) */}
            {activeAmount === 'Custom' && (
              <div className="mb-4">
                <input 
                  type="number" 
                  className="w-full h-[60px] text-white p-4 bg-transparent border border-white placeholder-white focus:outline-none" 
                  placeholder="Valor personalizado"
                />
              </div>
            )}
            
            {/* Submit Button */}
            <button className="w-full py-[15px] h-[60px] text-white border border-white hover:bg-white hover:text-primary transition-all">
              Doar Agora
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;