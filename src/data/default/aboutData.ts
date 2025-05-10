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
  subtitle: 'Uma iniciativa popular por melhor saúde nas escolas de Fortaleza',
  imagePath: '/img/about.jpg',
  imageAlt: 'Sobre o projeto Poraussuba',
  tabs: {
    'Nossa Missão': [
      {
        id: 1,
        content: `Nossa missão é mobilizar os cidadãos de Fortaleza para aprovar uma lei de iniciativa popular que 
                estabeleça a realização mensal de ações de saúde nas escolas públicas municipais. Queremos demonstrar 
                que a população tem força para criar mudanças sem depender exclusivamente de políticos.`,
      },
    ],
    'Nossa Visão': [
      {
        id: 1,
        content: `Buscamos uma Fortaleza onde as crianças recebam acompanhamento médico regular nas escolas, 
                com nutricionistas, endocrinologistas e outros profissionais de saúde monitorando seu desenvolvimento. 
                Acreditamos que esta iniciativa pode transcender disputas políticas entre esquerda e direita, 
                unindo a população em torno do bem-estar infantil.`,
      },
    ],
    'Nossos Valores': [
      {
        id: 1,
        content: `Nossos valores fundamentais incluem participação cidadã, transparência no processo democrático, 
                cuidado com a saúde infantil, e a crença de que o povo pode e deve ser protagonista das mudanças 
                sociais que deseja ver. Rejeitamos o populismo e as polarizações políticas em favor da ação direta 
                e colaborativa.`,
      },
    ],
  },
  achievementTitle: 'Nosso Progresso',
  achievements: [
    'Projeto de lei estruturado e validado juridicamente',
    'Plataforma de mobilização digital desenvolvida',
    'Parcerias com profissionais de saúde estabelecidas',
    'Rede de voluntários em formação'
  ],
  buttonText: 'Saiba Mais',
  buttonLink: '/about'
};

export default aboutData;