"use client";

import { formatCurrency } from "@/lib/currency";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { useOrder } from "@/hooks/useOrder";

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="floating-cart-icon-svg"
      aria-hidden
    >
      <path
        d="M4 5h1.2l1.6 9.2a2 2 0 0 0 2 1.7h7.8a2 2 0 0 0 1.95-1.55L20.4 8H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1.5" fill="currentColor" />
      <circle cx="17" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function FloatingCart() {
  const { summary, openPanel, viewMode } = useOrder();
  const itemsLabel = summary.totalItems === 1 ? "item" : "itens";

  if (viewMode === "panel" || viewMode === "cashier") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pb-3 sm:pb-4">
      <SiteContainer>
        <button
          type="button"
          onClick={openPanel}
          className="floating-cart-btn w-full"
        aria-label={`Toque para ver seu pedido: ${summary.totalItems} ${itemsLabel}, total ${formatCurrency(summary.totalPrice)}`}
        aria-haspopup="dialog"
      >
        <span className="floating-cart-icon" aria-hidden>
          <CartIcon />
        </span>

        <span className="floating-cart-text">
          <span className="floating-cart-summary">
            {summary.totalItems} {itemsLabel}
            <span className="floating-cart-dot"> • </span>
            {formatCurrency(summary.totalPrice)}
          </span>
          <span className="floating-cart-cta">Toque para ver seu pedido</span>
        </span>

        <span className="floating-cart-arrow" aria-hidden>
          →
        </span>
      </button>
      </SiteContainer>
    </div>
  );
}
