import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

function Cmd({ code, comment }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex items-start gap-3 rounded-xl bg-[#111118] border border-[#2a2a38] px-4 py-3 hover:border-violet-500/30 transition-colors">
      <span className="text-violet-400 font-mono text-sm mt-0.5 select-none">
        $
      </span>
      <div className="flex-1 min-w-0">
        <code className="text-sm font-mono text-slate-200 break-all">
          {code}
        </code>
        {comment && <p className="text-xs text-slate-500 mt-1">{comment}</p>}
      </div>
      <button
        onClick={handleCopy}
        className="opacity-0 group-hover:opacity-100 flex-shrink-0 p-1 text-slate-500 hover:text-slate-300 transition-all"
        aria-label="Copiar"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-green-400" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  );
}

const tabs = [
  {
    id: "basic",
    label: "Básico",
    commands: [
      {
        code: "clipr download https://www.youtube.com/watch?v=VIDEO_ID",
        comment: "Baixa vídeo do YouTube em Full HD (1920×1080)",
      },
      {
        code: "clipr download https://youtube.com/shorts/SHORTS_ID",
        comment: "Baixa um Short do YouTube (1080×1920)",
      },
      {
        code: "clipr download https://www.instagram.com/reel/REEL_ID/",
        comment: "Baixa um Reel do Instagram",
      },
    ],
  },
  {
    id: "options",
    label: "Opções",
    commands: [
      {
        code: 'clipr download URL --name "meu_video"',
        comment: "Define um nome personalizado para o arquivo",
      },
      {
        code: "clipr download URL --info",
        comment: "Exibe informações do vídeo sem baixar",
      },
      {
        code: "clipr download -x URL ou clipr download --audio-only URL",
        comment:
          "Baixa apenas o áudio do vídeo, funciona tanto para instagram quanto para youtube",
      },
    ],
  },
  {
    id: "batch",
    label: "Lote",
    commands: [
      {
        code: "clipr batch URL1 URL2 URL3",
        comment: "Baixa múltiplos vídeos em sequência",
      },
      {
        code: "clipr batch URL1 URL2 URL3 --continue-on-error",
        comment: "Continua mesmo se um download falhar",
      },
    ],
  },
  {
    id: "util",
    label: "Utilidades",
    commands: [
      {
        code: "clipr paths",
        comment: "Exibe os caminhos de saída configurados",
      },
      {
        code: "clipr test",
        comment: "Verifica se a instalação está correta",
      },
      {
        code: "clipr --help ou clipr -h",
        comment: "Exibe a ajuda completa da CLI",
      },
    ],
  },
];

export default function Usage() {
  const [activeTab, setActiveTab] = useState("basic");
  const current = tabs.find((t) => t.id === activeTab);

  return (
    <section id="usage" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            <Terminal className="w-3 h-3" />
            Uso
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simples de usar,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              poderoso no resultado
            </span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Confira os principais comandos organizados por categoria.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-violet-600 text-white"
                  : "bg-[#18181f] text-slate-400 hover:text-white border border-[#2a2a38] hover:border-violet-500/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Commands */}
        <div className="space-y-3">
          {current.commands.map((cmd) => (
            <Cmd key={cmd.code} code={cmd.code} comment={cmd.comment} />
          ))}
        </div>

        {/* Folder structure */}
        <div className="mt-12 rounded-2xl border border-[#2a2a38] overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 bg-[#18181f] border-b border-[#2a2a38]">
            <span className="text-xs text-slate-500 font-mono">
              📂 Estrutura de saída
            </span>
          </div>
          <div className="bg-[#111118] p-5 font-mono text-sm">
            <div className="text-slate-400 mb-2">
              <span className="text-slate-600"># Windows</span>
            </div>
            <div className="space-y-1 mb-4">
              <div className="text-slate-300">Videos baixados/</div>
              <div className="pl-4 text-slate-400">├── Youtube/</div>
              <div className="pl-8 text-slate-500">└── video.mp4</div>
              <div className="pl-4 text-slate-400">└── Instagram/</div>
              <div className="pl-8 text-slate-500">└── reel.mp4</div>
            </div>
            <div className="text-slate-400 mb-2">
              <span className="text-slate-600"># Customizar com env var</span>
            </div>
            <div className="text-cyan-400">
              CLIPR_OUTPUT_DIR=/caminho/personalizado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
