import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/common/PageHeader';
import Newsletter from '@/components/common/Newsletter';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const causes = [
  {
    id: 1,
    title: "Educação para crianças carentes",
    description: "Ajude a fornecer materiais escolares, uniformes e bolsas de estudo para crianças em situação de vulnerabilidade social. Sua contribuição nos ajuda a garantir que essas crianças permaneçam na escola e tenham acesso a oportunidades educacionais de qualidade.",
    image: "/img/causes-1.jpg",
    raised: 5750,
    goal: 10000,
  },
  {
    id: 2,
    title: "Água potável para todos",
    description: "Contribua para levar água limpa e potável para comunidades que sofrem com escassez hídrica em regiões remotas. Essa iniciativa ajuda a prevenir doenças relacionadas à água contaminada e melhora significativamente a qualidade de vida dessas populações.",
    image: "/img/causes-2.jpg",
    raised: 12250,
    goal: 15000,
  },
  {
    id: 3,
    title: "Alimentos para famílias vulneráveis",
    description: "Apoie nossa campanha de distribuição de cestas básicas para famílias em situação de insegurança alimentar. Com sua ajuda, podemos garantir que famílias em situação de vulnerabilidade tenham acesso a alimentos nutritivos e adequados.",
    image: "/img/causes-3.jpg",
    raised: 8430,
    goal: 20000,
  },
  {
    id: 4,
    title: "Saúde para comunidades carentes",
    description: "Ajude a financiar atendimento médico, medicamentos e campanhas de saúde em áreas sem acesso a serviços básicos. Sua doação permite que levemos cuidados médicos essenciais para populações marginalizadas e desassistidas.",
    image: "/img/causes-4.jpg",
    raised: 17500,
    goal: 25000,
  },
  {
    id: 5,
    title: "Reconstrução após desastres naturais",
    description: "Contribua para os esforços de reconstrução em comunidades afetadas por desastres naturais como enchentes, terremotos e furacões. Seus recursos ajudam famílias a reconstruírem suas casas e retomarem suas vidas após tragédias.",
    image: "/img/post-1.jpg",
    raised: 35000,
    goal: 50000,
  },
  {
    id: 6,
    title: "Apoio para idosos desamparados",
    description: "Ajude a proporcionar cuidados dignos para idosos em situação de abandono ou vulnerabilidade social. Com sua contribuição, podemos oferecer assistência médica, alimentação adequada e companhia para esses idosos.",
    image: "/img/post-2.jpg",
    raised: 9800,
    goal: 18000,
  },
];

const calculatePercentage = (raised: number, goal: number) => {
  return Math.min(Math.round((raised / goal) * 100), 100);
};

const CausesPage = () => {
  return (
    <Fragment>
      <MainLayout>
        <PageHeader 
          title="Causas" 
          breadcrumb={[
            { name: 'Home', link: '/' },
            { name: 'Causas', link: '/causes' },
          ]} 
        />
        
        <div className="py-10">
          <div className="container mx-auto px-4 lg:px-[60px]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-[45px] font-bold text-textDark mb-6">Nossas Principais Causas</h2>
              <p className="text-lg text-text">
                Conheça as principais causas que trabalhamos para melhorar a vida de pessoas em situação de vulnerabilidade. Cada uma dessas iniciativas busca resolver problemas específicos e criar um impacto positivo duradouro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {causes.map((cause) => (
                <div key={cause.id} className="overflow-hidden bg-light h-full mb-8">
                  <div className="causes-img overflow-hidden">
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      width={500}
                      height={300}
                      className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  <div className="p-[30px] pt-8">
                    <div className="mb-4">
                      <div className="relative h-[10px] bg-gray-300 rounded-sm overflow-visible mb-2">
                        <div 
                          className="absolute h-full bg-primary" 
                          style={{ width: `${calculatePercentage(cause.raised, cause.goal)}%` }}
                        >
                          <span className="absolute -top-8 right-0 h-6 px-2 py-0.5 bg-primary text-dark text-sm leading-normal after:absolute after:content-[''] after:w-0 after:h-0 after:top-6 after:left-1/2 after:-ml-1.5 after:border-solid after:border-[6px] after:border-t-primary after:border-r-transparent after:border-b-transparent after:border-l-transparent">
                            {calculatePercentage(cause.raised, cause.goal)}%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <p>Arrecadado: R$ {cause.raised.toLocaleString()}</p>
                        <p>Meta: R$ {cause.goal.toLocaleString()}</p>
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-textDark mb-3">{cause.title}</h3>
                    <p className="mb-6">{cause.description}</p>

                    <div className="flex">
                      <Link 
                        href={`/causes/${cause.id}`} 
                        className="w-1/2 py-2.5 text-center border-t border-r border-gray-200 hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        Saiba Mais
                      </Link>
                      <Link 
                        href="/donate" 
                        className="w-1/2 py-2.5 text-center border-t border-gray-200 bg-primary text-dark hover:text-white transition-all duration-300"
                      >
                        Doe Agora
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Newsletter />
      </MainLayout>
    </Fragment>
  );
};

export default CausesPage;