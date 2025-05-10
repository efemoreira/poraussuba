export interface VolunteerData {
  title: string;
  subtitle: string;
  description: string[];
  formLabels: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
  };
  formPlaceholders: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  formSuccessMessage: string;
  backgroundImage:string 
}

export const volunteerData: VolunteerData = {
  title: 'Seja Voluntário',
  subtitle: 'Ajude a coletar as 88.500 assinaturas para protocolamos nossa lei popular',
  description: [
    'Voluntários são essenciais para alcançarmos nosso objetivo de 88.500 assinaturas (5% dos eleitores de Fortaleza). Como voluntário, você pode ajudar na coleta de assinaturas, divulgação do projeto e mobilização da população.',
    'O Poraussuba é uma iniciativa desenvolvida por Felipe Moreira para estabelecer ações mensais de saúde nas escolas públicas municipais, com acompanhamento de nutricionistas, endocrinologistas e outros profissionais para monitorar o desenvolvimento infantil.',
    'Nossa ação social demonstra que a população não precisa esperar pelos políticos e pode superar a polarização política (esquerda x direita) através de ações concretas. Preencha o formulário para participar dessa transformação em Fortaleza.'
  ],
  formLabels: {
    name: 'Nome Completo',
    email: 'Seu Email',
    subject: 'Como deseja colaborar',
    message: 'Mensagem',
    submit: 'Quero ser voluntário'
  },
  formPlaceholders: {
    name: 'Seu nome completo',
    email: 'Seu email de contato',
    subject: 'Coleta de assinaturas, divulgação etc.',
    message: 'Conte-nos sobre sua disponibilidade e em qual bairro de Fortaleza você pode atuar'
  },
  formSuccessMessage: 'Obrigado por se voluntariar! Entraremos em contato em breve para as próximas etapas.',
  backgroundImage: "/img/volunteer.jpg" 
};

export default volunteerData;