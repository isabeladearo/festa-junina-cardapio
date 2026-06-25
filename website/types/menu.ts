/** Produto individual do cardápio */
export interface MenuItem {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
}

/** Categoria com lista de produtos */
export interface Category {
  id: string;
  nome: string;
  icone: string;
  itens: MenuItem[];
}

/** Metadados do evento (menu.json → evento) */
export interface EventInfo {
  nome: string;
  local?: string;
  subtitulo: string;
  mensagens: string[];
  data: string;
  horario: string;
  passos: string[];
  observacao: string;
}

/** Estrutura completa do menu.json */
export interface MenuData {
  evento: EventInfo;
  categorias: Category[];
}

/** Mapa productId → quantidade (0 = não incluído no pedido) */
export type OrderQuantities = Record<string, number>;

/** Item no pedido com dados enriquecidos para exibição */
export interface OrderLineItem {
  item: MenuItem;
  categoryId: string;
  categoryName: string;
  quantity: number;
  lineTotal: number;
}

/** Resumo agrupado por categoria */
export interface CategoryOrderSummary {
  categoryId: string;
  categoryName: string;
  items: OrderLineItem[];
  subtotal: number;
}

/** Resumo completo do pedido (derivado, nunca armazenado) */
export interface OrderSummary {
  categories: CategoryOrderSummary[];
  totalItems: number;
  totalPrice: number;
  isEmpty: boolean;
}

/** UI: modos de visualização do pedido */
export type OrderViewMode = "closed" | "panel" | "cashier";
