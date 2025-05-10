export interface DonateData {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  formTitle: string;
  signatureGoal: number;
  currentSignatures: number;
  submitButtonText: string;
  termsText: string;
  signatureOptions: {
    label: string;
    description: string;
  }[];
  personalInfoFields: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
  }[];
}

const donateData: DonateData = {
  sectionTitle: 'Assine Nossa Petição',
  sectionSubtitle: 'Sua Assinatura por Saúde nas Escolas de Fortaleza',
  description: 'O projeto Poraussuba, idealizado por Felipe Moreira, busca protocolar uma lei de iniciativa popular que estabelece a realização de ações mensais de saúde nas escolas públicas de Fortaleza, garantindo o acompanhamento de nutricionistas, endocrinologistas e outros profissionais para monitorar o desenvolvimento das crianças. Precisamos de 88.500 assinaturas (5% dos eleitores de Fortaleza) para protocolar esta proposta na Câmara Municipal. Ao assinar, você ajuda a mostrar que o povo não precisa esperar pelos políticos e pode superar a polarização entre esquerda e direita através da participação cidadã direta.',
  imagePath: '/img/donate.jpg',
  imageAlt: 'Formulário de assinatura da petição Poraussuba',
  formTitle: 'Formulário de Assinatura',
  signatureGoal: 88500,
  currentSignatures: 12345,
  submitButtonText: 'Assinar Petição',
  termsText: 'Ao assinar, concordo com os termos de uso e política de privacidade. Sou eleitor(a) em Fortaleza e confirmo que os dados informados são verdadeiros.',
  signatureOptions: [
    {
      label: 'Pré-cadastro Online',
      description: 'Preencha seus dados para facilitar a coleta da sua assinatura física posteriormente'
    },
    {
      label: 'Ponto de Coleta',
      description: 'Visite um dos nossos pontos de coleta em Fortaleza para assinar presencialmente'
    },
    {
      label: 'Voluntário Coletor',
      description: 'Solicite que um voluntário vá até você para coletar sua assinatura'
    }
  ],
  personalInfoFields: [
    {
      id: 'nome',
      label: 'Nome Completo',
      type: 'text',
      placeholder: 'Digite seu nome completo conforme título de eleitor',
      required: true
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Digite seu email para contato',
      required: true
    },
    {
      id: 'telefone',
      label: 'Telefone/WhatsApp',
      type: 'tel',
      placeholder: 'Digite seu telefone para contato',
      required: true
    },
    {
      id: 'endereco',
      label: 'Endereço Completo',
      type: 'text',
      placeholder: 'Digite seu endereço completo',
      required: true
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
      placeholder: 'Digite seu bairro em Fortaleza',
      required: true
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
      placeholder: 'Fortaleza',
      required: true
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
      placeholder: 'Ceará',
      required: true
    }
  ]
};

export default donateData;