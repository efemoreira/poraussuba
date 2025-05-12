export interface CarouselSlide {
  id: number;
  imagePath: string;
  title: string;
  subtitle: string;
  description: string;
  buttons: CarouselButton[];
}

export interface CarouselButton {
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
      title: 'Juntos, fazemos a cidade funcionar',
      subtitle: 'Nós temos o poder de mudar as coisas.',
      description: 'Com 5% dos eleitores, podemos apresentar uma lei para cuidar das nossas crianças. A cidade não precisa esperar por políticos – ela precisa de você.',
      buttons: [
        { buttonText: 'Entenda Sobre', buttonLink: '/donate' },
        { buttonText: 'Quero Assinar', buttonLink: '/volunteer' },
      ],
    },
    {
      id: 2,
      imagePath: '/img/carousel-2.jpg',
      title: 'Nossas crianças merecem cuidado',
      subtitle: 'Uma vez por mês, toda criança da cidade pode ser cuidada.',
      description: 'Com uma lei de iniciativa popular, garantimos acompanhamento médico, educação em saúde e mais futuro para elas.',
      buttons: [
        { buttonText: 'Conheça a Lei', buttonLink: '/donate' },
        { buttonText: 'Quero Assinar', buttonLink: '/volunteer' },
      ],
    },
    {
      id: 3,
      imagePath: '/img/carousel-3.jpg',
      title: 'Desafio Popular: Somos mais fortes que a indiferença',
      subtitle: 'O ódio e a divisão não nos definem.',
      description: 'Vamos mostrar que o senso de comunidade é maior do que qualquer ideologia. Se 89 mil se unirem, criamos juntos uma lei de verdade.',
      buttons: [
        { buttonText: 'Faça Parte', buttonLink: '/donate' },
        { buttonText: 'Quero Assinar', buttonLink: '/volunteer' },
      ],
    },
  ],
  autoplay: true,
  delay: 10000
};

export default carouselData;