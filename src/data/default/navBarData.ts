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
      path: "#about",
      hasDropdown: false
    },
    {
      id: 3,
      label: "Projeto de Lei",
      path: "#services",
      hasDropdown: false
    },
    {
      id: 5,
      label: "Assinar",
      path: "#assinar",
      hasDropdown: false,
    },
  ]
};

export default navBarData;