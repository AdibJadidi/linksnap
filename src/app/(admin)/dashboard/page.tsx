"use client";
import EditorPanel from "@/features/profile/component/EditorPanel";
import PreviewPanel from "@/features/profile/component/PreviewPanel";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-zinc-950 text-zinc-400">
        <div className="animate-pulse text-sm font-medium">
          Loading Workspace...
        </div>
      </div>
    );
  }
  return (
    <main className="flex w-full h-screen bg-zinc-950 text-zinc-50">
      <section className="flex-1 h-full bg-zinc-900 p-8 lg:p-12 border-r border-zinc-800 space-y-8">
        <div className="flex flex-col">
          <h1>LinkSnap Workspace</h1>
          <p>Customize your micro-landing page in real-time.</p>
        </div>
        <EditorPanel />
      </section>
      <section className="hidden md:flex w-[450px] lg:w-[500px] h-full bg-zinc-800 items-center justify-center p-6 sticky top-0">
        <PreviewPanel />
      </section>
    </main>
  );
};

export default DashboardPage;
