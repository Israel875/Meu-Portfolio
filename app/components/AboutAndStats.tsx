
export function AboutMe({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: darkMode ? "#0f0f1a" : "#f8f7ff" }}
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-50 rounded-full filter blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-50 rounded-full filter blur-3xl opacity-60 translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="flex items-center gap-3 mb-10">
          <span className="text-2xl">👨‍💻</span>
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', color: darkMode ? "#f1f5f9" : "#0f172a" }}>
            Sobre Mim
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          
          <div className="flex flex-col gap-5">
            <p className="text-lg leading-relaxed" style={{ color: darkMode ? "#94a3b8" : "#475569" }}>
              Desenvolvedor focado em <span className="text-indigo-500 font-semibold">evolução constante</span>,
              apaixonado por resolver problemas e construir soluções que geram <span className="text-violet-500 font-semibold">impacto real</span>.
            </p>
            <p className="text-base leading-relaxed" style={{ color: darkMode ? "#64748b" : "#64748b" }}>
              Atualmente construindo aplicações web modernas com React, Next.js e Java.
              Sempre buscando aprender novas tecnologias e melhorar minhas habilidades a cada projeto.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { icon: "📍", label: "Localização", value: "Brasil" },
                { icon: "🎓", label: "Foco", value: "Full Stack" },
                { icon: "🚀", label: "Status", value: "Disponível" },
                { icon: "💡", label: "Interesse", value: "Automações" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-3 border"
                  style={{
                    background: darkMode ? "rgba(30,30,50,0.8)" : "#f8fafc",
                    borderColor: darkMode ? "rgba(99,102,241,0.2)" : "#e2e8f0",
                  }}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span>{item.icon}</span>
                    <span className="text-xs font-medium" style={{ color: darkMode ? "#64748b" : "#94a3b8" }}>{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: darkMode ? "#e2e8f0" : "#334155" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: darkMode ? "#64748b" : "#94a3b8" }}>
              Nível de habilidade
            </p>
            {[
              { label: "React / Next.js",    percent: 75, color: "from-indigo-500 to-violet-500" },
              { label: "Java / Spring Boot",  percent: 70, color: "from-violet-500 to-pink-500" },
              { label: "TypeScript",          percent: 40, color: "from-blue-500 to-indigo-500" },
              { label: "Tailwind CSS",        percent: 80, color: "from-cyan-400 to-blue-500" },
              { label: "n8n / Automações",    percent: 50, color: "from-pink-500 to-orange-400" },
            ].map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium" style={{ color: darkMode ? "#cbd5e1" : "#475569" }}>{skill.label}</span>
                  <span className="text-xs" style={{ color: darkMode ? "#64748b" : "#94a3b8" }}>{skill.percent}%</span>
                </div>
                <div className="w-full rounded-full h-2" style={{ background: darkMode ? "rgba(99,102,241,0.15)" : "#f1f5f9" }}>
                  <div className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`} style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


export function GitHubStats({ username, darkMode }: { username: string; darkMode: boolean }) {
  const bg = darkMode ? "151515" : "ffffff";
  const titleColor = "4f46e5";
  const textColor = darkMode ? "cbd5e1" : "334155";
  const iconColor = "7c3aed";

  return (
    <section
      className="py-20 px-6"
      style={{ background: darkMode ? "#0a0a14" : "#f1f5f9" }}
    >
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-3 mb-10">
          <span className="text-2xl">📊</span>
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', color: darkMode ? "#f1f5f9" : "#0f172a" }}>
            GitHub Stats
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div
            className="rounded-2xl border p-4 flex items-center justify-center overflow-hidden"
            style={{ background: darkMode ? "rgba(20,20,40,0.8)" : "white", borderColor: darkMode ? "rgba(99,102,241,0.2)" : "#e2e8f0" }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=${bg}&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}`}
              alt="GitHub Stats"
              className="w-full max-w-sm"
            />
          </div>

          <div
            className="rounded-2xl border p-4 flex items-center justify-center overflow-hidden"
            style={{ background: darkMode ? "rgba(20,20,40,0.8)" : "white", borderColor: darkMode ? "rgba(99,102,241,0.2)" : "#e2e8f0" }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=${bg}&title_color=${titleColor}&text_color=${textColor}`}
              alt="Linguagens mais usadas"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        <div
          className="rounded-2xl border p-4 flex items-center justify-center overflow-hidden"
          style={{ background: darkMode ? "rgba(20,20,40,0.8)" : "white", borderColor: darkMode ? "rgba(99,102,241,0.2)" : "#e2e8f0" }}
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=${bg}&stroke=e2e8f0&ring=${titleColor}&fire=${iconColor}&currStreakLabel=${titleColor}&sideLabels=${textColor}&dates=${textColor}&currStreakNum=${titleColor}&sideNums=${titleColor}`}
            alt="GitHub Streak"
            className="w-full max-w-2xl"
          />
        </div>

      </div>
    </section>
  );
}