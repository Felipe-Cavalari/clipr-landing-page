'use client'

import { useState, useRef, useEffect, type ReactNode } from 'react'
import { Copy, Check, ChevronRight } from 'lucide-react'
import { gsap, prefersReducedMotion } from '@/lib/motion/gsap'
import TextReveal from '@/components/motion/TextReveal'
import Stagger from '@/components/motion/Stagger'

function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden border border-[#2a2a38]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#18181f] border-b border-[#2a2a38]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-500" />
          <span className="text-xs text-slate-500 font-mono">{label ?? 'bash'}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
          aria-label="Copiar código"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
              <span className="text-green-400">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" aria-hidden="true" />
              Copiar
            </>
          )}
        </button>
      </div>
      <pre className="bg-[#0d0d14] px-5 py-4 text-sm font-mono text-slate-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}

type Step = { number: string; title: string; content: ReactNode }

function useSteps(): Step[] {
  return [
    {
      number: '01',
      title: 'Clone o repositório',
      content: <CodeBlock code="git clone https://github.com/CavalariDev/clipr.git" />,
    },
    {
      number: '02',
      title: 'Crie o ambiente virtual',
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-2">Windows PowerShell</p>
            <CodeBlock code={'python -m venv venv\n.\\venv\\Scripts\\Activate.ps1'} label="powershell" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-2">macOS / Linux</p>
            <CodeBlock code={'python3 -m venv venv\nsource venv/bin/activate'} />
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Instale as dependências',
      content: <CodeBlock code="pip install -r requirements.txt" />,
    },
    {
      number: '04',
      title: 'Instale o Clipr',
      content: (
        <div className="space-y-3">
          <CodeBlock code="pip install -e ." />
          <p className="text-xs text-slate-500">
            A flag{' '}
            <code className="bg-[#18181f] px-1.5 py-0.5 rounded text-violet-400 font-mono">-e</code>{' '}
            instala em modo editável. Instale também o{' '}
            <strong className="text-slate-400">FFmpeg</strong> para mesclar áudio e vídeo.
          </p>
        </div>
      ),
    },
    {
      number: '05',
      title: 'Teste a instalação',
      content: (
        <div className="space-y-3">
          <CodeBlock code="clipr test" />
          <div className="rounded-xl bg-[#0d0d14] border border-[#2a2a38] p-4">
            <p className="text-xs text-slate-500 mb-2 font-mono">Saída esperada:</p>
            <div className="font-mono text-xs space-y-1">
              {['Python: OK', 'yt-dlp: OK', 'FFmpeg: OK', 'Clipr pronto para uso!'].map((line) => (
                <div key={line}>
                  <span className="text-green-400">✓</span>{' '}
                  <span className="text-slate-300">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ]
}

const requirements = [
  { label: 'Python 3.10+', href: 'https://python.org' },
  { label: 'FFmpeg', href: 'https://ffmpeg.org' },
  { label: 'pip', href: 'https://pip.pypa.io' },
]

export default function Install() {
  const [activeStep, setActiveStep] = useState(0)
  const steps = useSteps()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion() || !panelRef.current) return
    const tween = gsap.fromTo(
      panelRef.current,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    )
    return () => {
      tween.kill()
    }
  }, [activeStep])

  return (
    <section id="install" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-4">
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            Instalação
          </p>
          <TextReveal as="h2" className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
            Pronto em{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              5 passos
            </span>
          </TextReveal>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            Siga os passos abaixo para ter o Clipr funcionando no seu sistema.
            Requer Python 3.10+ e FFmpeg.
          </p>
        </header>

        <Stagger className="flex flex-wrap justify-center gap-3 mb-12" stagger={0.06} y={16}>
          {requirements.map((req) => (
            <a
              key={req.label}
              href={req.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181f] border border-[#2a2a38] text-sm text-slate-400 hover:text-slate-200 hover:border-violet-500/30 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
            >
              {req.label}
            </a>
          ))}
        </Stagger>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          <nav aria-label="Passos de instalação">
            <div className="flex flex-col gap-2">
              {steps.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    activeStep === i
                      ? 'bg-violet-500/10 border border-violet-500/30 text-white'
                      : 'hover:bg-white/5 border border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                  aria-current={activeStep === i ? 'step' : undefined}
                >
                  <span
                    className={`text-xs font-mono font-bold tabular-nums ${
                      activeStep === i ? 'text-violet-400' : 'text-slate-600'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-sm font-medium">{step.title}</span>
                  {activeStep === i && (
                    <ChevronRight className="w-3.5 h-3.5 text-violet-400 ml-auto" aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>
          </nav>

          <div className="rounded-2xl p-6 border border-[#2a2a38] bg-[#0d0d14] min-h-56 overflow-hidden">
            <div key={activeStep} ref={panelRef}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl font-bold text-slate-700 font-mono">
                  {steps[activeStep].number}
                </span>
                <h3 className="text-lg font-semibold text-white">{steps[activeStep].title}</h3>
              </div>
              {steps[activeStep].content}
            </div>
          </div>
        </div>

        <aside className="mt-8 rounded-2xl p-5 bg-amber-500/5 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-400 text-xs font-bold">!</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-300 mb-3">Instalar FFmpeg</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-500 mb-1.5">macOS (Homebrew)</p>
                  <CodeBlock code="brew install ffmpeg" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1.5">Windows (Chocolatey)</p>
                  <CodeBlock code="choco install ffmpeg" label="powershell" />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
