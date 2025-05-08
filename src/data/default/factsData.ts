export interface Fact {
  id: number;
  icon: string;
  count: number;
  title: string;
  suffix?: string;
  prefix?: string;
}

export interface FactsData {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  imagePath: string;
  buttonText: string;
  buttonLink: string;
  facts: Fact[];
}

const factsData: FactsData = {
  sectionTitle: 'Nossa Campanha em Números',
  sectionSubtitle: 'O Impacto da Nossa Iniciativa',
  description: 'Nossa campanha de coleta de assinaturas para aprovação da lei está crescendo a cada dia. Confira abaixo alguns números que demonstram a força do nosso movimento e o impacto que estamos tendo em todo o Brasil.',
  imagePath: '/img/facts.jpg',
  buttonText: 'Saiba Mais',
  buttonLink: '/about',
  facts: [
    {
      id: 1,
      icon: 'fa fa-users',
      count: 12345,
      title: 'Assinantes',
    },
    {
      id: 2,
      icon: 'fa fa-map-marker-alt',
      count: 345,
      title: 'Cidades Alcançadas',
    },
    {
      id: 3,
      icon: 'fa fa-hands-helping',
      count: 1234,
      title: 'Voluntários',
    },
    {
      id: 4,
      icon: 'fa fa-clock',
      count: 24,
      title: 'Horas Diárias de Trabalho',
    },
  ]
};

export default factsData;