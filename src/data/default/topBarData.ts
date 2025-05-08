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
    email: "info@example.com",
    phone: "+012 345 6789",
    address: "123 Street, Cidade"
  },
  socialLinks: [
    {
      id: 1,
      platform: "Facebook",
      url: "https://facebook.com",
      icon: "FaFacebookF"
    },
    {
      id: 2,
      platform: "Twitter",
      url: "https://twitter.com",
      icon: "FaTwitter"
    },
    {
      id: 4,
      platform: "Instagram",
      url: "https://instagram.com",
      icon: "FaInstagram"
    },
    {
      id: 5,
      platform: "YouTube",
      url: "https://youtube.com",
      icon: "FaYoutube"
    }
  ]
};

export default topBarData;