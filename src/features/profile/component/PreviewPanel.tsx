import { useProfileStore } from "../store/useProfileStore";
import { motion } from "framer-motion";

const PreviewPanel = () => {
  const { profile } = useProfileStore();
  const { name, bio, avatarUrl, theme, links } = profile;

  const formatUrl = (url: string) => {
    if (!url) return "#";
    if (/^https?:\/\//i.test(url)) return url;
    return `https://${url}`;
  };
  return (
    <div className="w-[320px] h-[640px] flex flex-col bg-zinc-950 border-8 border-zinc-800 relative rounded-[40px] shadow-2xl overflow-hidden">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-800 rounded-full z-10" />
      <div
        className="flex-1 pt-10 p-6 flex flex-col items-center overflow-y-auto no-scrollbar h-full"
        style={{ backgroundColor: theme.backgroundColor }}
      >
        <div className="w-20 h-20 border-zinc-700/50 border-2 rounded-full bg-zinc-800 overflow-hidden flex items-center justify-center shadow-md">
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
        </div>
        <div>
          <h2
            className={`mt-4 text-lg font-bold text-center `}
            style={{ color: theme.buttonBackgroundColor }}
          >
            {name || "Your Name"}
          </h2>
        </div>
        <div>
          <h2
            className={`mt-4 text-xs font-bold text-center max-w-[200px] break-words leading-relaxed `}
            style={{ color: theme.buttonBackgroundColor }}
          >
            {bio || "Your bio will appear here..."}
          </h2>
        </div>

        <div className="w-full border-b border-zinc-800/50 my-6" />

        <div className="w-full flex-1 space-y-2">
          {links.length === 0 ? (
            <div className="text-[10px] text-zinc-600 text-center mt-8 italic">
              No linkes added yet
            </div>
          ) : (
            links.map((link) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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
              </motion.a>
            ))
          )}
        </div>

        <div>
          <span className="text-[10px] text-zinc-500 tracking-widest font-semibold uppercase opacity-60">
            ⚡ LinkSnap
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
