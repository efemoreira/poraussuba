export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imagePath: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface TeamData {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  team: TeamMember[];
}

const teamData: TeamData = {
  sectionTitle: 'Nossa Equipe',
  sectionSubtitle: 'Conheça Quem Está Por Trás do Poraussuba',
  description: 'Nossa equipe é liderada por Felipe Moreira, idealizador do projeto, e composta por profissionais dedicados a transformar a saúde nas escolas públicas de Fortaleza através de uma lei de iniciativa popular.',
  team: [
    {
      id: 1,
      name: 'Felipe Moreira',
      role: 'Fundador e Coordenador Geral',
      imagePath: '/img/team-1.jpg',
      socialLinks: {
        twitter: 'https://twitter.com/felipemoreira',
        facebook: 'https://facebook.com/felipemoreira',
        instagram: 'https://instagram.com/felipemoreira',
        linkedin: 'https://linkedin.com/in/felipemoreira'
      }
    },
    {
      id: 2,
      name: 'Dra. Mariana Costa',
      role: 'Coordenadora de Saúde',
      imagePath: '/img/team-2.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/'
      }
    },
    {
      id: 3,
      name: 'Pedro Albuquerque',
      role: 'Coordenador de Mobilização',
      imagePath: '/img/team-3.jpg',
      socialLinks: {
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/'
      }
    },
    {
      id: 4,
      name: 'Dra. Luciana Matos',
      role: 'Assessora Jurídica',
      imagePath: '/img/team-4.jpg',
      socialLinks: {
        twitter: 'https://twitter.com/',
        linkedin: 'https://linkedin.com/'
      }
    }
  ]
};

export default teamData;