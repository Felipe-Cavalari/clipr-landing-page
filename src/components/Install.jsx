import { useState } from "react";
import { Copy, Check, ChevronRight } from "lucide-react";

function CodeBlock({ code, language = "bash", label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#2a2a38]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#18181f] border-b border-[#2a2a38]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-500" />
          <span className="text-xs text-slate-500 font-mono">
            {label || language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
          aria-label="Copiar código"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copiar
            </>
          )}
        </button>
      </div>
      <pre className="bg-[#111118] px-5 py-4 text-sm font-mono text-slate-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Clone o repositório",
    content: (
      <CodeBlock
        code="git clone https://github.com/CavalariDev/clipr.git"
        label="bash"
      />
    ),
  },
  {
    number: "02",
    title: "Crie o ambiente virtual",
    content: (
      <div className="space-y-3">
        <div className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-2">
          Windows PowerShell
        </div>
        <CodeBlock
          code="python -m venv venv\n.\\venv\\Scripts\\Activate.ps1"
          label="powershell"
        />
        <div className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-4 mb-2">
          macOS / Linux
        </div>
        <CodeBlock
          code="python3 -m venv venv\nsource venv/bin/activate"
          label="bash"
        />
      </div>
    ),
  },
  {
    number: "03",
    title: "Instale as dependências",
    content: <CodeBlock code="pip install -r requirements.txt" label="bash" />,
  },
  {
    number: "04",
    title: "Instale o Clipr",
    content: (
      <div className="space-y-3">
        <CodeBlock code="pip install -e ." label="bash" />
        <p className="text-xs text-slate-500">
          O flag{" "}
          <code className="bg-[#18181f] px-1.5 py-0.5 rounded text-violet-400">
            -e
          </code>{" "}
          instala em modo editável (desenvolvimento). Instale também o{" "}
          <strong className="text-slate-400">FFmpeg</strong> para mesclar áudio
          e vídeo.
        </p>
      </div>
    ),
  },
  {
    number: "05",
    title: "Teste a instalação",
    content: (
      <div className="space-y-3">
        <CodeBlock code="clipr test" label="bash" />
        <div className="rounded-xl bg-[#111118] border border-[#2a2a38] p-4">
          <div className="text-xs text-slate-500 mb-2">Saída esperada:</div>
          <div className="font-mono text-xs space-y-1">
            <div>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-slate-300">Python: OK</span>
            </div>
            <div>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-slate-300">yt-dlp: OK</span>
            </div>
            <div>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-slate-300">FFmpeg: OK</span>
            </div>
            <div>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-slate-300">Clipr pronto para uso!</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Install() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="install" className="py-24 relative">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-4">
            <ChevronRight className="w-3 h-3" />
            Instalação
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto em{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              5 passos
            </span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Siga os passos abaixo para ter o Clipr funcionando no seu sistema.
            Requer Python 3.10+ e FFmpeg.
          </p>
        </div>

        {/* Requirement pill */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "Python 3.10+", icon: "🐍" },
            { label: "FFmpeg", icon: "🎞️" },
            { label: "pip", icon: "📦" },
          ].map((req) => (
            <div
              key={req.label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181f] border border-[#2a2a38] text-sm text-slate-400"
            >
              <span>{req.icon}</span>
              {req.label}
            </div>
          ))}
        </div>

        {/* Steps layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Step list */}
          <div className="flex flex-col gap-2">
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                  activeStep === i
                    ? "bg-violet-500/10 border border-violet-500/30 text-white"
                    : "hover:bg-white/5 border border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <span
                  className={`text-xs font-mono font-bold tabular-nums ${
                    activeStep === i ? "text-violet-400" : "text-slate-600"
                  }`}
                >
                  {step.number}
                </span>
                <span className="text-sm font-medium">{step.title}</span>
                {activeStep === i && (
                  <ChevronRight className="w-3.5 h-3.5 text-violet-400 ml-auto" />
                )}
              </button>
            ))}
          </div>

          {/* Step content */}
          <div
            className="rounded-2xl p-6 border border-[#2a2a38] bg-[#111118]"
            style={{ minHeight: "220px" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl font-bold text-slate-700 font-mono">
                {steps[activeStep].number}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {steps[activeStep].title}
              </h3>
            </div>
            {steps[activeStep].content}
          </div>
        </div>

        {/* FFmpeg hint */}
        <div className="mt-8 rounded-2xl p-5 bg-amber-500/5 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 text-lg">⚠️</span>
            <div>
              <p className="text-sm font-semibold text-amber-300 mb-1">
                Instalar FFmpeg
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-500 mb-1.5">
                    macOS (Homebrew)
                  </p>
                  <code className="block text-xs font-mono bg-[#18181f] px-3 py-2 rounded-lg text-slate-300 border border-[#2a2a38]">
                    brew install ffmpeg
                  </code>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1.5">
                    Windows (Chocolatey)
                  </p>
                  <code className="block text-xs font-mono bg-[#18181f] px-3 py-2 rounded-lg text-slate-300 border border-[#2a2a38]">
                    choco install ffmpeg
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
