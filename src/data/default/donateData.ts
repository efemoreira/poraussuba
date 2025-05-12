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

// Description: Deve focar em como funciona o processo de assinatura que é ter 5% dos eleitores de Fortaleza, ou seja, 89.000 assinaturas. O formulário deve ser simples e direto, com campos obrigatórios para nome completo, email, telefone/whatsapp, endereço completo, bairro, cidade e estado.

const donateData: DonateData = {
  sectionTitle: 'Cadastre-se para Assinar',
  sectionSubtitle: 'Apoie a Iniciativa Popular',
  description: 'Ajude a coletar assinaturas para a nossa lei de iniciativa popular, para tal a Câmara Municipal de Fortaleza solicita que projeto tenha 5% dos eleitores da cidade, ou seja, 89.000 assinaturas. Por isso, precisamos da sua ajuda! Assine o formulário abaixo e faça parte dessa transformação.',
  imagePath: '/img/donate.jpg',
  imageAlt: 'Formulário de assinatura da petição Poraussuba',
  formTitle: 'Formulário de cadastro de assinatura',
  signatureGoal: 89000,
  currentSignatures: 1,
  submitButtonText: 'Cadastrar Assinatura',
  termsText: 'Ao assinar, concordo com os termos de uso e política de privacidade. Sou eleitor(a) em Fortaleza e confirmo que os dados informados são verdadeiros.',
  signatureOptions: [
    // {
    //   label: 'Pré-cadastro Online',
    //   description: 'Preencha seus dados para facilitar a coleta da sua assinatura física posteriormente'
    // },
    // {
    //   label: 'Ponto de Coleta',
    //   description: 'Visite um dos nossos pontos de coleta em Fortaleza para assinar presencialmente'
    // },
    // {
    //   label: 'Voluntário Coletor',
    //   description: 'Solicite que um voluntário vá até você para coletar sua assinatura'
    // }
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