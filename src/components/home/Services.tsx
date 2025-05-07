'use client';

import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaHandsHelping, FaBookReader, FaHeartbeat, FaHome, FaGraduationCap } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaHandHoldingHeart className="text-primary text-[60px]" />,
    title: "Ajuda Humanitária",
    description: "Fornecemos suporte emergencial para pessoas em situações de desastre, conflito ou extrema pobreza, garantindo acesso a alimentos, água e abrigo.",
  },
  {
    id: 2,
    icon: <FaHeartbeat className="text-primary text-[60px]" />,
    title: "Saúde Básica",
    description: "Promovemos acesso a cuidados médicos essenciais, vacinação e educação em saúde para comunidades carentes e sem acesso ao sistema de saúde.",
  },
  {
    id: 3,
    icon: <FaBookReader className="text-primary text-[60px]" />,
    title: "Educação Infantil",
    description: "Desenvolvemos programas educacionais para crianças vulneráveis, oferecendo oportunidades de aprendizagem e desenvolvimento pessoal.",
  },
  {
    id: 4,
    icon: <FaHome className="text-primary text-[60px]" />,
    title: "Moradia Segura",
    description: "Ajudamos a construir e reformar moradias seguras para famílias em situação de vulnerabilidade, garantindo um ambiente digno para viver.",
  },
  {
    id: 5,
    icon: <FaHandsHelping className="text-primary text-[60px]" />,
    title: "Suporte Comunitário",
    description: "Desenvolvemos iniciativas comunitárias para fortalecer os laços sociais e a resiliência de comunidades em situação de vulnerabilidade.",
  },
  {
    id: 6,
    icon: <FaGraduationCap className="text-primary text-[60px]" />,
    title: "Bolsas de Estudo",
    description: "Oferecemos bolsas de estudo para jovens talentosos com poucos recursos, dando-lhes a oportunidade de acessar educação superior de qualidade.",
  },
];

const Services = () => {
  return (
    <section className="relative w-full py-[45px] px-4 lg:px-[60px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center mb-12"
        >
          <p className="mb-1 text-xl lg:text-2xl font-semibold text-primary">O Que Fazemos</p>
          <h2 className="text-3xl lg:text-[45px] font-bold text-textDark">Acreditamos que podemos salvar mais vidas com você</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex mb-8"
            >
              <div className="w-[60px] flex-shrink-0">
                {service.icon}
              </div>

              <div className="relative ml-[20px] pl-[20px] before:absolute before:content-[''] before:w-[1px] before:h-[calc(100%-10px)] before:top-[5px] before:left-0 before:bg-black/10 after:absolute after:content-[''] after:w-[3px] after:h-[40px] after:top-[calc(50%-20px)] after:left-[-1px] after:bg-primary">
                <h3 className="mb-[10px] text-xl lg:text-2xl font-bold tracking-wide text-textDark">{service.title}</h3>
                <p className="m-0">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;