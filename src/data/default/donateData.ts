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
  sectionTitle: 'Assine Agora',
  sectionSubtitle: 'Sua Assinatura Pode Mudar o Brasil',
  description: 'Junte-se a milhares de brasileiros que já assinaram nossa petição. Precisamos do seu apoio para transformar esta iniciativa em lei e garantir um futuro melhor para nosso país. Cada assinatura fortalece nosso movimento e aproxima-nos de nosso objetivo.',
  imagePath: '/img/donate.jpg',
  imageAlt: 'Formulário de assinatura',
  formTitle: 'Formulário de Assinatura',
  signatureGoal: 10000,
  currentSignatures: 7534,
  submitButtonText: 'Assinar Petição',
  termsText: 'Ao assinar, concordo com os termos de uso e política de privacidade.',
  signatureOptions: [
    {
      label: 'Assinatura Digital',
      description: 'Assine usando seu certificado digital ou e-mail verificado'
    },
    {
      label: 'Assinatura Física',
      description: 'Imprima o documento, assine e envie por correio'
    },
    {
      label: 'Assinatura Presencial',
      description: 'Visite um dos nossos pontos de coleta para assinar presencialmente'
    }
  ],
  personalInfoFields: [
    {
      id: 'nome',
      label: 'Nome Completo',
      type: 'text',
      placeholder: 'Digite seu nome completo',
      required: true
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Digite seu email',
      required: true
    },
    {
      id: 'cpf',
      label: 'CPF',
      type: 'text',
      placeholder: 'Digite seu CPF',
      required: true
    },
    {
      id: 'telefone',
      label: 'Telefone',
      type: 'tel',
      placeholder: 'Digite seu telefone',
      required: false
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
      placeholder: 'Digite sua cidade',
      required: true
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
      placeholder: 'Digite seu estado',
      required: true
    }
  ]
};

export default donateData;