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
  sectionSubtitle: 'Conheça os Líderes da Nossa Iniciativa',
  description: 'Nossa equipe é formada por especialistas e voluntários dedicados a transformar esta proposta de lei em realidade. Juntos, estamos trabalhando para construir um Brasil mais justo e transparente.',
  team: [
    {
      id: 1,
      name: 'Dra. Carolina Mendes',
      role: 'Coordenadora Jurídica',
      imagePath: '/img/team-1.jpg',
      socialLinks: {
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/'
      }
    },
    {
      id: 2,
      name: 'Prof. Ricardo Almeida',
      role: 'Especialista em Políticas Públicas',
      imagePath: '/img/team-2.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/'
      }
    },
    {
      id: 3,
      name: 'Fernanda Oliveira',
      role: 'Coordenadora de Mobilização',
      imagePath: '/img/team-3.jpg',
      socialLinks: {
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/'
      }
    },
    {
      id: 4,
      name: 'Dr. Marcos Santos',
      role: 'Assessor Legislativo',
      imagePath: '/img/team-4.jpg',
      socialLinks: {
        twitter: 'https://twitter.com/',
        linkedin: 'https://linkedin.com/'
      }
    }
  ]
};

export default teamData;