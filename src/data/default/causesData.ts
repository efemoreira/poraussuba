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
  sectionSubtitle: 'Por Que Lutamos Por Essa Lei',
  causes: [
    {
      id: 1,
      title: 'Saúde Preventiva',
      description: 'Nossa proposta visa estabelecer ações mensais de saúde em escolas públicas de Fortaleza, permitindo identificar precocemente problemas de saúde nas crianças.',
      imagePath: '/img/causes-1.jpg',
      targetAmount: 88500,
      currentAmount: 12350,
      buttonText: 'Assinar Agora',
      buttonLink: '/causes',
    },
    {
      id: 2,
      title: 'Acompanhamento Nutricional',
      description: 'Com a presença regular de nutricionistas nas escolas, podemos combater problemas de desnutrição e obesidade infantil desde cedo.',
      imagePath: '/img/causes-2.jpg',
      targetAmount: 88500,
      currentAmount: 12350,
      buttonText: 'Assinar Agora',
      buttonLink: '/causes',
    },
    {
      id: 3,
      title: 'Democracia Participativa',
      description: 'Esta iniciativa mostra que o povo pode ser protagonista de mudanças, superando a polarização política e o populismo através da ação cidadã direta.',
      imagePath: '/img/causes-3.jpg',
      targetAmount: 88500,
      currentAmount: 12350,
      buttonText: 'Assinar Agora',
      buttonLink: '/causes',
    },
    {
      id: 4,
      title: 'Educação em Saúde',
      description: 'Além do acompanhamento médico, a presença de profissionais de saúde nas escolas permite a educação das crianças sobre hábitos saudáveis.',
      imagePath: '/img/causes-4.jpg',
      targetAmount: 88500,
      currentAmount: 12350,
      buttonText: 'Assinar Agora',
      buttonLink: '/causes',
    }
  ]
};

export default causesData;