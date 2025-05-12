export interface ContactFormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  cols?: number;
  rows?: number;
}

export interface ContactFormData {
  title: string;
  subtitle: string;
  fields: ContactFormField[];
  submitButtonText: string;
  successMessage: string;
  errorMessage: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    mapEmbedUrl?: string;
  };
}

const contactFormData: ContactFormData = {
  title: "Entre em Contato",
  subtitle: "Tem alguma dúvida sobre nossa iniciativa de saúde nas escolas de Fortaleza ou deseja participar da coleta de assinaturas? Preencha o formulário abaixo e entraremos em contato o mais breve possível.",
  fields: [
    {
      id: "name",
      label: "Nome Completo",
      type: "text",
      placeholder: "Seu nome completo",
      required: true
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Seu endereço de email",
      required: true
    },
    {
      id: "subject",
      label: "Assunto",
      type: "text",
      placeholder: "Ex: Quero ajudar na coleta de assinaturas",
      required: true
    },
    {
      id: "message",
      label: "Mensagem",
      type: "textarea",
      placeholder: "Conte-nos como você gostaria de participar do Poraussuba",
      required: true,
      rows: 6
    }
  ],
  submitButtonText: "Enviar Mensagem",
  successMessage: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
  errorMessage: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
  contactInfo: {
    address: "Fortaleza - CE",
    phone: "+55 (85) 98765-4321",
    email: "contato@poraussuba.com.br",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3315145329714!2d-38.52429689999999!3d-3.7304306999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74991004f379d%3A0x39a24830740b787c!2sPra%C3%A7a%20do%20Ferreira%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1651491186400!5m2!1spt-BR!2sbr"
  }
};

export default contactFormData;