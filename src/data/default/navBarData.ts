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
      label: "Causas",
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
          label: "Eventos Futuros",
          path: "/events/upcoming"
        },
        {
          id: 2,
          label: "Eventos Passados",
          path: "/events/past"
        }
      ]
    },
    {
      id: 5,
      label: "Blog",
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 1,
          label: "Notícias",
          path: "/blog/news"
        },
        {
          id: 2,
          label: "Artigos",
          path: "/blog/articles"
        }
      ]
    },
    {
      id: 6,
      label: "Contato",
      path: "/contact",
      hasDropdown: false
    }
  ]
};

export default navBarData;