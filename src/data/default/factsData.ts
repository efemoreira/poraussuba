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
  sectionTitle: 'Poraussuba em Números',
  sectionSubtitle: 'O Impacto da Nossa Iniciativa',
  description: 'Nossa campanha de coleta de assinaturas está crescendo cada dia mais. Para protocolar nossa lei de iniciativa popular, precisamos de 88.500 assinaturas, que representam 5% dos eleitores de Fortaleza. Com sua ajuda, podemos transformar a saúde escolar em nossa cidade.',
  imagePath: '/img/facts.jpg',
  buttonText: 'Saiba Mais',
  buttonLink: '/about',
  facts: [
    {
      id: 1,
      icon: 'fa fa-users',
      count: 12345,
      title: 'Apoiadores',
    },
    {
      id: 2,
      icon: 'fa fa-map-marker-alt',
      count: 42,
      title: 'Bairros Alcançados',
    },
    {
      id: 3,
      icon: 'fa fa-hands-helping',
      count: 124,
      title: 'Voluntários',
    },
    {
      id: 4,
      icon: 'fa fa-file-signature',
      count: 88500,
      title: 'Assinaturas Necessárias',
    },
  ]
};

export default factsData;