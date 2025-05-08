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
  description: "Nossa campanha por transparência e participação cidadã é um movimento para transformar o Brasil através da mobilização popular. Junte-se a nós assinando nossa proposta de lei.",
  contactInfo: {
    address: "123 Rua Principal, Cidade - Estado",
    phone: "+55 (11) 98765-4321",
    email: "contato@assinelei.org.br"
  },
  columns: [
    {
      title: "Links Rápidos",
      links: [
        { id: 1, text: "Home", url: "/" },
        { id: 2, text: "Sobre Nós", url: "/about" },
        { id: 3, text: "Causas", url: "/causes" },
        { id: 4, text: "Eventos", url: "/events" },
        { id: 5, text: "Contato", url: "/contact" }
      ]
    },
    {
      title: "Assine Agora",
      links: [
        { id: 1, text: "Como Assinar", url: "/how-to-sign" },
        { id: 2, text: "Verificar Assinatura", url: "/verify-signature" },
        { id: 3, text: "Baixar Formulário", url: "/download-form" },
        { id: 4, text: "Perguntas Frequentes", url: "/faq" },
        { id: 5, text: "Política de Privacidade", url: "/privacy" }
      ]
    }
  ],
  socialLinks: [
    { id: 1, platform: "Facebook", url: "https://facebook.com", icon: "FaFacebookF" },
    { id: 2, platform: "Twitter", url: "https://twitter.com", icon: "FaTwitter" },
    { id: 3, platform: "LinkedIn", url: "https://linkedin.com", icon: "FaLinkedinIn" },
    { id: 4, platform: "Instagram", url: "https://instagram.com", icon: "FaInstagram" }
  ],
  copyright: "© AssineLei. Todos os direitos reservados."
};

export default footerData;