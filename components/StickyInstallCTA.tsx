'use client'

import { useState, useEffect } from 'react'
import { Download } from 'lucide-react'
import Magnetic from '@/components/motion/Magnetic'

export default function StickyInstallCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <Magnetic strength={0.45}>
        <a
          href="#install"
          className="group relative flex items-center gap-2 px-5 py-3 font-semibold text-sm text-white rounded-xl shadow-xl shadow-violet-900/50 transition-all duration-200 cursor-pointer hover:shadow-violet-900/70"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
          tabIndex={visible ? 0 : -1}
          aria-label="Instalar Clipr gratuitamente"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-xl bg-violet-500/40 blur-md -z-10 opacity-60 group-hover:opacity-100 transition-opacity"
          />
          <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          Instalar grátis
        </a>
      </Magnetic>
    </div>
  )
}
