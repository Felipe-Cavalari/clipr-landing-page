'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Clapperboard } from 'lucide-react'
import Magnetic from '@/components/motion/Magnetic'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const navLinks = [
  { label: 'Recursos', href: '#features' },
  { label: 'Instalação', href: '#install' },
  { label: 'Uso', href: '#usage' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#2a2a38]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Magnetic strength={0.3}>
            <a href="#" className="flex items-center gap-2 group" aria-label="Clipr - início">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                <Clapperboard className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight font-mono">clipr</span>
            </a>
          </Magnetic>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150 cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/CavalariDev/clipr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 border border-[#2a2a38] rounded-lg hover:border-violet-500/50 hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="Ver Clipr no GitHub"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <Magnetic strength={0.4}>
              <a
                href="#install"
                className="px-4 py-2 text-sm font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-900/50 transition-all duration-200 cursor-pointer"
              >
                Instalar
              </a>
            </Magnetic>
          </div>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#111118]/95 backdrop-blur-xl border-b border-[#2a2a38]">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Menu mobile">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#2a2a38]">
              <a
                href="https://github.com/CavalariDev/clipr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 border border-[#2a2a38] rounded-lg flex-1 justify-center cursor-pointer"
                aria-label="Ver no GitHub"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="#install"
                className="px-4 py-2 text-sm font-semibold text-white bg-violet-600 rounded-lg flex-1 text-center cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Instalar
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
