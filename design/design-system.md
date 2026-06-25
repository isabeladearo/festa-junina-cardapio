# Design System — Cardápio Festa Junina na Oikos

Identidade visual e tokens usados na aplicação (`website/app/globals.css`).

---

## Conceito

Festa junina artesanal brasileira: acolhimento, simplicidade, quermesse digital.

Não deve parecer: app bancário, marketplace, iFood ou sistema corporativo.

---

## Paleta

| Nome | Hex | Uso principal |
|------|-----|----------------|
| Laranja Junino | `#D96A1D` | Títulos, carrinho flutuante, destaques |
| Vermelho Quentão | `#B03A2E` | Botão −, ações de remover/limpar |
| Amarelo Milho | `#F5C242` | Detalhes do carrinho |
| Verde Milharal | `#4E8C4A` | Botão +, ações primárias |
| Creme Papel | `#F7E7C6` | Fundo base, superfícies |
| Marrom Kraft | `#8B5E3C` | Texto principal, bordas |

**Azul Bandeirinha (`#3E6AA8`)** — cor da identidade original; não está nos tokens CSS ativos da UI.

### Superfícies de cartão

- `--junina-paper-light` `#FCF6EA`
- `--junina-paper` `#F7E7C6`
- `--junina-paper-soft` `#F0E2C6`

### Bordas tracejadas (scrapbook)

- `--junina-dash-kraft` / `--junina-dash-kraft-soft`
- `--junina-dash-light` / `--junina-dash-light-strong`

---

## Fundo da página

Imagem: `/backgrounds/junina-background.jpg` (xadrez junino), com `background-attachment: fixed`.

---

## Tipografia

| Papel | Fonte | Uso |
|-------|-------|-----|
| Títulos | Bree Serif (`--font-bree-serif`) | Cabeçalho, categorias, totais |
| Texto | Nunito (`--font-nunito`) | Produtos, preços, instruções |

Classe utilitária: `.font-heading`

---

## Componentes visuais

### `.paper-card`

Cartão estilo papel kraft — header, produtos, seção "Como pedir".

### `.category-plaque`

Placa de madeira para o título de cada categoria (texto branco, sombra).

### `.category-nav`

Barra de atalhos com borda tracejada e fundo papel claro.

### Botões de quantidade (`.qty-btn`)

- **+** verde, **−** vermelho
- Redondos, grandes, borda tracejada clara

### Carrinho flutuante (`.floating-cart-btn`)

Gradiente laranja, texto branco, seta em círculo amarelo.

### Painel do pedido

- Fundo creme (`order-panel`, `order-panel-body`)
- Slide de baixo (`order-panel-slide-up`)
- Linhas editáveis com borda tracejada

### Tela do caixa

- Fundo mais escuro (`#E8D5B2`)
- Recibo central (`.cashier-receipt`) com total em destaque
- Menos decoração — foco na leitura

---

## Layout

### `.site-container`

Largura máxima compartilhada (header, main, carrinho, painéis): `max-width: 72rem`, padding responsivo.

### Grid de produtos

- Mobile: 1 coluna
- `md`: 2 colunas
- `lg`: 4 colunas

---

## Imagens de produto

- Formato PNG, fundo transparente
- Estilo sticker / papel recortado
- Caminhos em `menu.json` → `website/public/products/`

---

## Animações

Leves e rápidas:

- Painel do pedido: slide de baixo
- Botões: leve `scale` no toque
- Respeitar `prefers-reduced-motion` no scroll de categorias

---

## Responsividade

Prioridade: celular na festa. Desktop e tablet seguem o mesmo fluxo com mais colunas no grid.
