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
      name: "Marta Silva",
      role: "Professora",
      content: "Como educadora, acredito no poder da transparência para transformar nossa democracia. Assinar essa proposta foi uma forma de contribuir para um Brasil melhor para as futuras gerações.",
      imagePath: "/img/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Carlos Ferreira",
      role: "Empresário",
      content: "O setor privado também ganha com mais transparência na gestão pública. Esta iniciativa representa um passo importante para criar um ambiente de negócios mais justo e previsível no Brasil.",
      imagePath: "/img/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Júlia Mendonça",
      role: "Estudante de Direito",
      content: "Como futura advogada, reconheço a importância de mecanismos legais que fortaleçam a participação cidadã. Esta proposta tem potencial para revolucionar o controle social no país.",
      imagePath: "/img/testimonial-3.jpg"
    },
    {
      id: 4,
      name: "Roberto Alves",
      role: "Aposentado",
      content: "Após décadas vendo como a falta de transparência prejudica nosso país, finalmente temos uma iniciativa concreta para mudar isso. Assinei com orgulho e estou divulgando para todos os meus contatos.",
      imagePath: "/img/testimonial-4.jpg"
    }
  ]
};

export default testimonialData;