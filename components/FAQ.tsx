'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqItems } from '@/lib/structured-data'
import TextReveal from '@/components/motion/TextReveal'
import Stagger from '@/components/motion/Stagger'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            <HelpCircle className="w-3 h-3" aria-hidden="true" />
            FAQ
          </p>
          <TextReveal as="h2" className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              frequentes
            </span>
          </TextReveal>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            Tudo que você precisa saber sobre como baixar vídeos do YouTube e outras plataformas com Clipr.
          </p>
        </header>

        <Stagger className="space-y-3" role="list" stagger={0.07} y={20}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                role="listitem"
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-violet-500/30 bg-violet-500/5'
                    : 'border-[#2a2a38] bg-[#111118] hover:border-[#3a3a4f]'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <h3 className={`text-sm font-semibold leading-snug ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-violet-400' : 'text-slate-500'
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-violet-500/10 pt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </Stagger>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-3">Ainda com dúvidas?</p>
          <a
            href="https://github.com/CavalariDev/clipr/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#2a2a38] text-sm text-slate-400 hover:text-white hover:border-violet-500/30 transition-all duration-200 cursor-pointer"
          >
            Abrir issue no GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
