"use client";

import { LinkItem } from "@/types";
import { useProfileStore } from "../store/useProfileStore";
import { Trash2, Link2, Type } from "lucide-react";
import { motion } from "framer-motion";

interface LinkItemCardProps {
  link: LinkItem;
}

export default function LinkItemCard({ link }: LinkItemCardProps) {
  const { updateLink, deleteLink } = useProfileStore();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95, height: 0, marginBottom: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-4 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/70 shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
          Link Node
        </span>
        <button
          onClick={() => deleteLink(link.id)}
          className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-800 hover:text-red-400 transition-colors"
          title="Delete Link"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="relative flex items-center">
          <Type size={16} className="absolute left-3 text-zinc-500" />
          <input
            type="text"
            value={link.title}
            onChange={(e) => updateLink(link.id, { title: e.target.value })}
            placeholder="Link Title (e.g. GitHub)"
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 pl-9 pr-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-700 transition-colors"
          />
        </div>

        <div className="relative flex items-center">
          <Link2 size={16} className="absolute left-3 text-zinc-500" />
          <input
            type="url"
            value={link.url}
            onChange={(e) => updateLink(link.id, { url: e.target.value })}
            placeholder="URL (https://...)"
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 pl-9 pr-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-700 transition-colors"
          />
        </div>
      </div>
    </motion.div>
  );
}
