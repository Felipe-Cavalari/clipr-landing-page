import { MapPin, CheckCircle2, Circle } from 'lucide-react'
import TextReveal from '@/components/motion/TextReveal'
import Stagger from '@/components/motion/Stagger'

const done = [
  'Detecção automática de plataforma',
  'Download Full HD para YouTube',
  'Suporte a YouTube Shorts (vertical)',
  'Download de Instagram Reels',
  'Organização automática de pastas',
  'Prevenção de downloads duplicados',
  'Download em lote (batch)',
  'Interface colorida com Rich',
  'Tratamento robusto de erros',
  'Nome personalizado de arquivo',
  'Suporte a TikTok (links completos e curtos)',
  'Download somente de áudio (--audio-only / -x)',
  'Transcrição automática com Whisper AI',
  'Corte interativo de vídeo (clipr trim)',
  'Extração de áudio de arquivos locais (clipr extract-audio)',
  'Cookies de browser para vídeos restritos (--browser)',
]

type Priority = 'alta' | 'média' | 'baixa'

const upcoming: { label: string; priority: Priority }[] = [
  { label: 'Downloads paralelos', priority: 'alta' },
  { label: 'Download de playlist completa', priority: 'média' },
  { label: 'Conversão para diferentes formatos', priority: 'média' },
  { label: 'Extração de legendas', priority: 'média' },
  { label: 'Interface web opcional', priority: 'baixa' },
  { label: 'Configuração via arquivo', priority: 'baixa' },
  { label: 'Agendamento de downloads', priority: 'baixa' },
]

const priorityConfig: Record<Priority, { bg: string; border: string; text: string; label: string }> = {
  alta: {
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.22)',
    text: '#f87171',
    label: 'Alta',
  },
  média: {
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.22)',
    text: '#fbbf24',
    label: 'Média',
  },
  baixa: {
    bg: 'rgba(100,116,139,0.08)',
    border: 'rgba(100,116,139,0.22)',
    text: '#94a3b8',
    label: 'Baixa',
  },
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            <MapPin className="w-3 h-3" aria-hidden="true" />
            Roadmap
          </p>
          <TextReveal as="h2" className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
            O que vem{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              por aí
            </span>
          </TextReveal>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            Recursos já entregues e o que está planejado para as próximas versões do Clipr.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest">
                Concluído
              </h3>
              <span className="ml-auto text-xs text-slate-600">{done.length} itens</span>
            </div>
            <Stagger as="ul" className="space-y-2" stagger={0.04} y={14}>
              {done.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-green-500/5 border border-green-500/15"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-slate-300">{item}</span>
                </li>
              ))}
            </Stagger>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest">
                Planejado
              </h3>
              <span className="ml-auto text-xs text-slate-600">{upcoming.length} itens</span>
            </div>
            <Stagger as="ul" className="space-y-2" stagger={0.05} y={14}>
              {upcoming.map((item) => {
                const p = priorityConfig[item.priority]
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#2a2a38] transition-colors hover:border-violet-500/30"
                  >
                    <Circle className="w-4 h-4 text-slate-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-slate-400 flex-1">{item.label}</span>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: p.bg, border: `1px solid ${p.border}`, color: p.text }}
                    >
                      {p.label}
                    </span>
                  </li>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
