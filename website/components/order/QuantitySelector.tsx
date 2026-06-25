"use client";

import { useOrder } from "@/hooks/useOrder";

interface QuantitySelectorProps {
  productId: string;
  productName: string;
  variant?: "card" | "panel";
}

export function QuantitySelector({
  productId,
  productName,
  variant = "card",
}: QuantitySelectorProps) {
  const { getQuantity, addItem, removeItem } = useOrder();
  const quantity = getQuantity(productId);
  const isPanel = variant === "panel";

  return (
    <div
      className={
        isPanel
          ? "order-qty-selector"
          : "mt-1.5 flex items-center gap-2.5 sm:mt-3 sm:gap-3"
      }
      aria-label={`Quantidade de ${productName}`}
    >
      <button
        type="button"
        onClick={() => removeItem(productId)}
        disabled={quantity === 0}
        aria-label={`Diminuir quantidade de ${productName}`}
        className={`qty-btn qty-btn-minus disabled:opacity-50${isPanel ? " qty-btn-panel" : ""}`}
      >
        −
      </button>
      <span
        className={isPanel ? "qty-counter qty-counter-panel" : "qty-counter"}
        aria-live="polite"
        aria-label="Quantidade"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => addItem(productId)}
        aria-label={`Aumentar quantidade de ${productName}`}
        className={`qty-btn qty-btn-plus${isPanel ? " qty-btn-panel" : ""}`}
      >
        +
      </button>
    </div>
  );
}
