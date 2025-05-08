export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imagePath: string;
  buttonText: string;
  buttonLink: string;
}

export interface EventSectionData {
  sectionTitle: string;
  sectionSubtitle: string;
  events: Event[];
}

const eventData: EventSectionData = {
  sectionTitle: "Próximos Eventos",
  sectionSubtitle: "Participe dos Nossos Eventos de Coleta de Assinaturas",
  events: [
    {
      id: 1,
      title: "Coleta de Assinaturas na Praça da Sé",
      description: "Estaremos na Praça da Sé coletando assinaturas para nossa lei de transparência e participação cidadã. Venha conhecer nossa proposta e contribuir com sua assinatura.",
      date: "20 de Maio, 2025",
      time: "09:00 - 17:00",
      location: "Praça da Sé, São Paulo - SP",
      imagePath: "/img/event-1.jpg",
      buttonText: "Saiba Mais",
      buttonLink: "/events/1"
    },
    {
      id: 2,
      title: "Debate: Por que precisamos dessa lei?",
      description: "Participe de um debate com especialistas em direito público e política sobre a importância da nossa proposta para aumentar a transparência e participação na gestão pública.",
      date: "27 de Maio, 2025",
      time: "19:00 - 21:30",
      location: "Auditório da Universidade Federal, Rio de Janeiro - RJ",
      imagePath: "/img/event-2.jpg",
      buttonText: "Inscreva-se",
      buttonLink: "/events/2"
    },
    {
      id: 3,
      title: "Workshop: Como Mobilizar na sua Cidade",
      description: "Aprenda a organizar pontos de coleta e mobilizar voluntários em sua cidade para apoiar nossa campanha por uma política mais transparente e participativa no Brasil.",
      date: "05 de Junho, 2025",
      time: "14:00 - 18:00",
      location: "Centro Cultural, Belo Horizonte - MG",
      imagePath: "/img/event-3.jpg",
      buttonText: "Participar",
      buttonLink: "/events/3"
    },
    {
      id: 4,
      title: "Live: Perguntas e Respostas sobre a Lei",
      description: "Transmissão ao vivo onde nossa equipe jurídica responderá dúvidas sobre nossa proposta de lei e explicará como você pode contribuir mesmo à distância.",
      date: "12 de Junho, 2025",
      time: "20:00 - 21:30",
      location: "Online - YouTube e Instagram",
      imagePath: "/img/event-4.jpg",
      buttonText: "Lembrete",
      buttonLink: "/events/4"
    }
  ]
};

export default eventData;