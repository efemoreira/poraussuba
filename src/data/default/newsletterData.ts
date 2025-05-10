export interface NewsletterData {
  title: string;
  subtitle: string;
  buttonText: string;
  placeholderText: string;
  termsText: string;
  bgImagePath?: string;
}

const newsletterData: NewsletterData = {
  title: "Acompanhe Nossa Campanha",
  subtitle: "Inscreva-se para receber atualizações sobre nossa meta de 88.500 assinaturas e informações sobre os próximos eventos de coleta em Fortaleza.",
  buttonText: "Inscrever-se",
  placeholderText: "Seu endereço de e-mail",
  termsText: "Concordo em receber atualizações sobre a campanha Poraussuba por saúde nas escolas de Fortaleza",
  bgImagePath: "/img/page-header.jpg"
};

export default newsletterData;