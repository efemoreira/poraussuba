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
  subtitle: "Tem alguma dúvida sobre nossa iniciativa ou quer saber como ajudar? Preencha o formulário abaixo e entraremos em contato o mais breve possível.",
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
      placeholder: "Assunto da mensagem",
      required: true
    },
    {
      id: "message",
      label: "Mensagem",
      type: "textarea",
      placeholder: "Sua mensagem",
      required: true,
      rows: 6
    }
  ],
  submitButtonText: "Enviar Mensagem",
  successMessage: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
  errorMessage: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
  contactInfo: {
    address: "123 Rua Principal, São Paulo - SP",
    phone: "+55 (11) 98765-4321",
    email: "contato@assinelei.org.br",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975216729713!2d-46.65378559999999!3d-23.564617100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1651191186400!5m2!1spt-BR!2sbr"
  }
};

export default contactFormData;