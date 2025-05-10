export interface CarouselSlide {
  id: number;
  imagePath: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface CarouselData {
  slides: CarouselSlide[];
  autoplay: boolean;
  delay: number;
}

const carouselData: CarouselData = {
  slides: [
    {
      id: 1,
      imagePath: '/img/carousel-1.jpg',
      title: 'Saúde nas Escolas de Fortaleza',
      subtitle: 'Uma iniciativa popular por nossas crianças',
      description: 'Precisamos de 88.500 assinaturas para protocolar nossa lei de iniciativa popular',
      buttonText: 'Participe Agora',
      buttonLink: '/donate',
    },
    {
      id: 2,
      imagePath: '/img/carousel-2.jpg',
      title: 'O Poder está nas Mãos do Povo',
      subtitle: '5% dos eleitores podem mudar Fortaleza',
      description: 'Juntos podemos garantir acompanhamento médico mensal nas escolas públicas municipais',
      buttonText: 'Saiba Mais',
      buttonLink: '/causes',
    },
    {
      id: 3,
      imagePath: '/img/carousel-3.jpg',
      title: 'Por um Futuro Mais Saudável',
      subtitle: 'Nutricionistas e Endocrinologistas nas Escolas',
      description: 'Acompanhamento médico regular para o desenvolvimento saudável das crianças de Fortaleza',
      buttonText: 'Como Funciona',
      buttonLink: '/volunteer',
    }
  ],
  autoplay: true,
  delay: 5000
};

export default carouselData;