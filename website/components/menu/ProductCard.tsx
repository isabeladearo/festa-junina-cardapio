import { QuantitySelector } from "@/components/order/QuantitySelector";
import { formatCurrency } from "@/lib/currency";
import type { MenuItem } from "@/types/menu";

interface ProductCardProps {
  item: MenuItem;
}

export function ProductCard({ item }: ProductCardProps) {
  return (
    <li className="paper-card product-card flex items-center gap-3 px-3 py-2.5 sm:px-3.5 sm:py-3">
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="min-w-0 text-base font-semibold leading-snug text-junina-kraft">
            {item.nome}
          </h3>
          <p className="shrink-0 text-base font-bold tabular-nums text-junina-laranja">
            {formatCurrency(item.preco)}
          </p>
        </div>

        {item.descricao ? (
          <p className="text-sm leading-snug text-junina-kraft/80">
            {item.descricao}
          </p>
        ) : null}
      </div>

      <QuantitySelector productId={item.id} productName={item.nome} />
    </li>
  );
}
