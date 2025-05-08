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
      title: 'Apoie Nossa Causa',
      subtitle: 'Juntos Por Um Futuro Melhor',
      description: 'Estamos trabalhando para criar mudanças duradouras nas comunidades mais necessitadas do Brasil',
      buttonText: 'Assine Agora',
      buttonLink: '/donate',
    },
    {
      id: 2,
      imagePath: '/img/carousel-2.jpg',
      title: 'Sua Assinatura é Importante',
      subtitle: 'Cada Assinatura Conta',
      description: 'Junte-se a nós nessa mobilização por mudanças sociais significativas em todo o país',
      buttonText: 'Saiba Mais',
      buttonLink: '/causes',
    },
    {
      id: 3,
      imagePath: '/img/carousel-3.jpg',
      title: 'Faça a Diferença',
      subtitle: 'Transforme Vidas Com Sua Ação',
      description: 'Sua participação é essencial para alcançarmos o número de assinaturas necessário',
      buttonText: 'Participe',
      buttonLink: '/volunteer',
    }
  ],
  autoplay: true,
  delay: 5000
};

export default carouselData;