import { ArrowRight, Terminal, Download } from "lucide-react";

function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent)",
          animationDelay: "2s",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8">
          <Terminal className="w-3 h-3" />
          Ferramenta CLI para baixar videos
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Baixe vídeos com{" "}
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            um comando
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Clipr é uma CLI robusta para baixar vídeos do{" "}
          <span className="text-red-400 font-semibold">YouTube</span> e{" "}
          <span className="text-pink-400 font-semibold">Instagram Reels</span>{" "}
          com qualidade máxima, organização automática e prevenção de
          duplicatas.
        </p>

        {/* Terminal preview */}
        <div className="max-w-xl mx-auto mb-10 rounded-xl overflow-hidden border border-[#2a2a38] shadow-2xl shadow-violet-900/20">
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#18181f] border-b border-[#2a2a38]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-slate-500 font-mono">
              terminal
            </span>
          </div>
          <div className="bg-[#111118] px-5 py-5 text-left font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-violet-400">$</span>
              <span className="text-slate-200">
                clipr download https://youtube.com/watch?v=...
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2 opacity-80">
              <span className="text-cyan-400">✓</span>
              <span className="text-slate-400">
                Detectando plataforma... YouTube
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2 opacity-80">
              <span className="text-cyan-400">✓</span>
              <span className="text-slate-400">
                Resolução: 1920×1080 (Full HD)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-green-300">Download concluído!</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#install"
            className="flex items-center gap-2 px-6 py-3 text-base font-semibold text-white rounded-xl transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              boxShadow: "0 0 30px rgba(124,58,237,0.4)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 40px rgba(124,58,237,0.6)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 30px rgba(124,58,237,0.4)")
            }
          >
            <Download className="w-4 h-4" />
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/CavalariDev/clipr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-base font-medium text-slate-300 border border-[#2a2a38] rounded-xl hover:border-violet-500/50 hover:text-white transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            Ver no GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "4+", label: "Plataformas" },
            { value: "Full HD", label: "Qualidade máx." },
            { value: "100%", label: "Open Source" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
