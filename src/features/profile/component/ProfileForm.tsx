"use client";
import { useForm } from "react-hook-form";
import { ProfileFormValues } from "../schema/profileSchema";
import { profileSchema } from "../schema/profileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProfileStore } from "../store/useProfileStore";
import { useEffect } from "react";

const ProfileForm = () => {
  const { profile, updateBasicInfo } = useProfileStore();
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: profile.name,
      bio: profile.bio,
      avatarUrl: profile.avatarUrl || "",
    },
  });

  useEffect(() => {
    const subscription = watch((value) =>
      updateBasicInfo(value as ProfileFormValues),
    );

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="space-y-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h3>Profile Information</h3>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-zinc-400" htmlFor="name">
            Display Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Adib Jadidi"
            className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="text-xs font-medium text-zinc-400" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            placeholder="Tell your story..."
            rows={3}
            className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            {...register("bio")}
          />
          {errors.bio && (
            <p className="mt-1 text-xs text-red-500">{errors.bio.message}</p>
          )}
        </div>
        <div>
          <label className="text-xs font-medium text-zinc-400" htmlFor="avatar">
            Avatar URL
          </label>
          <input
            type="text"
            id="avatar"
            placeholder="https://example.com/avatar.jpg"
            className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            {...register("avatarUrl")}
          />
          {errors.avatarUrl && (
            <p className="mt-1 text-xs text-red-500">
              {errors.avatarUrl.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
