import { MapPin } from "lucide-react";

const done = [
  "Detecção automática de plataforma",
  "Download Full HD para YouTube",
  "Suporte a Shorts (vertical)",
  "Download de Instagram Reels",
  "Organização automática de pastas",
  "Prevenção de duplicatas",
  "Download em lote (batch)",
  "Interface colorida com Rich",
  "Tratamento robusto de erros",
  "Nome personalizado de arquivo",
];

const upcoming = [
  { label: "Suporte para TikTok", priority: "alta" },
  { label: "Downloads paralelos", priority: "alta" },
  { label: "Download de playlist completa", priority: "média" },
  { label: "Conversão para diferentes formatos", priority: "média" },
  { label: "Extração de legendas", priority: "média" },
  { label: "Transcrição automática", priority: "baixa" },
  { label: "Interface web opcional", priority: "baixa" },
  { label: "Configuração via arquivo", priority: "baixa" },
  { label: "Agendamento de downloads", priority: "baixa" },
];

const priorityColors = {
  alta: {
    bg: "rgba(239,68,68,0.1)",
    border: "rgba(239,68,68,0.25)",
    text: "#f87171",
    label: "Alta",
  },
  média: {
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    text: "#fbbf24",
    label: "Média",
  },
  baixa: {
    bg: "rgba(100,116,139,0.1)",
    border: "rgba(100,116,139,0.25)",
    text: "#94a3b8",
    label: "Baixa",
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            <MapPin className="w-3 h-3" />
            Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            O que vem{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              por aí
            </span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Recursos já entregues e o que está planejado para as próximas
            versões.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Done */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest">
                Concluído
              </h3>
              <span className="ml-auto text-xs text-slate-600">
                {done.length} itens
              </span>
            </div>
            <div className="space-y-2">
              {done.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-green-500/5 border border-green-500/15"
                >
                  <span className="text-green-400 text-sm flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest">
                Planejado
              </h3>
              <span className="ml-auto text-xs text-slate-600">
                {upcoming.length} itens
              </span>
            </div>
            <div className="space-y-2">
              {upcoming.map((item) => {
                const p = priorityColors[item.priority];
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#2a2a38]"
                  >
                    <span className="text-slate-600 text-sm flex-shrink-0">
                      ○
                    </span>
                    <span className="text-sm text-slate-400 flex-1">
                      {item.label}
                    </span>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        background: p.bg,
                        border: `1px solid ${p.border}`,
                        color: p.text,
                      }}
                    >
                      {p.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
