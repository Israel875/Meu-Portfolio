"use client";

import { useEffect, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import SkillBadge from "./SkillBadge";
import ProjectCard from "./ProjectCard";

interface HeroSectionProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

/* ── LinkedIn SVG ── */
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.191 11.846 12.908 13.291 12.908 14.785V20.452H9.352V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
  </svg>
);

export default function HeroSection({ darkMode, setDarkMode }: HeroSectionProps) {
  const [, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }

        .hero-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }

        .display-font { font-family: 'Bricolage Grotesque', sans-serif; }

        .gradient-text {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 40%, #db2777 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 4s ease infinite;
        }

        .status-dot {
          width: 10px; height: 10px;
          background: #22c55e;
          border-radius: 50%;
          animation: statusPulse 2s ease infinite;
        }

        @keyframes statusPulse {
          0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          70%  { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        @keyframes gradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .slide-in {
          animation: slideIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .avail-banner {
          animation: bannerIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s both;
        }

        @keyframes bannerIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <section className="hero-root" style={{ background: darkMode ? "#0f0f1a" : "#f8f7ff" }}>

        {/* dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full backdrop-blur border shadow-md flex items-center justify-center text-lg hover:scale-110 transition-all"
          style={{
            background: darkMode ? "rgba(30,30,50,0.8)" : "rgba(255,255,255,0.8)",
            borderColor: darkMode ? "rgba(99,102,241,0.3)" : "#e2e8f0",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* blobs */}
        <div className="blob w-96 h-96 bg-indigo-200/50 top-[-80px] right-[-60px]" />
        <div className="blob w-80 h-80 bg-violet-200/40 bottom-20 left-[-40px]" />
        <div className="blob w-64 h-64 bg-pink-200/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <ParticleCanvas />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col gap-20">

          {/* ── HERO INTRO ── */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

            {/* photo */}
            <div className="flex-shrink-0 slide-in" style={{ animationDelay: "0s" }}>
              <div style={{ width: 160, height: 160, background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #6366f1)", borderRadius: "50%", padding: 3 }}>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden border-4 border-white">
                  <img
                    src="/image.jpg"
                    alt="Israel Santos"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 justify-center">
                <div className="status-dot" />
                <span className="text-xs font-medium" style={{ color: darkMode ? "#94a3b8" : "#64748b" }}>
                  Disponível para contratação
                </span>
              </div>
            </div>

            {/* text content */}
            <div className="flex flex-col gap-4 text-center md:text-left flex-1">

              {/* role badge */}
              <div
                className="slide-in inline-flex items-center gap-2 self-center md:self-start px-4 py-1.5 rounded-full text-indigo-500 text-xs font-semibold tracking-wide"
                style={{
                  background: darkMode ? "rgba(79,70,229,0.15)" : "#eef2ff",
                  border: `1px solid ${darkMode ? "rgba(99,102,241,0.3)" : "#c7d2fe"}`,
                  animationDelay: "0.1s",
                }}
              >
                <span>✦</span> Java Full Stack Developer Júnior
              </div>

              {/* headline */}
              <h1
                className="display-font text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] slide-in"
                style={{ color: darkMode ? "#f1f5f9" : "#0f172a", animationDelay: "0.2s" }}
              >
                Olá, eu sou
                <br />
                <span className="gradient-text">Israel Santos</span>
              </h1>

              {/* description */}
              <p
                className="text-base md:text-lg max-w-xl leading-relaxed slide-in"
                style={{ color: darkMode ? "#94a3b8" : "#64748b", animationDelay: "0.3s" }}
              >
                Desenvolvedor Java Full Stack em transição de carreira, focado em construir aplicações reais com{" "}
                <span className="text-indigo-500 font-semibold">Spring Boot</span>,{" "}
                <span className="text-indigo-500 font-semibold">React</span>,{" "}
                <span className="text-indigo-500 font-semibold">PostgreSQL</span> e{" "}
                <span className="text-indigo-500 font-semibold">Docker</span>.
                <br />
                <span style={{ color: darkMode ? "#cbd5e1" : "#475569" }}>
                  Transformo estudo em projetos práticos, desafios técnicos e soluções que geram resultado.
                </span>
              </p>

              {/* ── AVAILABILITY BANNER ── */}
              <div
                className="avail-banner self-center md:self-start flex items-center gap-3 px-5 py-3.5 rounded-2xl border"
                style={{
                  background: darkMode ? "rgba(16,185,129,0.10)" : "#f0fdf4",
                  borderColor: darkMode ? "rgba(16,185,129,0.35)" : "#86efac",
                  boxShadow: darkMode ? "0 0 20px rgba(16,185,129,0.08)" : "0 0 20px rgba(16,185,129,0.10)",
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" style={{ animation: "statusPulse 2s ease infinite" }} />
                <span
                  className="text-sm font-semibold leading-snug text-left"
                  style={{ color: darkMode ? "#34d399" : "#15803d" }}
                >
                  Disponível para oportunidades como{" "}
                  <strong>Desenvolvedor Java Full Stack Júnior</strong>
                </span>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-2.5 justify-center md:justify-start slide-in" style={{ animationDelay: "0.5s" }}>
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:scale-105 hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", boxShadow: "0 4px 18px rgba(79,70,229,0.35)" }}
                >
                  🚀 Ver Projetos
                </a>

                <a
                  href="/cv.pdf"
                  download="Israel-Santos-CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all hover:scale-105"
                  style={{
                    borderColor: darkMode ? "rgba(99,102,241,0.5)" : "#6366f1",
                    color: darkMode ? "#a5b4fc" : "#4f46e5",
                    background: darkMode ? "rgba(79,70,229,0.1)" : "transparent",
                  }}
                >
                  📄 Baixar CV
                </a>

                <a
                  href="https://www.linkedin.com/in/israellsantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:scale-105 hover:opacity-90"
                  style={{ background: "#0a66c2" }}
                >
                  <LinkedInIcon /> LinkedIn
                </a>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:scale-105"
                  style={{
                    borderColor: darkMode ? "rgba(99,102,241,0.25)" : "#e2e8f0",
                    color: darkMode ? "#94a3b8" : "#64748b",
                    background: "transparent",
                  }}
                >
                  💬 Contato
                </a>
              </div>

              {/* skill badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start slide-in" style={{ animationDelay: "0.6s" }}>
                {[
                  { label: "Java",        icon: "☕" },
                  { label: "Spring Boot", icon: "🌱" },
                  { label: "React",       icon: "⚛️" },
                  { label: "Next.js",     icon: "▲"  },
                  { label: "TypeScript",  icon: "🔷" },
                  { label: "PostgreSQL",  icon: "🐘" },
                  { label: "Docker",      icon: "🐳" },
                ].map((s) => (
                  <SkillBadge key={s.label} {...s} />
                ))}
              </div>
            </div>
          </div>

          {/* ── PROJECTS ── */}
          <div id="projetos" className="slide-in" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🚀</span>
              <h2
                className="display-font text-2xl font-bold"
                style={{ color: darkMode ? "#f1f5f9" : "#1e293b" }}
              >
                Projetos em Destaque
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-indigo-300/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ProjectCard
                featured
                darkMode={darkMode}
                title="RA Loja Virtual"
                desc="E-commerce completo com integração de pagamento via InfinitePay, cálculo de frete pelos Correios, notificações via WhatsApp e deploy na Vercel com domínio personalizado."
                highlight="Projeto real em produção com integração de pagamento, cálculo de frete, deploy e domínio próprio."
                tag="Next.js + TypeScript + Supabase"
                color="bg-gradient-to-r from-indigo-500 to-violet-500"
                delay="0.8s"
                hrefLive="https://ravirtual.com.br"
                href="https://github.com/Israel875/ravirtual"
              />
              <ProjectCard
                darkMode={darkMode}
                title="Todo-List"
                desc="Aplicação em React com gerenciamento global de estado usando Context API e Hooks, focada em arquitetura limpa e performance."
                tag="React + JavaScript (ES6+)"
                color="bg-gradient-to-r from-indigo-500 to-violet-500"
                delay="0.9s"
                href="https://github.com/Israel875/Todo-list"
              />
              <ProjectCard
                darkMode={darkMode}
                title="Sistema de Almoxarifado"
                desc="Sistema web completo de gerenciamento de estoque com CRUD de produtos e matérias-primas, algoritmo de sugestão de produção e layout responsivo."
                note="Desenvolvido como teste técnico baseado em necessidade real de empresa."
                tag="Java + React"
                color="bg-gradient-to-r from-violet-500 to-pink-500"
                delay="1.0s"
                href="https://github.com/Israel875/inventory-system-backend"
                hrefFront="https://github.com/Israel875/inventory-system-frontend"
                badge="✅ Teste Técnico"
              />
              <ProjectCard
                darkMode={darkMode}
                title="Tasks API"
                desc="API REST de gerenciamento de tarefas com autenticação JWT, controle de usuários, Spring Security, banco PostgreSQL e containerização com Docker."
                tag="Spring Boot + PostgreSQL + Docker + JWT"
                color="bg-gradient-to-r from-emerald-500 to-teal-500"
                delay="1.1s"
                href="https://github.com/Israel875/tasks-api"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
