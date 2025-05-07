import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/common/PageHeader';
import DonateSection from '@/components/home/Donate';
import CausesSection from '@/components/home/Causes';
import { Fragment } from 'react';

const DonatePage = () => {
  return (
    <Fragment>
      <MainLayout>
        <PageHeader 
          title="Doações" 
          breadcrumb={[
            { name: 'Home', link: '/' },
            { name: 'Doações', link: '/donate' },
          ]} 
        />
        <div className="py-10">
          <div className="container mx-auto px-4 lg:px-[60px]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-[45px] font-bold text-textDark mb-6">Faça uma doação e transforme vidas</h2>
              <p className="text-lg text-text">
                Sua generosidade pode transformar a vida de famílias inteiras. Escolha abaixo a forma de doação que melhor se encaixa para você, seja uma contribuição única ou recorrente. Cada valor, independente do montante, é extremamente valioso para nossa causa.
              </p>
            </div>
          </div>
        </div>
        <DonateSection />
        <CausesSection />
      </MainLayout>
    </Fragment>
  );
};

export default DonatePage;