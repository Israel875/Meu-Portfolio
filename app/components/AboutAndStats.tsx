
/* ─────────────────────────────────────────────────────────────────────────────
   AboutAndStats.tsx
   Exports: AboutMe | Education | Skills | ExperienceWith
───────────────────────────────────────────────────────────────────────────── */

/* ── shared section-header helper ── */
function SectionHeader({ icon, title, darkMode }: { icon: string; title: string; darkMode: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-2xl">{icon}</span>
      <h2
        className="text-2xl font-extrabold"
        style={{ fontFamily: "Bricolage Grotesque, sans-serif", color: darkMode ? "#f1f5f9" : "#0f172a" }}
      >
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-indigo-300/50 to-transparent" />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   ABOUT ME
══════════════════════════════════════════════════════════════════════════════ */
export function AboutMe({ darkMode }: { darkMode: boolean }) {
  const infoBg     = darkMode ? "rgba(30,30,50,0.8)"  : "#f8fafc";
  const infoBorder = darkMode ? "rgba(99,102,241,0.2)" : "#e2e8f0";

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: darkMode ? "#0f0f1a" : "#f8f7ff" }}
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-50 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-50 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader icon="👨‍💻" title="Sobre Mim" darkMode={darkMode} />

        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="text-lg leading-relaxed" style={{ color: darkMode ? "#94a3b8" : "#475569" }}>
            Sou de <span className="text-indigo-500 font-semibold">Marialva, PR</span>, e estou em{" "}
            <span className="text-violet-500 font-semibold">transição de carreira</span> para a área de tecnologia.
            Trabalho no período noturno enquanto dedico meu dia a estudar programação, construir projetos reais e
            evoluir como desenvolvedor.
          </p>
          <p className="text-base leading-relaxed" style={{ color: darkMode ? "#64748b" : "#64748b" }}>
            Cursando <span style={{ color: darkMode ? "#c4b5fd" : "#7c3aed" }} className="font-medium">Análise e Desenvolvimento de Sistemas</span> na Unifamma e{" "}
            <span style={{ color: darkMode ? "#c4b5fd" : "#7c3aed" }} className="font-medium">Full Stack Java</span> na EBAC, aplico na prática tudo que aprendo através de projetos
            que você pode ver aqui.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
            {[
              { icon: "📍", label: "Localização", value: "Marialva, PR" },
              { icon: "🎓", label: "Formação",    value: "ADS + Full Stack Java" },
              { icon: "🚀", label: "Status",      value: "Disponível" },
              { icon: "☕", label: "Foco",        value: "Java Full Stack" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-3 border"
                style={{ background: infoBg, borderColor: infoBorder }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span>{item.icon}</span>
                  <span className="text-xs font-medium" style={{ color: darkMode ? "#64748b" : "#94a3b8" }}>
                    {item.label}
                  </span>
                </div>
                <span className="text-sm font-semibold" style={{ color: darkMode ? "#e2e8f0" : "#334155" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   EDUCATION
══════════════════════════════════════════════════════════════════════════════ */
export function Education({ darkMode }: { darkMode: boolean }) {
  const cardBg  = darkMode ? "rgba(20,20,40,0.9)"   : "rgba(255,255,255,0.95)";
  const border  = darkMode ? "rgba(99,102,241,0.22)" : "#e2e8f0";

  const courses = [
    {
      icon: "🎓",
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Unifamma",
      status: "Em andamento",
      details: "Fundamentos de computação, estruturas de dados, banco de dados, engenharia de software e desenvolvimento de sistemas.",
      accent: "from-indigo-500 to-violet-500",
      accentBg: darkMode ? "rgba(79,70,229,0.12)" : "#eef2ff",
      accentText: darkMode ? "#a5b4fc" : "#4f46e5",
    },
    {
      icon: "🎓",
      degree: "Full Stack Java",
      institution: "EBAC",
      status: "Em andamento",
      details: "Java, Spring Boot, APIs REST, React, TypeScript, PostgreSQL, Docker, arquitetura de microsserviços e boas práticas de desenvolvimento.",
      accent: "from-violet-500 to-pink-500",
      accentBg: darkMode ? "rgba(139,92,246,0.12)" : "#f5f3ff",
      accentText: darkMode ? "#c4b5fd" : "#7c3aed",
    },
  ];

  return (
    <section
      className="relative py-20 px-6"
      style={{ background: darkMode ? "#0a0a14" : "#f1f5f9" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon="🎓" title="Formação" darkMode={darkMode} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {courses.map((c) => (
            <div
              key={c.degree}
              className="relative rounded-2xl overflow-hidden border flex flex-col"
              style={{
                background: cardBg,
                borderColor: border,
                backdropFilter: "blur(16px)",
                boxShadow: darkMode
                  ? "0 4px 20px rgba(0,0,0,0.3)"
                  : "0 4px 20px rgba(79,70,229,0.07)",
              }}
            >
              {/* top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${c.accent}`} />

              <div className="p-6 flex flex-col gap-3 flex-1">
                {/* status badge */}
                <span
                  className="self-start text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: c.accentBg, color: c.accentText }}
                >
                  ● Em andamento
                </span>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: darkMode ? "#64748b" : "#94a3b8" }}>
                    {c.institution}
                  </p>
                  <h3
                    className="text-lg font-extrabold leading-snug"
                    style={{ color: darkMode ? "#f1f5f9" : "#0f172a", fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    {c.degree}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: darkMode ? "#94a3b8" : "#64748b" }}>
                  {c.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SKILLS — cards com ícones DevIcons
══════════════════════════════════════════════════════════════════════════════ */
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const SKILLS = [
  { name: "React",       icon: `${DEVICON}/react/react-original.svg`,           accent: "#61dafb", group: "Frontend" },
  { name: "Next.js",     icon: `${DEVICON}/nextjs/nextjs-original.svg`,         accent: "#94a3b8", group: "Frontend" },
  { name: "TypeScript",  icon: `${DEVICON}/typescript/typescript-original.svg`, accent: "#3178c6", group: "Frontend" },
  { name: "Tailwind",    icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, accent: "#06b6d4", group: "Frontend" },
  { name: "Java",        icon: `${DEVICON}/java/java-original.svg`,             accent: "#ed8b00", group: "Backend" },
  { name: "Spring Boot", icon: `${DEVICON}/spring/spring-original.svg`,         accent: "#6db33f", group: "Backend" },
  { name: "PostgreSQL",  icon: `${DEVICON}/postgresql/postgresql-original.svg`, accent: "#336791", group: "Backend" },
  { name: "Docker",      icon: `${DEVICON}/docker/docker-original.svg`,         accent: "#2496ed", group: "DevOps" },
  { name: "Git",         icon: `${DEVICON}/git/git-original.svg`,               accent: "#f05032", group: "DevOps" },
];

export function Skills({ darkMode }: { darkMode: boolean }) {
  const cardBg = darkMode ? "rgba(20,20,40,0.9)"   : "rgba(255,255,255,0.95)";
  const border = darkMode ? "rgba(99,102,241,0.18)" : "#e2e8f0";

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: darkMode ? "#0f0f1a" : "#f8f7ff" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-100/30 filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader icon="🛠️" title="Tecnologias" darkMode={darkMode} />

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-4">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl border cursor-default transition-all duration-300 hover:-translate-y-2"
              style={{
                background: cardBg,
                borderColor: border,
                backdropFilter: "blur(12px)",
                boxShadow: darkMode ? "0 2px 10px rgba(0,0,0,0.25)" : "0 2px 8px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = s.accent + "88";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${s.accent}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = border;
                (e.currentTarget as HTMLDivElement).style.boxShadow = darkMode
                  ? "0 2px 10px rgba(0,0,0,0.25)"
                  : "0 2px 8px rgba(0,0,0,0.05)";
              }}
            >
              {/* icon */}
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={s.icon}
                  alt={s.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  style={s.name === "Next.js" && darkMode ? { filter: "invert(1)" } : {}}
                />
              </div>
              {/* name */}
              <span
                className="text-xs font-semibold text-center leading-tight"
                style={{ color: darkMode ? "#cbd5e1" : "#475569" }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   EXPERIENCE WITH
══════════════════════════════════════════════════════════════════════════════ */
const EXP_ITEMS = [
  { icon: "🔗", title: "APIs REST",            desc: "Spring Boot, padrão RESTful, versionamento" },
  { icon: "🔐", title: "JWT Authentication",   desc: "Autenticação stateless e tokens seguros" },
  { icon: "🛡️", title: "Spring Security",      desc: "Controle de acesso, roles e permissões" },
  { icon: "🐳", title: "Docker",               desc: "Containerização e orquestração de serviços" },
  { icon: "🐘", title: "PostgreSQL",           desc: "Banco relacional, queries, migrations" },
  { icon: "🚀", title: "Deploy Vercel",        desc: "CI/CD automatizado com domínio customizado" },
  { icon: "💳", title: "Pagamentos",           desc: "InfinitePay integrado em e-commerce real" },
  { icon: "✅", title: "Testes Técnicos",      desc: "Desafios reais baseados em necessidade de empresa" },
];

export function ExperienceWith({ darkMode }: { darkMode: boolean }) {
  const cardBg = darkMode ? "rgba(20,20,40,0.9)"   : "rgba(255,255,255,0.95)";
  const border = darkMode ? "rgba(99,102,241,0.18)" : "#e2e8f0";

  return (
    <section className="py-20 px-6" style={{ background: darkMode ? "#0a0a14" : "#f1f5f9" }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon="⚡" title="Experiência com" darkMode={darkMode} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXP_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: cardBg,
                borderColor: border,
                backdropFilter: "blur(12px)",
                boxShadow: darkMode
                  ? "0 2px 12px rgba(0,0,0,0.25)"
                  : "0 2px 8px rgba(79,70,229,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  darkMode ? "rgba(99,102,241,0.5)" : "#a5b4fc";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 28px rgba(79,70,229,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = border;
                (e.currentTarget as HTMLDivElement).style.boxShadow = darkMode
                  ? "0 2px 12px rgba(0,0,0,0.25)"
                  : "0 2px 8px rgba(79,70,229,0.06)";
              }}
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p
                  className="font-bold text-sm mb-1"
                  style={{ color: darkMode ? "#e2e8f0" : "#1e293b" }}
                >
                  {item.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: darkMode ? "#64748b" : "#94a3b8" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
