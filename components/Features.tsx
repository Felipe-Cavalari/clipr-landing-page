import {
  Zap,
  FolderOpen,
  ShieldCheck,
  Layers,
  MonitorPlay,
  Mic,
  Play,
  Camera,
  Music2,
} from 'lucide-react'
import Stagger from '@/components/motion/Stagger'
import TextReveal from '@/components/motion/TextReveal'
import TiltCard from '@/components/motion/TiltCard'

const features = [
  {
    icon: Zap,
    title: 'Detecção automática',
    description:
      'Identifica YouTube, Shorts ou Instagram automaticamente pela URL. Sem configurações manuais.',
    iconColor: '#fbbf24',
    bg: 'rgba(234,179,8,0.08)',
    border: 'rgba(234,179,8,0.18)',
  },
  {
    icon: MonitorPlay,
    title: 'Qualidade Full HD',
    description:
      'Download de vídeos do YouTube em 1920×1080. Shorts em 1080×1920. Sempre a melhor qualidade disponível.',
    iconColor: '#a78bfa',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.22)',
  },
  {
    icon: FolderOpen,
    title: 'Organização automática',
    description:
      'Pastas separadas por plataforma criadas automaticamente. YouTube/ e Instagram/ sempre organizados.',
    iconColor: '#22d3ee',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.18)',
  },
  {
    icon: ShieldCheck,
    title: 'Sem duplicatas',
    description:
      'Verifica vídeos já baixados antes de iniciar. Economize espaço sem esforço e sem downloads repetidos.',
    iconColor: '#34d399',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.18)',
  },
  {
    icon: Layers,
    title: 'Download em lote',
    description:
      'Passe múltiplas URLs com o comando batch. Com flag --continue-on-error para não parar em falhas.',
    iconColor: '#f472b6',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.18)',
  },
  {
    icon: Mic,
    title: 'Somente áudio',
    description:
      'Extraia apenas o áudio de qualquer vídeo com --audio-only. Funciona no YouTube e Instagram.',
    iconColor: '#818cf8',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.18)',
  },
]

const platforms = [
  {
    icon: Play,
    name: 'YouTube',
    sub: 'Vídeos + Shorts',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    available: true,
  },
  {
    icon: Camera,
    name: 'Instagram',
    sub: 'Reels',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    available: true,
  },
  {
    icon: Music2,
    name: 'TikTok',
    sub: 'Links completos + curtos',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    available: true,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            <Zap className="w-3 h-3" aria-hidden="true" />
            Recursos
          </p>
          <TextReveal
            as="h2"
            className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono"
          >
            Tudo que você precisa,{' '}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              sem complicação
            </span>
          </TextReveal>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Clipr combina simplicidade com recursos avançados para quem precisa de desempenho,
            qualidade e organização no download de vídeos.
          </p>
        </header>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {features.map((f) => {
            const Icon = f.icon
            return (
              <TiltCard
                key={f.title}
                glow={f.bg.replace('0.08', '0.28')}
                className="h-full rounded-2xl p-6 cursor-default"
                style={{ background: f.bg, border: `1px solid ${f.border}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: f.bg.replace('0.08', '0.25'), border: `1px solid ${f.border}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.iconColor }} aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
              </TiltCard>
            )
          })}
        </Stagger>

        <Stagger
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          stagger={0.1}
          y={20}
        >
          {platforms.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.name}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-transform duration-300 hover:-translate-y-1 ${p.bg} ${p.border} ${!p.available ? 'opacity-50' : ''}`}
              >
                <Icon className={`w-5 h-5 ${p.color}`} aria-hidden="true" />
                <div className="text-left">
                  <div className={`text-sm font-semibold ${p.available ? 'text-white' : 'text-slate-500'}`}>
                    {p.name}
                  </div>
                  <div className="text-xs text-slate-500">{p.sub}</div>
                </div>
              </div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
