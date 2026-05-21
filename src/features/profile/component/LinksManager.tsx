import React from "react";
import { useProfileStore } from "../store/useProfileStore";
import LinkItemCard from "./LinkItemCard";

const LinksManager = () => {
  const { profile, addLink } = useProfileStore();
  const { links } = profile;
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-zinc-200">
            Manage Links
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Add, update or remove your social destinations.
          </p>
        </div>
        <button
          className="px-3 py-1 text-sm font-semibold bg-zinc-100 text-zinc-950 rounded-lg hover:bg-zinc-300 transition-all active:scale-95 cursor-pointer shadow-sm"
          onClick={addLink}
        >
          + Add Link
        </button>
      </div>

      <div className="space-y-3 mt-2">
        {links.length === 0 ? (
          <div className="flex justify-center items-center text-sm text-zinc-400 mt-2 border border-zinc-800 rounded-md  shadow-sm p-8">
            Click "Add Link" to populate your stack
          </div>
        ) : (
          links.map((link) => <LinkItemCard key={link.id} link={link} />)
        )}
      </div>
    </div>
  );
};

export default LinksManager;
