export interface FooterColumn {
  title: string;
  links: {
    id: number;
    text: string;
    url: string;
    isIcon?: boolean;
    icon?: string;
  }[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface FooterData {
  description: string;
  contactInfo: ContactInfo;
  columns: FooterColumn[];
  socialLinks: {
    id: number;
    platform: string;
    url: string;
    icon: string;
  }[];
  copyright: string;
}

const footerData: FooterData = {
  description: "O Poraussuba é uma campanha por saúde nas escolas públicas de Fortaleza através de uma lei de iniciativa popular. Precisamos de 88.500 assinaturas (5% dos eleitores) para protocolar este projeto na Câmara Municipal.",
  contactInfo: {
    address: "Fortaleza - Ceará",
    phone: "+55 (85) 98765-4321",
    email: "contato@poraussuba.com.br"
  },
  columns: [
    {
      title: "Links Rápidos",
      links: [
        { id: 1, text: "Home", url: "/" },
        { id: 2, text: "Sobre Nós", url: "/about" },
        { id: 3, text: "Nossa Causa", url: "/causes" },
        { id: 4, text: "Eventos", url: "/events" },
        { id: 5, text: "Contato", url: "/contact" }
      ]
    },
    {
      title: "Assine Agora",
      links: [
        { id: 1, text: "Como Assinar", url: "/how-to-sign" },
        { id: 2, text: "Verificar Status", url: "/verify-signature" },
        { id: 3, text: "Baixar Formulário", url: "/download-form" },
        { id: 4, text: "Perguntas Frequentes", url: "/faq" },
        { id: 5, text: "Política de Privacidade", url: "/privacy" }
      ]
    }
  ],
  socialLinks: [
    { id: 1, platform: "Facebook", url: "https://facebook.com/poraussuba", icon: "FaFacebookF" },
    { id: 2, platform: "Twitter", url: "https://twitter.com/poraussuba", icon: "FaTwitter" },
    { id: 3, platform: "Instagram", url: "https://instagram.com/poraussuba", icon: "FaInstagram" },
    { id: 4, platform: "YouTube", url: "https://youtube.com/@poraussuba", icon: "FaYoutube" }
  ],
  copyright: "© Poraussuba 2025. Desenvolvido por Felipe Moreira."
};

export default footerData;