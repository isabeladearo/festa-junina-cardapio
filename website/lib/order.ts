import type {
  CategoryOrderSummary,
  MenuData,
  OrderLineItem,
  OrderQuantities,
  OrderSummary,
} from "@/types/menu";

/** Monta o resumo completo do pedido a partir das quantidades e do cardápio */
export function buildOrderSummary(
  quantities: OrderQuantities,
  menu: MenuData,
): OrderSummary {
  const categories: CategoryOrderSummary[] = [];

  for (const category of menu.categorias) {
    const items: OrderLineItem[] = [];

    for (const item of category.itens) {
      const quantity = quantities[item.id] ?? 0;
      if (quantity <= 0) continue;

      items.push({
        item,
        categoryId: category.id,
        categoryName: category.nome,
        quantity,
        lineTotal: quantity * item.preco,
      });
    }

    if (items.length > 0) {
      categories.push({
        categoryId: category.id,
        categoryName: category.nome,
        items,
        subtotal: items.reduce((sum, line) => sum + line.lineTotal, 0),
      });
    }
  }

  const totalItems = categories.reduce(
    (sum, category) =>
      sum + category.items.reduce((itemSum, line) => itemSum + line.quantity, 0),
    0,
  );

  const totalPrice = categories.reduce(
    (sum, category) => sum + category.subtotal,
    0,
  );

  return {
    categories,
    totalItems,
    totalPrice,
    isEmpty: totalItems === 0,
  };
}

/** Retorna a quantidade de um produto, nunca negativa */
export function getItemQuantity(
  quantities: OrderQuantities,
  productId: string,
): number {
  return Math.max(0, quantities[productId] ?? 0);
}

/** Incrementa a quantidade de um produto em 1 */
export function incrementQuantity(
  quantities: OrderQuantities,
  productId: string,
): OrderQuantities {
  const current = getItemQuantity(quantities, productId);
  return { ...quantities, [productId]: current + 1 };
}

/** Decrementa a quantidade de um produto em 1, sem permitir negativo */
export function decrementQuantity(
  quantities: OrderQuantities,
  productId: string,
): OrderQuantities {
  const current = getItemQuantity(quantities, productId);
  if (current <= 0) return quantities;

  const next = current - 1;
  if (next === 0) {
    const { [productId]: _, ...rest } = quantities;
    return rest;
  }

  return { ...quantities, [productId]: next };
}

/** Define a quantidade de um produto, removendo entradas com zero */
export function setItemQuantity(
  quantities: OrderQuantities,
  productId: string,
  quantity: number,
): OrderQuantities {
  const safeQuantity = Math.max(0, Math.floor(quantity));

  if (safeQuantity === 0) {
    const { [productId]: _, ...rest } = quantities;
    return rest;
  }

  return { ...quantities, [productId]: safeQuantity };
}

/** Remove todos os itens do pedido */
export function clearQuantities(): OrderQuantities {
  return {};
}
