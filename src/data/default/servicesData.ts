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
      title: 'Transparência na Gestão Pública',
      description: 'Nossa proposta estabelece mecanismos mais rigorosos para garantir transparência nos gastos e decisões governamentais, facilitando o acesso do cidadão às informações públicas.',
      icon: 'health'
    },
    {
      id: 2,
      title: 'Participação Cidadã',
      description: 'Fortalecimento dos instrumentos de democracia participativa, permitindo maior envolvimento da população nas decisões políticas que afetam diretamente suas vidas.',
      icon: 'education'
    },
    {
      id: 3,
      title: 'Responsabilidade Fiscal',
      description: 'Estabelecimento de limites mais rígidos para gastos públicos e utilização de recursos, promovendo maior responsabilidade na gestão financeira governamental.',
      icon: 'housing'
    },
    {
      id: 4,
      title: 'Combate à Corrupção',
      description: 'Implementação de mecanismos mais eficientes para identificar e punir práticas de corrupção, com processos mais ágeis e punições mais severas.',
      icon: 'donation'
    },
    {
      id: 5,
      title: 'Modernização Administrativa',
      description: 'Digitalização de processos e desburocratização da máquina pública, tornando os serviços governamentais mais eficientes e acessíveis ao cidadão.',
      icon: 'scholarship'
    },
    {
      id: 6,
      title: 'Controle Social',
      description: 'Fortalecimento de canais de fiscalização e controle pela sociedade civil, garantindo que o poder público atue sempre em prol do interesse coletivo.',
      icon: 'social-control'
    }
  ]
};

export default servicesData;