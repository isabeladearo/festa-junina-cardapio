const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** Formata valor numérico como moeda brasileira (ex.: 10 → "R$ 10,00") */
export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}
