"use client";

import { formatCurrency } from "@/lib/currency";
import { useOrder } from "@/hooks/useOrder";
import { QuantitySelector } from "./QuantitySelector";

interface OrderLineEditorProps {
  productId: string;
  productName: string;
  quantity: number;
  lineTotal: number;
}

export function OrderLineEditor({
  productId,
  productName,
  quantity,
  lineTotal,
}: OrderLineEditorProps) {
  const { setQuantity } = useOrder();

  return (
    <div className="order-line-item">
      <div className="order-line grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-2 gap-y-0.5 text-sm leading-snug sm:text-base">
        <p className="min-w-0 break-words font-semibold text-junina-kraft">
          {quantity}x {productName}
        </p>
        <p className="shrink-0 text-right font-bold whitespace-nowrap text-junina-kraft tabular-nums">
          {formatCurrency(lineTotal)}
        </p>
      </div>

      <div className="order-line-actions">
        <QuantitySelector
          variant="panel"
          productId={productId}
          productName={productName}
        />
        <button
          type="button"
          onClick={() => setQuantity(productId, 0)}
          className="order-line-remove"
          aria-label={`Remover ${productName} do pedido`}
        >
          Remover
        </button>
      </div>
    </div>
  );
}
