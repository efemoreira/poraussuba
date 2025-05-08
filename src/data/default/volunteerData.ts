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
  subtitle: 'Faça a diferença sendo um voluntário hoje',
  description: [
    'Nossos voluntários são a espinha dorsal da nossa organização. Seja ajudando em eventos, participando de ações sociais, oferecendo serviços profissionais ou contribuindo com seu tempo e talento, cada voluntário é fundamental para ampliarmos nosso alcance e impacto.',
    'Junte-se a nós e faça parte de uma rede de pessoas comprometidas em transformar vidas. Você pode dedicar apenas algumas horas por semana ou se envolver em projetos específicos de acordo com sua disponibilidade e habilidades.',
    'Preencha o formulário ao lado para se cadastrar como voluntário, e entraremos em contato para conversar sobre as melhores formas de você contribuir para nossa missão.'
  ],
  formLabels: {
    name: 'Nome Completo',
    email: 'Seu Email',
    subject: 'Área de Interesse',
    message: 'Mensagem',
    submit: 'Enviar Cadastro'
  },
  formPlaceholders: {
    name: 'Nome Completo',
    email: 'Seu Email',
    subject: 'Área de Interesse',
    message: 'Conte-nos sobre você, suas habilidades e disponibilidade'
  },
  formSuccessMessage: 'Obrigado por se voluntariar! Entraremos em contato em breve.',
  backgroundImage: "/img/volunteer.jpg" 
};

export default volunteerData;