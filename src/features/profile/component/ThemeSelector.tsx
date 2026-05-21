"use client";

import { useProfileStore } from "../store/useProfileStore";
import { Palette } from "lucide-react";
import { motion } from "framer-motion";

const THEME_PRESETS = [
  {
    name: "Midnight",
    backgroundColor: "#09090b",
    buttonBackgroundColor: "#fafafa",
    buttonTextColor: "#09090b",
  },
  {
    name: "Cyberpunk",
    backgroundColor: "#0f172a",
    buttonBackgroundColor: "#38bdf8",
    buttonTextColor: "#0f172a",
  },
  {
    name: "Emerald Glow",
    backgroundColor: "#022c22",
    buttonBackgroundColor: "#10b981",
    buttonTextColor: "#ffffff",
  },
  {
    name: "Sunset",
    backgroundColor: "#1e1b4b",
    buttonBackgroundColor: "#f43f5e",
    buttonTextColor: "#ffffff",
  },
  {
    name: "Nordic Frost",
    backgroundColor: "#2e3440",
    buttonBackgroundColor: "#88c0d0",
    buttonTextColor: "#2e3440",
  },
  {
    name: "Dracula",
    backgroundColor: "#282a36",
    buttonBackgroundColor: "#bd93f9",
    buttonTextColor: "#282a36",
  },
  {
    name: "Retro Amber",
    backgroundColor: "#0c0a09",
    buttonBackgroundColor: "#f59e0b",
    buttonTextColor: "#0c0a09",
  },
  {
    name: "Rose Gold",
    backgroundColor: "#1c1917",
    buttonBackgroundColor: "#f43f5e",
    buttonTextColor: "#ffffff",
  },
];

export default function ThemeSelector() {
  const { profile, updateTheme } = useProfileStore();
  const { theme } = profile;

  return (
    <div className="flex flex-col space-y-4">
      {" "}
      <div>
        <h3 className="text-base font-semibold text-zinc-200 flex items-center gap-2">
          <Palette size={18} className="text-zinc-400" />
          Theme Selector
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          Personalize your page appearance and button geometry.
        </p>
      </div>
      <div className="space-y-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <label className="text-xs font-medium text-zinc-400 block mb-2">
          Quick Presets
        </label>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-0.5">
          {THEME_PRESETS.map((preset) => {
            const isSelected = theme.backgroundColor === preset.backgroundColor;

            return (
              <motion.button
                key={preset.name}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col items-center gap-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                  isSelected
                    ? "border-transparent bg-zinc-800"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
                }`}
                onClick={() => updateTheme(preset)}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activePresetBorder"
                    className="absolute inset-0 border border-zinc-400 rounded-lg pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <div
                  className="h-6 w-12 flex justify-center items-center rounded-md p-1 overflow-hidden"
                  style={{ backgroundColor: preset.backgroundColor }}
                >
                  <div
                    className="h-1.5 w-full rounded-sm"
                    style={{ backgroundColor: preset.buttonBackgroundColor }}
                  />
                </div>
                <span className="text-[10px] font-medium text-zinc-400 group-hover:text-zinc-200">
                  {preset.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="space-y-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <label className="text-xs font-medium text-zinc-400 block mb-2">
          Button Geometry
        </label>
        <div className="grid grid-cols-3 gap-4 mt-0.5">
          {(["rounded", "rounded-full", "sharp"] as const).map((styleType) => {
            const isSelected = theme.buttonStyle === styleType;

            return (
              <motion.button
                key={styleType}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col items-center justify-center p-3 border rounded-lg cursor-pointer text-xs font-medium transition-colors h-11 ${
                  isSelected
                    ? "border-transparent bg-zinc-800 text-white"
                    : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700"
                }`}
                onClick={() => updateTheme({ buttonStyle: styleType })}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeGeometryBg"
                    className="absolute inset-0 border border-zinc-400 rounded-lg pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <span className="relative z-10">
                  {styleType === "sharp"
                    ? "Sharp"
                    : styleType === "rounded"
                      ? "Rounded"
                      : "Capsule"}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
