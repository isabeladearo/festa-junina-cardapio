# Wireframe — Cardápio Festa Junina na Oikos

Especificação de telas e fluxo. Textos exatos do evento vêm de `website/data/menu.json`.

---

## Objetivo

Cardápio digital simples para todas as idades: escolher itens, conferir o pedido no celular e mostrar ao caixa. Sem pagamento online.

---

## Estrutura da página (scroll vertical)

1. Cabeçalho (título, mensagens, data e horário)
2. Navegação de categorias (barra fixa ao rolar)
3. Cardápio por categoria
4. Seção "Como pedir" (passos numerados)
5. Carrinho flutuante (fixo no rodapé quando há itens)

Ordem das categorias: **Salgados → Lanches → Bebidas → Doces → Bolos**.

---

## Cabeçalho

**Elementos decorativos:** bandeirinhas, balão, casal caipira, fogueira (`public/stickers/`).

**Conteúdo (de `menu.json` → `evento`):**

- Título em duas linhas: `nome` + `local` (ex.: "Festa Junina" / "na Oikos")
- `subtitulo` (ex.: "Cardápio Oficial")
- `mensagens[]` — duas frases curtas
- `data` e `horario`

---

## Navegação de categorias

Barra sticky com 5 atalhos (ícone + rótulo).

- Toque leva à seção da categoria (scroll suave)
- Sem indicador de "categoria ativa" ao rolar
- Dica: "Toque para ir à categoria. Role a tela para ver o cardápio completo."

---

## Cards de produto

Por item:

- Imagem (sticker PNG)
- Nome
- Preço
- Seletor: **[−] quantidade [+]**

Layout responsivo:

- Celular: 1 card por linha (imagem à esquerda)
- Tablet: 2 por linha
- Desktop: 4 por linha

Quantidade nunca fica negativa.

---

## Carrinho flutuante

Fixo no rodapé. Oculto enquanto painel ou tela do caixa estão abertos.

Exibe:

- Ícone de carrinho
- Total de itens e valor (ex.: "3 itens · R$ 25,00")
- Chamada: toque para conferir

---

## Painel "Conferir pedido"

Abre por cima do cardápio (slide de baixo).

**Cabeçalho:**

- Título: **Conferir pedido**
- Subtítulo: "Ajuste o que precisar antes de pagar"
- Botão fechar (×)

**Corpo:**

- Itens agrupados por categoria
- Cada linha: quantidade × nome, subtotal da linha
- Edição: +/− e botão **Remover**
- Subtotal por categoria
- Total de itens e total do pedido

**Rodapé:**

- Com itens: dica "Pronto para pagar? Toque em Mostrar ao Caixa.", **Limpar Pedido** e **Mostrar ao Caixa**
- Vazio: dica "Volte ao cardápio para escolher os produtos." e só **Mostrar ao Caixa** (desabilitado)

---

## Tela "Mostrar ao Caixa"

Tela cheia para o caixa ler no celular do cliente.

**Topo:**

- **Corrigir pedido** — volta ao painel de conferência
- **Fechar** — fecha e volta ao cardápio

**Recibo:**

- Título: **PEDIDO**
- Por categoria: ícone, nome, contagem de unidades
- Linhas com quantidade, nome, preço unitário ("R$ X cada") e subtotal da linha
- Subtotal da categoria
- Total de itens e **Total a pagar** em destaque

**Rodapé:**

- Dica: "Depois de pagar, toque em Pedido Finalizado."
- **Pedido Finalizado** — pede confirmação ("Já pagou? O pedido será apagado…")

---

## Tela "Pedido concluído!"

Após confirmar pagamento:

- Mensagem de sucesso e "Bom proveito na festa!"
- **Fazer novo pedido** — fecha e volta ao cardápio com pedido limpo

---

## Seção "Como pedir"

Abaixo do cardápio (`evento.passos` em `menu.json`):

1. Escolha os produtos e ajuste as quantidades com + e −
2. Confira tudo no carrinho antes de pagar
3. Na hora de pagar, toque em Mostrar ao Caixa
4. Depois do pagamento, toque em Pedido Finalizado

Rodapé: `evento.observacao` (sem cadastro, pagamento no caixa).

---

## Requisitos de usabilidade

- Botões grandes, alto contraste, textos legíveis
- Sem login, cadastro ou pagamento online
- Funciona em celular, tablet e desktop
- Pedido persiste em `localStorage` entre recargas
