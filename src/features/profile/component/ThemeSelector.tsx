"use client";

import { useProfileStore } from "../store/useProfileStore";
import { Palette, LayoutGrid } from "lucide-react";

const THEME_PRESETS = [
  {
    name: "Midnight",
    backgroundColor: "#09090b", // zinc-950
    buttonBackgroundColor: "#fafafa", // zinc-50
    buttonTextColor: "#09090b",
  },
  {
    name: "Cyberpunk",
    backgroundColor: "#0f172a", // slate-900
    buttonBackgroundColor: "#38bdf8", // sky-400
    buttonTextColor: "#0f172a",
  },
  {
    name: "Emerald Glow",
    backgroundColor: "#022c22", // emerald-950
    buttonBackgroundColor: "#10b981", // emerald-500
    buttonTextColor: "#ffffff",
  },
  {
    name: "Sunset",
    backgroundColor: "#1e1b4b", // indigo-950
    buttonBackgroundColor: "#f43f5e", // rose-500
    buttonTextColor: "#ffffff",
  },
  {
    name: "Nordic Frost",
    backgroundColor: "#2e3440", // nord-0
    buttonBackgroundColor: "#88c0d0", // nord-8 (frost blue)
    buttonTextColor: "#2e3440",
  },
  {
    name: "Dracula",
    backgroundColor: "#282a36",
    buttonBackgroundColor: "#bd93f9", // purple
    buttonTextColor: "#282a36",
  },
  {
    name: "Retro Amber",
    backgroundColor: "#0c0a09", // stone-950
    buttonBackgroundColor: "#f59e0b", // amber-500
    buttonTextColor: "#0c0a09",
  },
  {
    name: "Rose Gold",
    backgroundColor: "#1c1917", // stone-900
    buttonBackgroundColor: "#f43f5e", // rose-500/pinkish
    buttonTextColor: "#ffffff",
  },
];

export default function ThemeSelector() {
  const { profile, updateTheme } = useProfileStore();
  const { theme } = profile;

  return (
    <div className="flex flex-col space-y-2">
      <div>
        <h3 className="text-base font-semibold text-zinc-200 flex items-center gap-2">
          <Palette size={18} className="text-zinc-400" />
          Theme Selector
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          Personalize your page appearance and button geometry.
        </p>
      </div>
      <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <label className="text-xs font-medium text-zinc-400">
          Quick Presets
        </label>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-0.5">
          {THEME_PRESETS.map((preset) => (
            <button
              className={`flex flex-col items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all active:scale-95 ${
                theme.backgroundColor === preset.backgroundColor
                  ? "border-zinc-400 bg-zinc-800"
                  : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
              }`}
              onClick={() => updateTheme(preset)}
            >
              <div
                className="h-6 w-12 flex justify-center items-center rounded-md "
                style={{ backgroundColor: preset.backgroundColor }}
              >
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: preset.buttonBackgroundColor }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <label className="text-xs font-medium text-zinc-400">
          Button Geometry
        </label>
        <div className="grid grid-cols-3 gap-4 mt-0.5">
          {(["rounded", "rounded-full", "sharp"] as const).map((styleType) => (
            <button
              className={`flex flex-col items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all active:scale-95 ${
                theme.buttonStyle === styleType
                  ? "border-zinc-400 bg-zinc-800"
                  : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
              }`}
              onClick={() => updateTheme({ buttonStyle: styleType })}
            >
              {styleType === "sharp"
                ? "Sharp"
                : styleType === "rounded"
                  ? "Rounded"
                  : "Capsule"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
