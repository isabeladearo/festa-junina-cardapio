# Festa Junina na Oikos — Cardápio Digital

Repositório do cardápio digital da **Festa Junina na Oikos**: página web para o visitante montar o pedido no celular e mostrar ao caixa.

## Comece aqui

A aplicação Next.js está na pasta **`website/`**.

```bash
cd website
npm install
npm run dev
```

Documentação completa (o que é, como funciona, como rodar e como editar): **[website/README.md](website/README.md)**

## Estrutura do repositório

```
festa-junina-cardapio/
├── README.md              ← este arquivo
├── AI_CONTEXT.md          ← contexto para agentes de IA
├── docs/
│   └── project-context.md ← índice da documentação
├── design/                ← wireframe, design system, identidade
└── website/               ← app Next.js (código + cardápio + imagens)
```

## Documentação de design

| Arquivo | Conteúdo |
|---------|----------|
| [design/wireframe.md](design/wireframe.md) | Fluxo de telas e comportamento da interface |
| [design/design-system.md](design/design-system.md) | Paleta, tipografia e tokens CSS |
| [design/identidade.md](design/identidade.md) | Resumo da identidade visual |

## Fonte de verdade

- **Cardápio e textos:** `website/data/menu.json`
- **Imagens:** `website/public/` (`products/`, `stickers/`, `backgrounds/`)
