import type { MenuData, OrderQuantities } from "@/types/menu";

const ORDER_STORAGE_KEY = "festa-junina-pedido";

function getValidProductIds(menu: MenuData): Set<string> {
  const ids = new Set<string>();

  for (const category of menu.categorias) {
    for (const item of category.itens) {
      ids.add(item.id);
    }
  }

  return ids;
}

/** Carrega quantidades salvas, ignorando ids inválidos ou corrompidos */
export function loadOrderQuantities(menu: MenuData): OrderQuantities {
  if (typeof window === "undefined") return {};

  try {
    const raw = localStorage.getItem(ORDER_STORAGE_KEY);
    if (!raw) return {};

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }

    const validIds = getValidProductIds(menu);
    const quantities: OrderQuantities = {};

    for (const [productId, value] of Object.entries(parsed)) {
      if (!validIds.has(productId)) continue;
      if (typeof value !== "number" || !Number.isFinite(value)) continue;

      const quantity = Math.floor(value);
      if (quantity > 0) quantities[productId] = quantity;
    }

    return quantities;
  } catch {
    return {};
  }
}

/** Persiste quantidades; remove a chave quando o pedido estiver vazio */
export function saveOrderQuantities(quantities: OrderQuantities): void {
  if (typeof window === "undefined") return;

  try {
    if (Object.keys(quantities).length === 0) {
      localStorage.removeItem(ORDER_STORAGE_KEY);
      return;
    }

    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(quantities));
  } catch {
    // Quota excedida ou storage indisponível — pedido segue só em memória
  }
}

/** Remove o pedido persistido */
export function clearOrderQuantities(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(ORDER_STORAGE_KEY);
  } catch {
    // ignore
  }
}
