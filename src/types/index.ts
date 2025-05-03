export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export interface Presentation {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}