"use client";

import { useEffect, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import ShimmerButton from "./ShimmerButton";
import SkillBadge from "./SkillBadge";
import ProjectCard from "./ProjectCard";

interface HeroSectionProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function HeroSection({ darkMode, setDarkMode }: HeroSectionProps) {
  const [visible, setVisible] = useState(false);

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

        @keyframes gradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s ease infinite;
        }

        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          70%  { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        .slide-in {
          animation: slideIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        className="hero-root"
        style={{ background: darkMode ? "#0f0f1a" : "#f8f7ff" }}
      >
        
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

        <div className="blob w-96 h-96 bg-indigo-200/50 top-[-80px] right-[-60px]" />
        <div className="blob w-80 h-80 bg-violet-200/40 bottom-20 left-[-40px]" />
        <div className="blob w-64 h-64 bg-pink-200/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <ParticleCanvas />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col gap-20">

          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

           
            <div className="flex-shrink-0 slide-in" style={{ animationDelay: "0s" }}>
              <div style={{ width: 160, height: 160, background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #6366f1)", borderRadius: "50%", padding: 3 }}>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden border-4 border-white">
                  <img
                    src="/image.jpg"
                    alt="Israel Santos"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 justify-center">
                <div className="status-dot" />
                <span className="text-xs font-medium" style={{ color: darkMode ? "#94a3b8" : "#64748b" }}>
                  Disponível para projetos
                </span>
              </div>
            </div>

            
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div
                className="slide-in inline-flex items-center gap-2 self-center md:self-start px-4 py-1.5 rounded-full text-indigo-500 text-xs font-semibold tracking-wide"
                style={{
                  background: darkMode ? "rgba(79,70,229,0.15)" : "#eef2ff",
                  border: `1px solid ${darkMode ? "rgba(99,102,241,0.3)" : "#c7d2fe"}`,
                  animationDelay: "0.1s",
                }}
              >
                <span>✦</span> Full Stack Developer Júnior
              </div>

              <h1
                className="display-font text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] slide-in"
                style={{ color: darkMode ? "#f1f5f9" : "#0f172a", animationDelay: "0.2s" }}
              >
                Olá, eu sou
                <br />
                <span className="gradient-text">Israel Santos</span>
              </h1>

              <p
                className="text-lg max-w-lg leading-relaxed slide-in"
                style={{ color: darkMode ? "#94a3b8" : "#64748b", animationDelay: "0.3s" }}
              >
                Desenvolvedor Full Stack focado em construir aplicações modernas, escaláveis e bem estruturadas.{" "}
                <span className="text-indigo-500 font-medium">React</span>,{" "}
                <span className="text-indigo-500 font-medium">Next.js</span> e{" "}
                <span className="text-indigo-500 font-medium">Java</span>.
              </p>

              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start slide-in" style={{ animationDelay: "0.4s" }}>
                <ShimmerButton href="#projetos" variant="primary">
                  <span>🚀</span> Ver Projetos
                </ShimmerButton>
                <ShimmerButton href="#contato" variant="outline">
                  <span>💬</span> Entrar em Contato
                </ShimmerButton>
              </div>

              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start slide-in" style={{ animationDelay: "0.5s" }}>
                {[
                  { label: "React",      icon: "⚛️" },
                  { label: "Next.js",    icon: "▲"  },
                  { label: "Java",       icon: "☕" },
                  { label: "TypeScript", icon: "🔷" },
                  { label: "Tailwind",   icon: "🌊" },
                  { label: "n8n",        icon: "⚙️" },
                ].map((s) => (
                  <SkillBadge key={s.label} {...s} />
                ))}
              </div>
            </div>
          </div>

          
          <div className="slide-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-3 mb-6">
              <h2
                className="display-font text-2xl font-bold"
                style={{ color: darkMode ? "#f1f5f9" : "#1e293b" }}
              >
                Projetos em Destaque
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProjectCard
                title="Todo-List"
                desc="Aplicação em React com gerenciamento global de estado usando Context API e Hooks, focada em arquitetura limpa e performance."
                tag="React + JavaScript(ES6+)"
                color="bg-gradient-to-r from-indigo-500 to-violet-500"
                delay="0.7s"
                href="https://github.com/Israel875/Todo-list"
              />
              <ProjectCard
                title="App Full Stack"
                desc="Aplicação full stack em inglês com autenticação JWT, backend em Spring Boot e frontend em React, simulando ambiente real de produção."
                tag="Java + React"
                color="bg-gradient-to-r from-violet-500 to-pink-500"
                delay="0.8s"
                href="https://github.com/Israel875/inventory-system-backend"
                hrefFront="https://github.com/Israel875/inventory-system-frontend"
              />
              <ProjectCard
                title="Jogo de Adivinhação"
                desc="Jogo interativo de adivinhação desenvolvido em JavaScript puro com lógica de pontuação e feedback ao usuário."
                tag="JavaScript"
                color="bg-gradient-to-r from-pink-500 to-orange-400"
                delay="0.9s"
                href="https://github.com/Israel875/jogo-de-adivinha-o"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}