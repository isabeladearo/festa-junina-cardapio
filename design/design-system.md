# Design System — Cardápio Festa Junina da Oikos

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

Usar com moderação no painel do pedido — evitar caixa pontilhada dentro de caixa pontilhada.

---

## Fundo da página

Imagem: `/backgrounds/junina-background.png` em `html::before` com `position: fixed` e `cover` só na viewport — nítido no celular, sem `background-attachment: fixed` nem esticar o fundo na altura do documento.

---

## Tipografia

| Papel | Fonte | Uso |
|-------|-------|-----|
| Títulos | Bree Serif (`--font-bree-serif`) | Cabeçalho, categorias, totais |
| Texto | Nunito (`--font-nunito`) | Produtos, preços, instruções |

Classe utilitária: `.font-heading`

---

## Componentes visuais

### Cabeçalho (`.header-bunting`)

Faixa de bandeirinhas em CSS (laranja, amarelo, verde, vermelho) no topo do cartão do título.

### `.paper-card`

Cartão estilo papel kraft — header, produtos, seção "Como pedir".

### `.category-plaque`

Placa de madeira para o título de cada categoria (texto branco, sombra). É o único marcador de seção — sem barra de atalhos no topo.

### Botões de quantidade (`.qty-btn`)

- **+** verde, **−** vermelho
- Redondos, borda tracejada clara

### Carrinho flutuante (`.floating-cart-btn`)

Gradiente laranja, texto branco, seta em círculo amarelo.

### Painel do pedido

- Fundo creme (`order-panel`, `order-panel-body`)
- Slide de baixo (`order-panel-slide-up`)
- Tracejado nas seções principais (painel, categorias, totais, botões de ação)
- Itens individuais sem borda extra — fundo claro apenas

### Tela do caixa

- Fundo mais escuro (`#E8D5B2`)
- Recibo central (`.cashier-receipt`) com total em destaque
- Menos decoração — foco na leitura

---

## Layout

### Lista de produtos

Estilo delivery compacto, **só texto**:

- **Mobile:** 1 coluna — nome, preço, descrição e +/− na mesma linha
- **Desktop:** 2 colunas de linhas compactas

Sem imagens de produto na interface.

A tela **Mostrar ao Caixa** mantém fontes maiores no total a pagar para leitura pelo atendente.

---

## Animações

Leves e rápidas:

- Painel do pedido: slide de baixo
- Botões: leve `scale` no toque
- Respeitar `prefers-reduced-motion` nas animações de interface

---

## Responsividade

Prioridade: celular na festa. Desktop e tablet seguem o mesmo fluxo com mais colunas no grid de produtos.
