export interface Cause {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  targetAmount: number;
  currentAmount: number;
  buttonText: string;
  buttonLink: string;
}

export interface CausesData {
  sectionTitle: string;
  sectionSubtitle: string;
  causes: Cause[];
}

const causesData: CausesData = {
  sectionTitle: 'Nossas Causas',
  sectionSubtitle: 'Motivos Para Apoiar Nossa Iniciativa',
  causes: [
    {
      id: 1,
      title: 'Justiça Social',
      description: 'Nossa proposta de lei visa garantir maior igualdade social e acesso a direitos básicos para todos os cidadãos brasileiros.',
      imagePath: '/img/causes-1.jpg',
      targetAmount: 10000,
      currentAmount: 7350,
      buttonText: 'Assinar Agora',
      buttonLink: '/causes',
    },
    {
      id: 2,
      title: 'Transparência Pública',
      description: 'Buscamos estabelecer mecanismos mais eficientes de transparência na gestão pública e nas decisões governamentais.',
      imagePath: '/img/causes-2.jpg',
      targetAmount: 10000,
      currentAmount: 5820,
      buttonText: 'Assinar Agora',
      buttonLink: '/causes',
    },
    {
      id: 3,
      title: 'Participação Cidadã',
      description: 'Esta lei fortalecerá os canais de participação popular nas decisões políticas que afetam diretamente a vida dos cidadãos.',
      imagePath: '/img/causes-3.jpg',
      targetAmount: 10000,
      currentAmount: 4370,
      buttonText: 'Assinar Agora',
      buttonLink: '/causes',
    },
    {
      id: 4,
      title: 'Reforma Institucional',
      description: 'Promover mudanças estruturais nas instituições públicas para torná-las mais eficientes e próximas do cidadão.',
      imagePath: '/img/causes-4.jpg',
      targetAmount: 10000,
      currentAmount: 3250,
      buttonText: 'Assinar Agora',
      buttonLink: '/causes',
    }
  ]
};

export default causesData;