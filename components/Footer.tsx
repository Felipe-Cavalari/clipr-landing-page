import Link from 'next/link'
import { Heart, Clapperboard } from 'lucide-react'
import Stagger from '@/components/motion/Stagger'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const deps = [
  { name: 'yt-dlp', href: 'https://github.com/yt-dlp/yt-dlp', desc: 'Download engine' },
  { name: 'Click', href: 'https://click.palletsprojects.com/', desc: 'CLI framework' },
  { name: 'Rich', href: 'https://github.com/Textualize/rich', desc: 'Terminal UI' },
]

const navLinks = [
  { label: 'Recursos', href: '#features' },
  { label: 'Instalação', href: '#install' },
  { label: 'Uso', href: '#usage' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Issues no GitHub', href: 'https://github.com/CavalariDev/clipr/issues', external: true },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a38] py-16" aria-label="Rodapé">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12" stagger={0.1} y={24}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <Clapperboard className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="text-white font-bold text-lg font-mono">clipr</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              CLI open source para download de vídeos do YouTube, Shorts e Instagram Reels com qualidade Full HD.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/CavalariDev/clipr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#18181f] border border-[#2a2a38] text-slate-400 hover:text-white hover:border-violet-500/30 transition-all cursor-pointer"
                aria-label="GitHub do Clipr"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-cavalari/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#18181f] border border-[#2a2a38] text-slate-400 hover:text-white hover:border-violet-500/30 transition-all cursor-pointer"
                aria-label="LinkedIn de Felipe Cavalari"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Powered by
            </h3>
            <ul className="space-y-3">
              {deps.map((d) => (
                <li key={d.name}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-sm font-medium text-slate-400 group-hover:text-violet-400 transition-colors">
                      {d.name}
                    </span>
                    <span className="text-xs text-slate-600">— {d.desc}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://felipecavalari.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-sm font-medium text-slate-400 group-hover:text-violet-400 transition-colors">
                    CavalariDev
                  </span>
                  <span className="text-xs text-slate-600">— Desenvolvedor</span>
                </a>
              </li>
            </ul>
          </div>
        </Stagger>

        <div className="pt-8 border-t border-[#2a2a38] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            MIT License — Feito com{' '}
            <Heart className="inline w-3 h-3 text-red-500 mx-0.5" aria-label="amor" /> e Python por{' '}
            <a
              href="https://github.com/CavalariDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
            >
              Felipe Cavalari
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacidade"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </Link>
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Clipr — Baixar vídeos do YouTube
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
