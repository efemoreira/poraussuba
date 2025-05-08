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
  sectionSubtitle: "Leia Nossos Artigos Sobre a Campanha por Transparência",
  buttonText: "Ver Todos os Artigos",
  buttonLink: "/blog",
  posts: [
    {
      id: 1,
      title: "Como uma lei de transparência pode transformar a gestão pública",
      excerpt: "Uma análise detalhada sobre como nossa proposta de lei pode impactar positivamente a gestão dos recursos públicos e aumentar a participação cidadã.",
      date: "05 Maio 2025",
      author: "Dra. Carolina Mendes",
      category: "Política",
      imagePath: "/img/blog-1.jpg",
      link: "/blog/1"
    },
    {
      id: 2,
      title: "O papel da sociedade civil na fiscalização dos gastos públicos",
      excerpt: "Entenda como os cidadãos comuns podem se tornar agentes de fiscalização e controle social após a aprovação da nova lei de transparência.",
      date: "28 Abril 2025",
      author: "Prof. Ricardo Almeida",
      category: "Cidadania",
      imagePath: "/img/blog-2.jpg",
      link: "/blog/2"
    },
    {
      id: 3,
      title: "O que podemos aprender com outros países sobre transparência?",
      excerpt: "Um estudo comparativo entre as legislações de transparência ao redor do mundo e como podemos adaptá-las para o contexto brasileiro.",
      date: "19 Abril 2025",
      author: "Dr. Marcos Santos",
      category: "Internacional",
      imagePath: "/img/blog-3.jpg",
      link: "/blog/3"
    }
  ]
};

export default blogData;