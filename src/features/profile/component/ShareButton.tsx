"use client";

import { useState } from "react";
import { useProfileStore } from "../store/useProfileStore";

export default function ShareButton() {
  const generateShareUrl = useProfileStore((state) => state.generateShareUrl);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const shareUrl = generateShareUrl();

    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-zinc-900 border border-zinc-800 rounded-xl mb-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold text-zinc-200">
            Your link is ready
          </h3>
          <p className="text-xs text-zinc-500 mt-1">Share your link</p>
        </div>

        <button
          onClick={handleCopy}
          className={`w-full sm:w-auto px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 ${
            copied
              ? "bg-emerald-600 text-white"
              : "bg-zinc-100 hover:bg-white text-zinc-900"
          }`}
        >
          {copied ? (
            <span className="flex items-center justify-center gap-1.5">
              Copied! 🎉
            </span>
          ) : (
            <span className="flex items-center justify-center gap-1.5">
              Copy Link{" "}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
