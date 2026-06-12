'use client'

import { useState, useRef, useEffect } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'
import { gsap, prefersReducedMotion } from '@/lib/motion/gsap'
import TextReveal from '@/components/motion/TextReveal'
import Reveal from '@/components/motion/Reveal'

type Command = { code: string; comment: string }
type Tab = { id: string; label: string; commands: Command[] }

function Cmd({ code, comment }: Command) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group flex items-start gap-3 rounded-xl bg-[#0d0d14] border border-[#2a2a38] px-4 py-3 hover:border-violet-500/30 transition-colors">
      <span className="text-violet-400 font-mono text-sm mt-0.5 select-none" aria-hidden="true">$</span>
      <div className="flex-1 min-w-0">
        <code className="text-sm font-mono text-slate-200 break-all">{code}</code>
        {comment && <p className="text-xs text-slate-500 mt-1">{comment}</p>}
      </div>
      <button
        onClick={handleCopy}
        className="opacity-0 group-hover:opacity-100 flex-shrink-0 p-1 text-slate-500 hover:text-slate-300 transition-all cursor-pointer"
        aria-label={`Copiar: ${code}`}
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
        ) : (
          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}

const tabs: Tab[] = [
  {
    id: 'basic',
    label: 'Básico',
    commands: [
      {
        code: 'clipr download https://www.youtube.com/watch?v=VIDEO_ID',
        comment: 'Baixa vídeo do YouTube em Full HD (1920×1080)',
      },
      {
        code: 'clipr download https://youtube.com/shorts/SHORTS_ID',
        comment: 'Baixa YouTube Short (1080×1920, formato vertical)',
      },
      {
        code: 'clipr download https://www.instagram.com/reel/REEL_ID/',
        comment: 'Baixa Reel do Instagram com melhor qualidade disponível',
      },
    ],
  },
  {
    id: 'options',
    label: 'Opções',
    commands: [
      {
        code: 'clipr download URL --name "meu_video"',
        comment: 'Define um nome personalizado para o arquivo',
      },
      {
        code: 'clipr download URL --info',
        comment: 'Exibe informações do vídeo sem baixar',
      },
      {
        code: 'clipr download --audio-only URL',
        comment: 'Baixa apenas o áudio. Funciona no YouTube e Instagram',
      },
    ],
  },
  {
    id: 'batch',
    label: 'Lote',
    commands: [
      {
        code: 'clipr batch URL1 URL2 URL3',
        comment: 'Baixa múltiplos vídeos em sequência',
      },
      {
        code: 'clipr batch URL1 URL2 URL3 --continue-on-error',
        comment: 'Continua mesmo se um download falhar',
      },
    ],
  },
  {
    id: 'util',
    label: 'Utilitários',
    commands: [
      {
        code: 'clipr paths',
        comment: 'Exibe os caminhos de saída configurados',
      },
      {
        code: 'clipr test',
        comment: 'Verifica se a instalação está correta',
      },
      {
        code: 'clipr --help',
        comment: 'Exibe a ajuda completa da CLI',
      },
    ],
  },
]

export default function Usage() {
  const [activeTab, setActiveTab] = useState('basic')
  const current = tabs.find((t) => t.id === activeTab)!
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion() || !panelRef.current) return
    const tween = gsap.fromTo(
      panelRef.current,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.28, ease: 'power2.out' }
    )
    return () => {
      tween.kill()
    }
  }, [activeTab])

  return (
    <section id="usage" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,58,237,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            <Terminal className="w-3 h-3" aria-hidden="true" />
            Uso
          </p>
          <TextReveal as="h2" className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
            Simples de usar,{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              poderoso no resultado
            </span>
          </TextReveal>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            Confira os principais comandos para download de vídeos do YouTube e outras plataformas.
          </p>
        </header>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          role="tablist"
          aria-label="Categorias de comandos"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-[#18181f] text-slate-400 hover:text-white border border-[#2a2a38] hover:border-violet-500/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" aria-label={`Comandos: ${current.label}`} className="space-y-3">
          <div key={activeTab} ref={panelRef} className="space-y-3">
            {current.commands.map((cmd) => (
              <Cmd key={cmd.code} code={cmd.code} comment={cmd.comment} />
            ))}
          </div>
        </div>

        <Reveal className="mt-12 rounded-2xl border border-[#2a2a38] overflow-hidden" aria-label="Estrutura de pastas de saída">
          <div className="flex items-center gap-2 px-5 py-3 bg-[#18181f] border-b border-[#2a2a38]">
            <FolderIcon className="w-4 h-4 text-slate-500" />
            <span className="text-xs text-slate-500 font-mono">Estrutura de saída</span>
          </div>
          <div className="bg-[#0d0d14] p-5 font-mono text-sm">
            <div className="text-slate-600 mb-2 text-xs"># Windows</div>
            <div className="space-y-1 mb-4">
              <div className="text-slate-300">Videos baixados/</div>
              <div className="pl-4 text-slate-400">├── Youtube/</div>
              <div className="pl-8 text-slate-500">└── video.mp4</div>
              <div className="pl-4 text-slate-400">└── Instagram/</div>
              <div className="pl-8 text-slate-500">└── reel.mp4</div>
            </div>
            <div className="text-slate-600 mb-2 text-xs"># Caminho customizado</div>
            <div className="text-cyan-400">CLIPR_OUTPUT_DIR=/caminho/personalizado</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
  )
}
