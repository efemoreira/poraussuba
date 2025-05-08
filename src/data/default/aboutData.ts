export interface AboutTabContent {
  id: number;
  content: string;
}

export interface AboutTabs {
  [key: string]: AboutTabContent[];
}

export interface AboutData {
  title: string;
  subtitle: string;
  imagePath: string;
  imageAlt: string;
  tabs: AboutTabs;
  achievementTitle: string;
  achievements: string[];
  buttonText: string;
  buttonLink: string;
}

const aboutData: AboutData = {
  title: 'Sobre Nós',
  subtitle: 'Ajudando os não privilegiados há 20 anos',
  imagePath: '/img/about.jpg',
  imageAlt: 'Sobre nossa organização',
  tabs: {
    'Nossa Missão': [
      {
        id: 1,
        content: `Nossa missão é fornecer ajuda humanitária para crianças, adultos e famílias em situação de vulnerabilidade. 
                Trabalhamos para criar oportunidades, levar esperança e transformar vidas através de programas educacionais, 
                assistência médica e apoio comunitário.`,
      },
    ],
    'Nossa Visão': [
      {
        id: 1,
        content: `Buscamos um mundo onde todas as pessoas tenham acesso a necessidades básicas, oportunidades de desenvolvimento 
                e possam viver com dignidade. Acreditamos em construir uma sociedade mais justa e igualitária, onde ninguém seja 
                deixado para trás.`,
      },
    ],
    'Nossos Valores': [
      {
        id: 1,
        content: `Nossos valores fundamentais incluem respeito pela dignidade humana, transparência em nossas ações, 
                responsabilidade com nossos doadores e beneficiários, eficiência na gestão de recursos e comprometimento 
                com resultados de longo prazo que promovam mudanças duradouras.`,
      },
    ],
  },
  achievementTitle: 'Nossas Conquistas',
  achievements: [
    'Mais de 10.000 crianças beneficiadas',
    'Centenas de comunidades assistidas',
    'Programas educacionais reconhecidos',
    'Transparência e eficiência na gestão de recursos'
  ],
  buttonText: 'Saiba Mais',
  buttonLink: '/about'
};

export default aboutData;