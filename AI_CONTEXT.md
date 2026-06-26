# AI_CONTEXT.md

## Documentação

- **README principal:** `website/README.md` (visível no GitHub)
- **Design e wireframe:** pasta `design/`
- **Índice:** `docs/project-context.md`

**Regra:** ao alterar comportamento, dados ou assets do app, atualize também estes arquivos de documentação.

---

## Projeto

**Cardápio Digital — Festa Junina da Oikos**

Página web estática para o visitante:

- Navegar pelo cardápio por categoria
- Adicionar e remover quantidades
- Conferir o pedido no carrinho
- Mostrar o recibo ao caixa para pagamento presencial
- Finalizar e limpar o pedido após o pagamento

**Não há:** login, cadastro, pagamento online, backend ou banco de dados.

O pedido é salvo em `localStorage` apenas para não perder a seleção ao recarregar a página.

---

## Público e usabilidade

Crianças, jovens, adultos e idosos. Interface simples: botões grandes, fonte legível, poucos cliques.

---

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Sem dependências extras além do essencial

---

## Estrutura do repositório

```
festa-junina-cardapio/
├── AI_CONTEXT.md          ← este arquivo
├── docs/
│   └── project-context.md ← índice da documentação
├── design/                ← wireframe, design system, identidade
└── website/               ← aplicação Next.js
    ├── app/               layout, page, globals.css, ícones, opengraph
    ├── components/
    │   ├── layout/        Header, EventInfo, SiteContainer
    │   ├── menu/          MenuCatalog, CategoryNav, CategorySection, ProductCard, ProductGrid
    │   └── order/         FloatingCart, OrderPanel, OrderSummary, OrderLineEditor, CashierView, QuantitySelector
    ├── context/           OrderProvider
    ├── data/              menu.json
    ├── hooks/             useOrder
    ├── lib/               menu, order, order-storage, currency, site
    ├── public/
    │   └── backgrounds/   fundo xadrez (junina-background.png)
    └── types/             menu.ts
```

Pastas antigas (`assets/`, `data/` na raiz, `public/products/`, `public/stickers/`) **não existem**. Tudo do app vive em `website/`.

---

## Fluxo do usuário (implementado)

1. **Cardápio** — escolher produtos com +/−; barra de categorias é atalho de scroll (sem destaque de categoria ativa).
2. **Carrinho flutuante** — toque abre o painel "Conferir pedido".
3. **Conferir pedido** — editar quantidades, remover itens; **Limpar Pedido** só aparece com itens no carrinho.
4. **Mostrar ao Caixa** — recibo com preço unitário e total; botões "Corrigir pedido" e "Fechar".
5. **Pedido Finalizado** — confirma pagamento, limpa o pedido, exibe "Pedido concluído!".

Textos e passos vêm de `website/data/menu.json` → `evento`.

---

## Ordem das categorias no cardápio

Definida em `website/lib/menu.ts`:

1. Salgados
2. Lanches
3. Bebidas
4. Doces
5. Bolos

Depois do cardápio vem a seção **Como pedir** (`EventInfo`).

---

## Dados do cardápio

Arquivo: `website/data/menu.json`

- `evento` — nome, subtítulo, mensagens, data, horário, passos, observação
- `categorias[]` — id, nome, ícone emoji, itens (id, nome, preco, descricao opcional). A última categoria costuma ser `atracoes` (Bingo, Cadeia, etc.)

Os itens de comida são **só texto** na interface — não há campo `imagem` nem miniaturas de produto.

---

## Assets públicos

| Caminho | Uso |
|---------|-----|
| `public/backgrounds/junina-background.png` | Fundo da página (camada fixa no CSS) |
| `app/icon.svg`, `app/apple-icon.svg` | Favicons (convenção Next.js) |
| `app/opengraph-image.tsx` | Imagem de compartilhamento (gerada) |

---

## Conceito visual

Festa junina artesanal: scrapbook, papel kraft, bordas tracejadas (com moderação no painel do pedido), placa de madeira nas categorias, bandeirinhas em CSS no cabeçalho.

Detalhes em `design/design-system.md` e `design/identidade.md`.

---

## Regras para alterações

- Não adicionar backend, auth ou pagamento online.
- Manter simplicidade e acessibilidade.
- Preferir editar `menu.json` para textos do evento e produtos.
- Tokens de cor e classes utilitárias em `website/app/globals.css`.
- Componentes reutilizáveis; lógica de pedido em `lib/order.ts` e `context/OrderProvider.tsx`.
- **Atualizar a documentação** (`README.md`, `website/README.md`, `AI_CONTEXT.md`, `docs/`, `design/`) quando mudar fluxo, dados ou visual.
