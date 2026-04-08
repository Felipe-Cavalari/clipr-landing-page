import {
  Zap,
  FolderOpen,
  ShieldCheck,
  Layers,
  MonitorPlay,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Detecção automática",
    description:
      "Identifica YouTube ou Instagram automaticamente pela URL. Sem configurações manuais.",
    color: "from-yellow-500 to-orange-500",
    bg: "rgba(234,179,8,0.1)",
    border: "rgba(234,179,8,0.2)",
  },
  {
    icon: MonitorPlay,
    title: "Qualidade otimizada",
    description:
      "Full HD para vídeos horizontais, 1080×1920 para Shorts e melhor qualidade disponível para Reels.",
    color: "from-violet-500 to-purple-600",
    bg: "rgba(124,58,237,0.1)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    icon: FolderOpen,
    title: "Organização automática",
    description:
      "Pastas separadas por plataforma criadas automaticamente. YouTube/ e Instagram/ prontos.",
    color: "from-cyan-500 to-blue-500",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: ShieldCheck,
    title: "Sem duplicatas",
    description:
      "Verifica vídeos já baixados antes de iniciar. Economize espaço sem esforço.",
    color: "from-green-500 to-emerald-600",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    icon: Layers,
    title: "Download em lote",
    description:
      "Passe múltiplas URLs de uma vez com o comando batch. Com opção de continuar mesmo com erros.",
    color: "from-pink-500 to-rose-600",
    bg: "rgba(236,72,153,0.1)",
    border: "rgba(236,72,153,0.2)",
  },
  {
    icon: Sparkles,
    title: "Interface bonita",
    description:
      "Logs coloridos com Rich. Feedback visual claro sobre cada etapa do download.",
    color: "from-indigo-500 to-violet-600",
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.2)",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            Recursos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tudo que você precisa,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              sem complicação
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Clipr combina simplicidade de uso com recursos avançados para quem
            precisa de desempenho e organização.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: f.bg,
                  border: `1px solid ${f.border}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${f.color
                      .replace("from-", "")
                      .split(" to-")
                      .map((c) => `var(--tw-gradient-${c})`)
                      .join(", ")})`,
                    background: f.bg.replace("0.1", "0.3"),
                    border: `1px solid ${f.border}`,
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{
                      color: f.color.includes("yellow")
                        ? "#fbbf24"
                        : f.color.includes("violet")
                          ? "#a78bfa"
                          : f.color.includes("cyan")
                            ? "#22d3ee"
                            : f.color.includes("green")
                              ? "#34d399"
                              : f.color.includes("pink")
                                ? "#f472b6"
                                : "#818cf8",
                    }}
                  />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Platform badges */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#18181f] border border-[#2a2a38]">
            <span className="text-2xl">▶️</span>
            <div className="text-left">
              <div className="text-sm font-semibold text-white">YouTube</div>
              <div className="text-xs text-slate-500">Vídeos + Shorts</div>
            </div>
          </div>
          <div className="hidden sm:block text-slate-600 text-sm">+</div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#18181f] border border-[#2a2a38]">
            <span className="text-2xl">📸</span>
            <div className="text-left">
              <div className="text-sm font-semibold text-white">Instagram</div>
              <div className="text-xs text-slate-500">Reels</div>
            </div>
          </div>
          <div className="hidden sm:block text-slate-600 text-sm">+</div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-dashed border-[#2a2a38]">
            <span className="text-2xl opacity-40">🎵</span>
            <div className="text-left">
              <div className="text-sm font-medium text-slate-500">TikTok</div>
              <div className="text-xs text-slate-600">Em breve</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
