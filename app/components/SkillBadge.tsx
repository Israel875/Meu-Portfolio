export default function SkillBadge({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-700 text-xs font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none">
      <span>{icon}</span>
      {label}
    </span>
  );
}