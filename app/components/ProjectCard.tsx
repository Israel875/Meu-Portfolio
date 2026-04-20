"use client";

export default function ProjectCard({
  title, desc, tag, color, delay, href, hrefFront, hrefLive,
  featured, darkMode, badge, highlight, note,
}: {
  title: string; desc: string; tag: string;
  color: string; delay: string;
  href?: string; hrefFront?: string; hrefLive?: string;
  featured?: boolean; darkMode?: boolean;
  badge?: string; highlight?: string; note?: string;
}) {
  const cardBg   = darkMode ? "rgba(18,18,35,0.95)" : "rgba(255,255,255,0.95)";
  const border   = darkMode ? "rgba(99,102,241,0.22)" : "#e2e8f0";
  const titleCol = darkMode ? "#f1f5f9" : "#0f172a";
  const descCol  = darkMode ? "#94a3b8" : "#64748b";
  const tagCol   = darkMode ? "#a5b4fc" : "#6366f1";

  /* ── FEATURED CARD ──────────────────────────────────────────────── */
  if (featured) {
    return (
      <div
        className="group relative rounded-2xl overflow-hidden border col-span-full hover:-translate-y-1 transition-all duration-300"
        style={{
          background: cardBg,
          borderColor: border,
          backdropFilter: "blur(20px)",
          boxShadow: darkMode
            ? "0 8px 40px rgba(79,70,229,0.18), 0 1px 2px rgba(0,0,0,0.5)"
            : "0 8px 40px rgba(79,70,229,0.10), 0 1px 3px rgba(0,0,0,0.07)",
          animationDelay: delay,
        }}
      >
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${color}`} />

        <div className="flex flex-col md:flex-row">
          {/* thumbnail panel */}
          <div
            className="md:w-72 md:shrink-0 relative overflow-hidden flex items-center justify-center p-6 min-h-[200px]"
            style={{ background: "linear-gradient(145deg, #3730a3 0%, #5b21b6 50%, #7c3aed 100%)" }}
          >
            <div className="absolute w-40 h-40 rounded-full bg-white/5 -top-10 -right-10" />
            <div className="absolute w-24 h-24 rounded-full bg-white/5 bottom-4 -left-6" />

            <div className="relative z-10 w-full max-w-[210px] rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <div className="bg-slate-900/90 px-3 py-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400/90" />
                <span className="w-2 h-2 rounded-full bg-yellow-400/90" />
                <span className="w-2 h-2 rounded-full bg-green-400/90" />
                <div className="flex-1 bg-slate-700/80 rounded text-[9px] text-slate-300 text-center py-0.5 px-2 ml-1 truncate">
                  ravirtual.com.br
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-700 to-purple-800 p-5 flex flex-col items-center gap-3">
                <svg className="w-10 h-10 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div className="text-center">
                  <p className="text-white font-extrabold text-sm tracking-wide">RA Virtual</p>
                  <p className="text-white/50 text-[10px] mt-0.5">E-commerce em produção</p>
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <div className="h-1.5 rounded-full bg-white/20 w-full" />
                  <div className="h-1.5 rounded-full bg-white/15 w-4/5" />
                  <div className="h-1.5 rounded-full bg-white/10 w-3/5" />
                </div>
              </div>
            </div>
          </div>

          {/* content panel */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                  style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
                >
                  {tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  Em produção
                </span>
              </div>

              <h3
                className="text-xl md:text-2xl font-extrabold group-hover:text-indigo-500 transition-colors"
                style={{ color: titleCol, fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: descCol }}>{desc}</p>

              {/* highlight callout */}
              {highlight && (
                <div
                  className="flex items-start gap-2.5 p-3 rounded-xl text-xs font-medium leading-relaxed border"
                  style={{
                    background: darkMode ? "rgba(79,70,229,0.1)" : "#eef2ff",
                    borderColor: darkMode ? "rgba(99,102,241,0.3)" : "#c7d2fe",
                    color: darkMode ? "#a5b4fc" : "#4338ca",
                  }}
                >
                  <span className="shrink-0 text-sm">🚀</span>
                  <span>{highlight}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {hrefLive && (
                <a
                  href={hrefLive} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-full text-white transition-all hover:scale-105 hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", boxShadow: "0 2px 14px rgba(79,70,229,0.38)" }}
                >
                  🌐 Ver Live
                </a>
              )}
              {href && (
                <a
                  href={href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold px-5 py-2.5 rounded-full border transition-colors hover:bg-indigo-50"
                  style={{ borderColor: border, color: tagCol }}
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── REGULAR CARD ────────────────────────────────────────────────── */
  return (
    <div
      className="group relative rounded-2xl p-5 overflow-hidden border hover:-translate-y-2 transition-all duration-300 flex flex-col"
      style={{
        background: cardBg,
        borderColor: border,
        backdropFilter: "blur(16px)",
        boxShadow: darkMode ? "0 2px 12px rgba(0,0,0,0.35)" : "0 2px 10px rgba(0,0,0,0.06)",
        animationDelay: delay,
      }}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 ${color} rounded-t-2xl`} />

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tagCol }}>{tag}</span>
        {badge && (
          <span
            className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full border"
            style={{
              background: darkMode ? "rgba(16,185,129,0.15)" : "#ecfdf5",
              borderColor: darkMode ? "rgba(16,185,129,0.35)" : "#6ee7b7",
              color: darkMode ? "#34d399" : "#059669",
            }}
          >
            {badge}
          </span>
        )}
      </div>

      <h3
        className="font-bold text-base mb-2 group-hover:text-indigo-500 transition-colors"
        style={{ color: titleCol }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: descCol }}>{desc}</p>

      {/* note callout */}
      {note && (
        <div
          className="mt-3 flex items-start gap-2 p-2.5 rounded-lg text-xs font-medium leading-relaxed border"
          style={{
            background: darkMode ? "rgba(16,185,129,0.08)" : "#f0fdf4",
            borderColor: darkMode ? "rgba(16,185,129,0.2)" : "#bbf7d0",
            color: darkMode ? "#6ee7b7" : "#15803d",
          }}
        >
          <span className="shrink-0">💡</span>
          <span>{note}</span>
        </div>
      )}

      <div className="mt-4 flex gap-2 flex-wrap">
        {hrefLive && (
          <a href={hrefLive} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}>
            🌐 Live
          </a>
        )}
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
            style={{ background: darkMode ? "rgba(79,70,229,0.15)" : "#eef2ff", color: tagCol }}>
            {hrefFront ? "Backend →" : "GitHub →"}
          </a>
        )}
        {hrefFront && (
          <a href={hrefFront} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
            style={{
              background: darkMode ? "rgba(139,92,246,0.15)" : "#f5f3ff",
              color: darkMode ? "#c4b5fd" : "#7c3aed",
            }}>
            Frontend →
          </a>
        )}
      </div>
    </div>
  );
}
