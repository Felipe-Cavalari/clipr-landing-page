export const siteUrl = 'https://clipr.felipecavalari.com.br'

export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Clipr',
  alternateName: 'Clipr Video Downloader',
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'Video Downloader',
  operatingSystem: ['Windows', 'macOS', 'Linux'],
  description:
    'CLI profissional e open source para baixar vídeos do YouTube, YouTube Shorts e Instagram Reels com qualidade Full HD. 100% gratuito.',
  url: siteUrl,
  downloadUrl: 'https://github.com/CavalariDev/clipr',
  softwareVersion: '1.0.0',
  datePublished: '2024-01-01',
  inLanguage: 'pt-BR',
  author: {
    '@type': 'Person',
    name: 'Felipe Cavalari',
    url: 'https://felipecavalari.com.br',
    sameAs: [
      'https://github.com/Felipe-Cavalari',
      'https://www.linkedin.com/in/felipe-cavalari/',
    ],
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'Download de vídeos do YouTube em Full HD (1920×1080)',
    'Download de YouTube Shorts em formato vertical (1080×1920)',
    'Download de Instagram Reels',
    'Download em lote (batch) de múltiplos vídeos',
    'Prevenção automática de duplicatas',
    'Organização automática de pastas por plataforma',
    'Extração de áudio (audio-only)',
    'Nome personalizado para arquivos baixados',
    'Interface colorida e amigável no terminal',
    'Tratamento robusto de erros',
  ],
  license: 'https://opensource.org/licenses/MIT',
  sameAs: ['https://github.com/CavalariDev/clipr'],
}

const faqItems = [
  {
    question: 'Como baixar vídeos do YouTube com Clipr?',
    answer:
      'Instale o Clipr via pip e execute no terminal: clipr download <URL_DO_VIDEO>. O Clipr detecta automaticamente que é um vídeo do YouTube e faz o download em Full HD (1920×1080). O arquivo é salvo automaticamente na pasta YouTube/.',
  },
  {
    question: 'É possível baixar vídeos do YouTube de graça?',
    answer:
      'Sim, o Clipr é 100% gratuito e open source sob a licença MIT. Não há mensalidades, planos pagos ou limites de download. Você pode baixar quantos vídeos quiser.',
  },
  {
    question: 'Como funciona o download de vídeos online com Clipr?',
    answer:
      'Diferente de soluções web, o Clipr é uma CLI (ferramenta de linha de comando) instalada localmente no seu computador. Isso oferece mais velocidade, privacidade e sem limitações de tamanho de arquivo.',
  },
  {
    question: 'Como salvar vídeos do YouTube no computador?',
    answer:
      'Com Clipr: 1) Instale Python 3.10+ e FFmpeg; 2) Clone o repositório com git clone; 3) Instale as dependências com pip install -r requirements.txt; 4) Execute clipr download <URL>. O vídeo é salvo automaticamente organizado por plataforma.',
  },
  {
    question: 'O Clipr funciona no Windows, macOS e Linux?',
    answer:
      'Sim, o Clipr é multiplataforma e funciona em Windows, macOS e Linux. Requer Python 3.10+ e FFmpeg instalados no sistema.',
  },
  {
    question: 'Como fazer download em lote de vídeos do YouTube?',
    answer:
      'Use o comando batch: clipr batch URL1 URL2 URL3. Para continuar o download mesmo se um vídeo falhar, adicione a flag --continue-on-error.',
  },
  {
    question: 'O Clipr suporta YouTube Shorts e Instagram Reels?',
    answer:
      'Sim. YouTube Shorts são baixados em resolução otimizada 1080×1920 (vertical). Instagram Reels são baixados com a melhor qualidade disponível. TikTok também é suportado, com links completos e curtos.',
  },
]

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export { faqItems }
