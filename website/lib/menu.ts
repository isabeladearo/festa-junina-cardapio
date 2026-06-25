import menuJson from "@/data/menu.json";
import type { Category, MenuData } from "@/types/menu";

/** Ordem de exibição pensada no fluxo de escolha do visitante */
const CATEGORY_ORDER = [
  "salgados",
  "lanches",
  "bebidas",
  "doces",
  "bolos",
] as const;

function sortCategories(categorias: Category[]): Category[] {
  const orderMap = new Map<string, number>(
    CATEGORY_ORDER.map((id, index) => [id, index]),
  );

  return [...categorias].sort(
    (a, b) =>
      (orderMap.get(a.id) ?? Number.MAX_SAFE_INTEGER) -
      (orderMap.get(b.id) ?? Number.MAX_SAFE_INTEGER),
  );
}

/** Retorna o cardápio completo tipado a partir de data/menu.json */
export function getMenu(): MenuData {
  const menu = menuJson as MenuData;

  return {
    ...menu,
    categorias: sortCategories(menu.categorias),
  };
}
