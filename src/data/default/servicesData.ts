export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServicesData {
  sectionTitle: string;
  sectionSubtitle: string;
  services: Service[];
}

const servicesData: ServicesData = {
  sectionTitle: 'Benefícios da Lei',
  sectionSubtitle: 'O Que Nossa Iniciativa Legislativa Propõe',
  services: [
    {
      id: 1,
      title: 'Atendimento Nutricional',
      description: 'Acompanhamento mensal por nutricionistas nas escolas públicas para monitorar o desenvolvimento e combater problemas como obesidade e desnutrição infantil.',
      icon: 'health'
    },
    {
      id: 2,
      title: 'Avaliação Endocrinológica',
      description: 'Endocrinologistas acompanhando o crescimento e desenvolvimento hormonal das crianças, identificando precocemente possíveis distúrbios.',
      icon: 'education'
    },
    {
      id: 3,
      title: 'Prevenção em Saúde',
      description: 'Ações preventivas mensais para identificar problemas de saúde antes que se agravem, garantindo o bem-estar e desenvolvimento adequado das crianças.',
      icon: 'housing'
    },
  ]
};

export default servicesData;