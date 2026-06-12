import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { siteUrl } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de privacidade do Clipr. Usamos apenas analytics anônimo (Umami) para entender o acesso ao site. Sem cookies e sem coleta de dados pessoais.',
  alternates: { canonical: `${siteUrl}/privacidade` },
  robots: { index: true, follow: true },
}

const lastUpdated = '9 de junho de 2026'

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-12 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Voltar para a página inicial
      </Link>

      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-white" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
      </div>
      <p className="text-sm text-slate-500 mb-12">
        Última atualização: {lastUpdated}
      </p>

      <div className="space-y-10 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Resumo</h2>
          <p className="text-slate-400">
            O Clipr é um projeto open source e respeita a sua privacidade. Este
            site não coleta dados pessoais, não usa cookies e não compartilha
            informações com terceiros para fins de publicidade. Utilizamos
            apenas uma ferramenta de analytics anônima para entender quantas
            pessoas acessam o site — nada além disso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Que dados coletamos
          </h2>
          <p className="text-slate-400 mb-4">
            Para entender o uso do site, utilizamos o{' '}
            <a
              href="https://umami.is/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              Umami
            </a>
            , uma ferramenta de analytics focada em privacidade e hospedada em
            nossa própria infraestrutura. Com ela registramos apenas métricas
            agregadas e anônimas, como:
          </p>
          <ul className="space-y-2 text-slate-400 list-disc list-inside">
            <li>Número de visitas e páginas acessadas;</li>
            <li>País ou região aproximada de origem do acesso;</li>
            <li>Tipo de dispositivo, navegador e sistema operacional;</li>
            <li>Site de origem que encaminhou a visita (referrer).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            O que NÃO fazemos
          </h2>
          <ul className="space-y-2 text-slate-400 list-disc list-inside">
            <li>Não usamos cookies nem rastreadores entre sites;</li>
            <li>
              Não coletamos dados pessoais identificáveis (nome, e-mail, etc.);
            </li>
            <li>Não armazenamos o seu endereço IP;</li>
            <li>Não criamos perfis de usuários nem vendemos dados;</li>
            <li>Não exibimos anúncios.</li>
          </ul>
          <p className="text-slate-400 mt-4">
            O Umami não armazena endereços IP nem identificadores
            persistentes — as estatísticas são totalmente anônimas e usadas
            unicamente para sabermos se o site está sendo acessado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Sobre a ferramenta Clipr
          </h2>
          <p className="text-slate-400">
            O Clipr em si é uma aplicação de linha de comando (CLI) executada
            localmente no seu computador. Ele não envia nenhuma informação de
            uso para nós. Esta política se aplica exclusivamente a este site de
            divulgação.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Seus direitos
          </h2>
          <p className="text-slate-400">
            Como não coletamos dados pessoais identificáveis, não há informações
            pessoais suas armazenadas que possam ser consultadas ou removidas.
            Mesmo assim, em conformidade com a Lei Geral de Proteção de Dados
            (LGPD), você pode entrar em contato a qualquer momento para
            esclarecer dúvidas sobre o tratamento de dados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Contato</h2>
          <p className="text-slate-400">
            Em caso de dúvidas sobre esta política, entre em contato pelo{' '}
            <a
              href="https://github.com/CavalariDev/clipr/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              GitHub do projeto
            </a>{' '}
            ou pelo{' '}
            <a
              href="https://www.linkedin.com/in/felipe-cavalari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Alterações nesta política
          </h2>
          <p className="text-slate-400">
            Podemos atualizar esta política ocasionalmente. Quando isso
            acontecer, a data de &ldquo;última atualização&rdquo; no topo desta
            página será revisada.
          </p>
        </section>
      </div>
    </main>
  )
}
