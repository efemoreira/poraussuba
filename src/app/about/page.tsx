import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/common/PageHeader';
import AboutSection from '@/components/home/About';
import FactsSection from '@/components/home/Facts';
import TeamSection from '@/components/home/Team';

const AboutPage = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Sobre Nós" 
        breadcrumb={[
          { name: 'Home', link: '/' },
          { name: 'Sobre Nós', link: '/about' },
        ]} 
      />
      <AboutSection />
      <FactsSection />
      <TeamSection />
    </MainLayout>
  );
};

export default AboutPage;