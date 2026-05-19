export interface LinkItem {
  id: string;
  title: string;
  url: string;
  isActive: boolean;
  icon?: string;
}

export interface ProfileTheme {
  backgroundColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  buttonStyle: "rounded" | "rounded-full" | "sharp";
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
