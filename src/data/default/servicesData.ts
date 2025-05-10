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
    {
      id: 4,
      title: 'Saúde Escolar Integral',
      description: 'Atendimento médico regular dentro do ambiente escolar, facilitando o acesso à saúde e reduzindo a evasão por problemas de saúde não tratados.',
      icon: 'donation'
    },
    {
      id: 5,
      title: 'Participação Cidadã',
      description: 'Demonstração do poder da iniciativa popular, mostrando que a população pode ser protagonista das mudanças que deseja ver, sem depender apenas de políticos.',
      icon: 'scholarship'
    },
    {
      id: 6,
      title: 'Superação da Polarização',
      description: 'Uma causa que une a população além de divisões políticas entre esquerda e direita, focando no bem-estar das crianças de Fortaleza.',
      icon: 'social-control'
    }
  ]
};

export default servicesData;