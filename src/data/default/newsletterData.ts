export interface NewsletterData {
  title: string;
  subtitle: string;
  buttonText: string;
  placeholderText: string;
  termsText: string;
  bgImagePath?: string;
}

const newsletterData: NewsletterData = {
  title: "Mantenha-se Informado",
  subtitle: "Inscreva-se em nossa newsletter para receber atualizações sobre nossa campanha de assinaturas e novidades da lei proposta.",
  buttonText: "Inscrever-se",
  placeholderText: "Seu endereço de e-mail",
  termsText: "Concordo em receber emails de atualização sobre a campanha",
  bgImagePath: "/img/page-header.jpg"
};

export default newsletterData;