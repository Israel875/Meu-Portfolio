"use client";

export default function ShimmerButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
}) {
  const base =
    "relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:scale-105"
      : "border-2 border-indigo-200 text-indigo-700 hover:border-indigo-400 hover:scale-105 bg-white/60 backdrop-blur-sm";

  const El = href ? "a" : "button";

  return (
    // @ts-ignore
    <El href={href} className={`${base} ${styles}`}>
      {/* shimmer sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
      {children}
    </El>
  );
}