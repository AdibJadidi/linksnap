export interface LinkItem {
  id: string;
  title: string;
  url: string;
  isActive: number;
  icon?: string;
}

export interface ProfileTheme {
  backgroundColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  buttonStyle: string;
  fontFamily: string;
}

export interface UserProfile {
  username: string;
  name: string;
  bio: string;
  avatarUrl?: string;
  links: LinkItem[];
  theme: ProfileTheme;
}
