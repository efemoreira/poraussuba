export interface NavItem {
  id: number;
  label: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    id: number;
    label: string;
    path: string;
  }[];
}

export interface NavBarData {
  logoText: string;
  navItems: NavItem[];
}

const navBarData: NavBarData = {
  logoText: "Poraussuba",
  navItems: [
    {
      id: 1,
      label: "Home",
      path: "/",
      hasDropdown: false
    },
    {
      id: 2,
      label: "Sobre",
      path: "/about",
      hasDropdown: false
    },
    {
      id: 3,
      label: "Projeto de Lei",
      path: "/causes",
      hasDropdown: false
    },
    {
      id: 4,
      label: "Eventos",
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 1,
          label: "Coleta de Assinaturas",
          path: "/events/upcoming"
        },
        {
          id: 2,
          label: "Palestras sobre o Projeto",
          path: "/events/past"
        }
      ]
    },
    {
      id: 5,
      label: "Atualizações",
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 1,
          label: "Status da Campanha",
          path: "/blog/news"
        },
        {
          id: 2,
          label: "Artigos sobre Saúde Escolar",
          path: "/blog/articles"
        }
      ]
    },
    {
      id: 6,
      label: "Contato",
      path: "/contact",
      hasDropdown: false
    },
    {
      id: 7,
      label: "Assinar",
      path: "/donate",
      hasDropdown: false
    }
  ]
};

export default navBarData;