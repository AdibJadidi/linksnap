import { LinkItem, ProfileTheme, UserProfile } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProfileState {
  profile: UserProfile;
  updateBasicInfo: (
    info: Partial<Pick<UserProfile, "name" | "bio" | "username" | "avatarUrl">>,
  ) => void;
  addLink: () => void;
  updateLink: (id: string, update: Partial<Omit<LinkItem, "id">>) => void;
  deleteLink: (id: string) => void;

  updateTheme: (theme: Partial<ProfileTheme>) => void;
  generateShareUrl: () => string;
}

const initialProfile: UserProfile = {
  name: "John Doe",
  bio: "Software Developer",
  username: "johndoe",
  avatarUrl: "",
  links: [],
  theme: {
    backgroundColor: "#ffffff",
    buttonBackgroundColor: "#000000",
    buttonTextColor: "#ffffff",
    buttonStyle: "rounded",
    fontFamily: "Geist",
  },
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set, get) => ({
      profile: initialProfile,
      updateBasicInfo: (info) =>
        set((state) => ({
          profile: { ...state.profile, ...info },
        })),
      addLink: () =>
        set((state) => {
          const newLink: LinkItem = {
            id: crypto.randomUUID(),
            title: "New Link",
            url: "",
            isActive: true,
          };
          return {
            profile: {
              ...state.profile,
              links: [...state.profile.links, newLink],
            },
          };
        }),
      updateLink: (id, update) =>
        set((state) => ({
          profile: {
            ...state.profile,
            links: state.profile.links.map((link) =>
              link.id === id ? { ...link, ...update } : link,
            ),
          },
        })),
      deleteLink: (id) =>
        set((state) => ({
          profile: {
            ...state.profile,
            links: state.profile.links.filter((link) => link.id !== id),
          },
        })),
      updateTheme: (themeUpdates) =>
        set((state) => ({
          profile: {
            ...state.profile,
            theme: { ...state.profile.theme, ...themeUpdates },
          },
        })),
      generateShareUrl: () => {
        const { profile } = get();
        const jsonString = JSON.stringify(profile);
        const encodedData = btoa(encodeURIComponent(jsonString));

        const baseUrl =
          typeof window !== "undefined" ? window.location.origin : "";
        return `${baseUrl}/${profile.username}?data=${encodedData}`;
      },
    }),
    {
      name: "linksnap-profile-storage",
    },
  ),
);
