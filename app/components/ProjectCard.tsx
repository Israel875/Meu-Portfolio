export default function ProjectCard({
  title, desc, tag, color, delay, href, hrefFront,
}: {
  title: string; desc: string; tag: string;
  color: string; delay: string;
  href?: string; hrefFront?: string;
}) {
  return (
    <div className="group relative bg-white/70 backdrop-blur border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
      style={{ animationDelay: delay }}>
      <div className={`absolute top-0 left-0 right-0 h-1 ${color} rounded-t-2xl`} />
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-2">{tag}</span>
      <h3 className="text-slate-900 font-bold text-base mb-1.5 group-hover:text-indigo-700 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>

      
      <div className="mt-4 flex gap-2">
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
            Backend →
          </a>
        )}
        {hrefFront && (
          <a href={hrefFront} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-50 text-violet-600 hover:bg-violet-100 transition-colors">
            Frontend →
          </a>
        )}
      </div>
    </div>
  );
}