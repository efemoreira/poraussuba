export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  imagePath: string;
}

export interface TestimonialData {
  sectionTitle: string;
  sectionSubtitle: string;
  testimonials: Testimonial[];
  bgImagePath?: string;
}

const testimonialData: TestimonialData = {
  sectionTitle: "Depoimentos",
  sectionSubtitle: "O Que Dizem Sobre Nossa Iniciativa",
  bgImagePath: "/img/page-header.jpg",
  testimonials: [
    {
      id: 1,
      name: "Dra. Ana Sousa",
      role: "Pediatra",
      content: "Como médica, vejo diariamente como a falta de acompanhamento preventivo afeta a saúde das crianças. Esta lei de iniciativa popular pode transformar a saúde infantil em Fortaleza, identificando problemas precocemente.",
      imagePath: "/img/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Francisco Oliveira",
      role: "Diretor de Escola Municipal",
      content: "Em nossa escola, muitos alunos faltam às aulas por problemas de saúde que poderiam ser evitados com acompanhamento regular. Ter profissionais de saúde mensalmente na escola seria revolucionário.",
      imagePath: "/img/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Júlia Mendes",
      role: "Mãe de aluno",
      content: "Como mãe que trabalha o dia todo, é difícil levar meu filho regularmente ao médico. Saber que ele teria acompanhamento de saúde na própria escola me traria muita tranquilidade.",
      imagePath: "/img/testimonial-3.jpg"
    },
    {
      id: 4,
      name: "Prof. Roberto Alves",
      role: "Nutricionista",
      content: "A obesidade infantil é um problema crescente em Fortaleza. Um acompanhamento nutricional regular nas escolas pode mudar esse cenário e criar hábitos saudáveis que durarão toda a vida.",
      imagePath: "/img/testimonial-4.jpg"
    }
  ]
};

export default testimonialData;