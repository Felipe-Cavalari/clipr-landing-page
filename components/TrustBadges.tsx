import { ShieldCheck, MonitorPlay, Download, Zap, GitBranch } from 'lucide-react'
import Stagger from '@/components/motion/Stagger'

const badges = [
  {
    icon: ShieldCheck,
    label: 'MIT License',
    sub: '100% Open Source',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: MonitorPlay,
    label: 'Full HD',
    sub: 'Qualidade máxima',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Download,
    label: 'Sem cadastro',
    sub: 'Instala e usa',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Zap,
    label: 'Sem limites',
    sub: 'Downloads ilimitados',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: GitBranch,
    label: '3 plataformas',
    sub: 'YouTube, Instagram e TikTok',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
]

export default function TrustBadges() {
  return (
    <section
      aria-label="Destaques do Clipr"
      className="py-10 border-y border-[#2a2a38] bg-[#111118]/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Stagger className="flex flex-wrap justify-center items-center gap-3 sm:gap-4" stagger={0.07} y={18}>
          {badges.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.label}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-transform duration-300 hover:-translate-y-1 ${b.bg} ${b.border}`}
              >
                <Icon className={`w-4 h-4 ${b.color} flex-shrink-0`} aria-hidden="true" />
                <div>
                  <div className="text-sm font-semibold text-white leading-tight">{b.label}</div>
                  <div className="text-xs text-slate-500 leading-tight">{b.sub}</div>
                </div>
              </div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
