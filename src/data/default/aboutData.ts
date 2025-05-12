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
  subtitle: 'Poder para transformar sua cidade',
  imagePath: '/img/about.jpg',
  imageAlt: 'Sobre o projeto Poraussuba',
  tabs: {
    'O Início': [
      {
        id: 1,
        content: `Somos um movimento cidadão que nasce do desejo de reunir pessoas comuns para criar soluções reais. Poraussuba nasceu da ideia simples de que a população tem poder para transformar sua cidade — sem esperar por eleições ou promessas políticas.`,
      },
    ],
    'Nossa Visão': [
      {
        id: 1,
        content: `Nós acreditamos na força da comunidade, na participação direta e na capacidade que cada pessoa tem de fazer parte da mudança, mostrando que o povo pode fazer política com propósito, superando divisões ideológicas e fortalecendo o senso de comunidade.`,
      },
    ],
    'Nossa Missão': [
      {
        id: 1,
        content: `Mobilizar a população para transformar a realidade local por meio da criação de leis de iniciativa popular que atendam às necessidades coletivas, com foco no cuidado, na justiça e na participação cidadã. Transformando a cidade por meio da participação direta da população na criação de leis.`,
      },
    ],
  },
  achievementTitle: 'Nosso Valores',
  achievements: [
    'Participação cidadã',
    'Transparência no processo democrático',
    'O povo pode e deve ser protagonista das mudanças sociais que deseja ver',
  ],
  buttonText: 'Saiba Mais',
  buttonLink: '#how-it-works',
};

export default aboutData;