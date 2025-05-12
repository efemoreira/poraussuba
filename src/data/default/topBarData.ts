export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface TopBarData {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

const topBarData: TopBarData = {
  contactInfo: {
    email: "contato@poraussuba.com.br",
    phone: "+55 85 98765-4321",
    address: "Fortaleza, Ceará"
  },
  socialLinks: [
    {
      id: 1,
      platform: "Facebook",
      url: "https://facebook.com/poraussuba",
      icon: "FaFacebookF"
    },
    {
      id: 2,
      platform: "Twitter",
      url: "https://twitter.com/poraussuba",
      icon: "FaTwitter"
    },
    {
      id: 4,
      platform: "Instagram",
      url: "https://instagram.com/poraussuba",
      icon: "FaInstagram"
    },
    {
      id: 5,
      platform: "YouTube",
      url: "https://youtube.com/@poraussuba",
      icon: "FaYoutube"
    }
  ]
};

export default topBarData;