'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Terminal, Download } from 'lucide-react'
import AuroraBackground from '@/components/motion/AuroraBackground'
import Magnetic from '@/components/motion/Magnetic'
import { useIntro, usePrefersReducedMotion } from '@/lib/motion/hooks'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const platforms = [
  { name: 'YouTube', gradient: 'from-red-400 to-red-500' },
  { name: 'Instagram', gradient: 'from-fuchsia-400 to-orange-400' },
  { name: 'TikTok', gradient: 'from-cyan-400 to-pink-500' },
]

const TYPING_SPEED = 110
const DELETING_SPEED = 55
const HOLD_DURATION = 1600

function PlatformTypewriter() {
  const shouldReduceMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  const platform = platforms[index]

  useEffect(() => {
    if (shouldReduceMotion) return

    const full = platform.name

    if (!deleting && text === full) {
      const hold = setTimeout(() => setDeleting(true), HOLD_DURATION)
      return () => clearTimeout(hold)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % platforms.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setText((current) =>
          deleting ? full.slice(0, current.length - 1) : full.slice(0, current.length + 1)
        )
      },
      deleting ? DELETING_SPEED : TYPING_SPEED
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, platform.name, shouldReduceMotion])

  if (shouldReduceMotion) {
    return (
      <span className={`bg-gradient-to-r ${platforms[0].gradient} bg-clip-text text-transparent`}>
        {platforms[0].name}
      </span>
    )
  }

  return (
    <span className="inline-flex items-baseline">
      <span className={`bg-gradient-to-r ${platform.gradient} bg-clip-text text-transparent`}>
        {text}
      </span>
      <span className="cursor-blink text-violet-400 font-light ml-0.5" aria-hidden="true">
        |
      </span>
    </span>
  )
}

const terminalLines = [
  { prefix: '$', text: 'clipr download https://youtube.com/watch?v=dQw4w9WgXcQ', color: 'text-slate-200' },
  { prefix: '✓', text: 'Detectando plataforma... YouTube', color: 'text-cyan-400', prefixColor: 'text-cyan-400' },
  { prefix: '✓', text: 'Resolução: 1920×1080 (Full HD)', color: 'text-slate-400', prefixColor: 'text-cyan-400' },
  { prefix: '✓', text: 'Salvando em YouTube/video.mp4...', color: 'text-slate-400', prefixColor: 'text-cyan-400' },
  { prefix: '✓', text: 'Download concluído!', color: 'text-green-300', prefixColor: 'text-green-400' },
]

const stats = [
  { value: '3', label: 'Plataformas' },
  { value: 'Full HD', label: 'Qualidade máx.' },
  { value: '100%', label: 'Open Source' },
  { value: '0', label: 'Custo' },
]

export default function Hero() {
  const introRef = useIntro<HTMLDivElement>('[data-intro]', { stagger: 0.1 })

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.16) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Animated aurora / mesh backdrop (pure CSS, reduced-motion aware) */}
      <AuroraBackground className="opacity-[0.22]" />

      <div
        ref={introRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <div
          data-intro
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8"
        >
          <Terminal className="w-3 h-3" aria-hidden="true" />
          Ferramenta CLI open source para download de vídeos
        </div>

        {/* H1 - primary keyword target */}
        <h1
          data-intro
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08] font-mono"
        >
          Baixe vídeos do{' '}
          <PlatformTypewriter />{' '}
          com{' '}
          <span className="gradient-animated bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            um comando
          </span>
        </h1>

        {/* Subtitle */}
        <p
          data-intro
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Clipr é a CLI open source para{' '}
          <strong className="text-slate-300 font-medium">baixar vídeos do YouTube</strong>,
          Shorts e Instagram Reels em Full HD.{' '}
          <strong className="text-slate-300 font-medium">Grátis, rápido e sem limites.</strong>
        </p>

        {/* Terminal preview */}
        <div
          data-intro
          className="max-w-2xl mx-auto mb-10 rounded-xl overflow-hidden border border-[#2a2a38] shadow-2xl shadow-violet-900/20"
          role="img"
          aria-label="Exemplo de uso do Clipr no terminal"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#18181f] border-b border-[#2a2a38]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-slate-500 font-mono">terminal</span>
          </div>
          <div className="bg-[#0d0d14] px-5 py-5 text-left font-mono text-sm space-y-2">
            {terminalLines.map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className={`${line.prefixColor ?? 'text-violet-400'} flex-shrink-0 mt-0.5`}>
                  {line.prefix}
                </span>
                <span className={line.color}>{line.text}</span>
                {i === terminalLines.length - 1 && (
                  <span className="cursor-blink text-violet-400 ml-0.5">▋</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          data-intro
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic strength={0.4}>
            <a
              href="#install"
              className="group relative flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl transition-shadow duration-300 cursor-pointer shadow-lg shadow-violet-900/40 hover:shadow-violet-900/70 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />
              <Download className="w-4 h-4 relative" aria-hidden="true" />
              <span className="relative">Instalar grátis</span>
              <ArrowRight className="w-4 h-4 relative transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a
              href="https://github.com/CavalariDev/clipr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 text-base font-medium text-slate-300 border border-[#2a2a38] rounded-xl hover:border-violet-500/50 hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="Ver código fonte do Clipr no GitHub"
            >
              <GithubIcon className="w-4 h-4" />
              Ver no GitHub
            </a>
          </Magnetic>
        </div>

        {/* Stats */}
        <div
          data-intro
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg mx-auto"
          aria-label="Estatísticas do Clipr"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-white font-mono">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
