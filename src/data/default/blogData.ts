export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imagePath: string;
  link: string;
}

export interface BlogSectionData {
  sectionTitle: string;
  sectionSubtitle: string;
  buttonText: string;
  buttonLink: string;
  posts: BlogPost[];
}

const blogData: BlogSectionData = {
  sectionTitle: "Nosso Blog",
  sectionSubtitle: "Atualizações sobre a Campanha Poraussuba",
  buttonText: "Ver Todos os Artigos",
  buttonLink: "/blog",
  posts: [
    {
      id: 1,
      title: "Saúde nas escolas: um direito de todas as crianças de Fortaleza",
      excerpt: "Entenda como nossa proposta de lei pode transformar a vida de milhares de crianças nas escolas municipais, garantindo acompanhamento médico regular e preventivo.",
      date: "05 Maio 2025",
      author: "Felipe Moreira",
      category: "Saúde",
      imagePath: "/img/blog-1.jpg",
      link: "/blog/1"
    },
    {
      id: 2,
      title: "Como a participação cidadã pode transformar políticas públicas",
      excerpt: "A iniciativa Poraussuba demonstra que o povo pode ser protagonista de mudanças significativas sem esperar pelos políticos tradicionais.",
      date: "28 Abril 2025",
      author: "Dra. Mariana Costa",
      category: "Cidadania",
      imagePath: "/img/blog-2.jpg",
      link: "/blog/2"
    },
    {
      id: 3,
      title: "Nutrição infantil nas escolas públicas: um desafio para Fortaleza",
      excerpt: "Análise dos problemas nutricionais enfrentados pelos estudantes da rede municipal e como nossa proposta pretende abordá-los com acompanhamento mensal.",
      date: "19 Abril 2025",
      author: "Prof. Roberto Alves",
      category: "Nutrição",
      imagePath: "/img/blog-3.jpg",
      link: "/blog/3"
    }
  ]
};

export default blogData;