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
      title: "Coleta de Assinaturas na Praça do Ferreira",
      description: "Estaremos na Praça do Ferreira coletando assinaturas para nossa lei de iniciativa popular sobre saúde nas escolas. Venha conhecer a proposta e ajudar a transformar a educação em Fortaleza.",
      date: "20 de Maio, 2025",
      time: "09:00 - 17:00",
      location: "Praça do Ferreira, Centro - Fortaleza, CE",
      imagePath: "/img/event-1.jpg",
      buttonText: "Saiba Mais",
      buttonLink: "/events/1"
    },
    {
      id: 2,
      title: "Debate: Saúde Preventiva nas Escolas",
      description: "Participe de um debate com médicos, educadores e pais sobre como a presença regular de profissionais de saúde nas escolas pode transformar a qualidade de vida dos estudantes.",
      date: "27 de Maio, 2025",
      time: "19:00 - 21:30",
      location: "Auditório da Universidade Federal do Ceará, Benfica - Fortaleza, CE",
      imagePath: "/img/event-2.jpg",
      buttonText: "Inscreva-se",
      buttonLink: "/events/2"
    },
    {
      id: 3,
      title: "Workshop: Como Mobilizar seu Bairro",
      description: "Aprenda a organizar pontos de coleta e mobilizar voluntários em seu bairro para apoiar nossa campanha por saúde nas escolas públicas de Fortaleza.",
      date: "05 de Junho, 2025",
      time: "14:00 - 18:00",
      location: "Centro Cultural Dragão do Mar, Praia de Iracema - Fortaleza, CE",
      imagePath: "/img/event-1.jpg",
      buttonText: "Participar",
      buttonLink: "/events/3"
    },
    {
      id: 4,
      title: "Live: O Passo a Passo da Lei de Iniciativa Popular",
      description: "Transmissão ao vivo com Felipe Moreira, fundador do Poraussuba, e a assessora jurídica do projeto explicando o processo completo desde a coleta de assinaturas até a implementação da lei.",
      date: "12 de Junho, 2025",
      time: "20:00 - 21:30",
      location: "Online - YouTube e Instagram",
      imagePath: "/img/event-2.jpg",
      buttonText: "Lembrete",
      buttonLink: "/events/4"
    }
  ]
};

export default eventData;