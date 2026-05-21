import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-4 max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400">
          <Sparkles size={12} className="text-amber-500" />
          100% Free & Open Source
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          ⚡ LinkSnap
        </h1>

        <p className="text-sm text-zinc-400 leading-relaxed">
          Create ultra-fast, database-less bio pages in seconds. Your data,
          customized and packed entirely into a shareable link.
        </p>

        <div className="pt-4">
          <Link
            href="/dashboard"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Create Your Page
          </Link>
        </div>
      </div>
    </div>
  );
}
