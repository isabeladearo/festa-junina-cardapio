import Image from "next/image";
import { QuantitySelector } from "@/components/order/QuantitySelector";
import { formatCurrency } from "@/lib/currency";
import type { MenuItem } from "@/types/menu";

interface ProductCardProps {
  item: MenuItem;
}

export function ProductCard({ item }: ProductCardProps) {
  return (
    <li className="paper-card flex flex-row items-center gap-3 px-3 py-2.5 sm:flex-col sm:items-center sm:gap-0 sm:px-4 sm:py-4">
      <div className="relative h-[7.25rem] w-[7.25rem] shrink-0 sm:mb-2 sm:h-32 sm:w-32">
        <Image
          src={item.imagem}
          alt={item.nome}
          fill
          sizes="(max-width: 640px) 116px, 128px"
          className="object-contain drop-shadow-sm"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start sm:items-center">
        <h3 className="text-left text-[0.95rem] font-semibold leading-tight text-junina-kraft sm:text-center sm:text-lg sm:leading-snug">
          {item.nome}
        </h3>

        <p className="mt-0.5 text-base font-bold text-junina-laranja sm:mt-1 sm:text-lg">
          {formatCurrency(item.preco)}
        </p>

        <QuantitySelector productId={item.id} productName={item.nome} />
      </div>
    </li>
  );
}
