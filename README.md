# clipr — Landing Page

Landing page oficial do [Clipr](https://github.com/CavalariDev/clipr), uma CLI em Python para download de vídeos do YouTube e Instagram Reels.

## Visão geral

Esta é uma SPA estática construída com React + Vite que documenta e promove o Clipr. Contém seções de apresentação, lista de recursos, guia de instalação interativo, referência de comandos e roadmap do projeto.

## Stack

| Tecnologia | Função |
|---|---|
| [React 18](https://react.dev/) | UI declarativa |
| [Vite](https://vite.dev/) | Bundler e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utility-first |
| [Lucide React](https://lucide.dev/) | Ícones |

## Estrutura do projeto

```
clipr-landing-page/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Navbar.jsx       # Navbar fixa com menu mobile
│   │   ├── Hero.jsx         # Seção principal com CTA e preview de terminal
│   │   ├── Features.jsx     # Grid de 6 recursos do Clipr
│   │   ├── Install.jsx      # Guia de instalação interativo em 5 passos
│   │   ├── Usage.jsx        # Referência de comandos com tabs
│   │   ├── Roadmap.jsx      # Itens concluídos e planejados
│   │   └── Footer.jsx       # Links e créditos
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── eslint.config.js
```

## Desenvolvimento local

**Pré-requisito:** Node.js 18+

```bash
# 1. Clone o repositório
git clone https://github.com/CavalariDev/clipr-landing-page.git
cd clipr-landing-page

# 2. Instale as dependências
npm install

# 3. Inicie o dev server
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Scripts disponíveis

```bash
npm run dev      # Dev server com HMR
npm run build    # Build de produção em /dist
npm run preview  # Preview do build de produção
npm run lint     # Verifica o código com ESLint
```

## Deploy

O build gera arquivos estáticos em `/dist` prontos para qualquer servidor ou CDN. O projeto está configurado para deploy em VPS privada.

```bash
npm run build
# Faça upload do conteúdo de /dist para o servidor
```

## Sobre o Clipr

O Clipr é a CLI documentada nesta landing page. Ele permite baixar vídeos com um único comando:

```bash
clipr download https://www.youtube.com/watch?v=VIDEO_ID
clipr download https://www.instagram.com/reel/REEL_ID/
clipr batch URL1 URL2 URL3 --continue-on-error
```

Repositório da CLI: [github.com/CavalariDev/clipr](https://github.com/CavalariDev/clipr)

## Autor

**Felipe Cavalari** — [GitHub](https://github.com/CavalariDev) · [LinkedIn](https://www.linkedin.com/in/felipe-cavalari/)

## Licença

MIT
