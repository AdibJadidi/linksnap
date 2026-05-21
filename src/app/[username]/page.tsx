"use client";
import { UserProfile } from "@/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const UserProfile = () => {
  const searchParams = useSearchParams();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const formatUrl = (url: string) => {
    if (!url) return "#";
    if (/^https?:\/\//i.test(url)) return url;
    return `https://${url}`;
  };
  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      try {
        const decodedJson = decodeURIComponent(atob(dataParam));
        const parsedData = JSON.parse(decodedJson) as UserProfile;
        setUserProfile(parsedData);
      } catch (error) {
        console.error("Error decoding profile data:", error);
      }
    }
  }, [searchParams]);

  if (!userProfile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        <p className="text-sm text-zinc-400">
          Profile not found or link is invalid.
        </p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: React.ComponentProps<typeof motion.div>["variants"] = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const { theme, links, avatarUrl, name, bio } = userProfile;
  return (
    <div>
      <div className=" flex min-h-screen justify-center item  w-full flex-col ">
        <motion.div
          className="flex-1 p-6 flex flex-col  pt-8 items-center justify-center"
          style={{ backgroundColor: theme.backgroundColor }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className=" max-w-md w-20 h-20 border-zinc-700/50 border-2 rounded-full bg-zinc-800 overflow-hidden flex items-center justify-center shadow-md"
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://api.dicebear.com/7.x/bottts/svg?seed=Felix";
                }}
              />
            ) : (
              <span className="text-xl font-bold text-zinc-400">
                {name ? name.charAt(0).toUpperCase() : "?"}
              </span>
            )}
          </motion.div>
          <motion.div variants={itemVariants} className="max-w-md">
            <h2
              className={`mt-4 text-lg font-bold text-center `}
              style={{ color: theme.buttonBackgroundColor }}
            >
              {name || "Your Name"}
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="max-w-md">
            <h2
              className={`mt-4 text-xs font-bold text-center max-w-[300px] wrap-break-word leading-relaxed `}
              style={{ color: theme.buttonBackgroundColor }}
            >
              {bio || "Your bio will appear here..."}
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full border-b border-zinc-800/50 my-6"
          />

          <motion.div
            variants={itemVariants}
            className="w-full max-w-md flex-1 space-y-2"
          >
            {links.length === 0 ? (
              <div className="text-[10px] text-zinc-600 text-center mt-8 italic">
                No linkes added yet
              </div>
            ) : (
              links.map((link) => (
                <a
                  key={link.id}
                  href={formatUrl(link.url || "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center w-full block text-sm px-4 py-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm break-all"
                  style={{
                    backgroundColor: theme.buttonBackgroundColor,
                    color: theme.buttonTextColor,
                    borderRadius:
                      theme.buttonStyle === "rounded"
                        ? "12px"
                        : theme.buttonStyle === "rounded-full"
                          ? "999px"
                          : "0px",
                  }}
                >
                  {link.title}
                </a>
              ))
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <span className="text-[10px] text-zinc-500 tracking-widest font-semibold uppercase opacity-60">
              ⚡ LinkSnap
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserProfile;
