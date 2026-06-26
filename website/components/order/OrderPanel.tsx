"use client";

import { useEffect } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { OrderSummary } from "@/components/order/OrderSummary";
import { useOrder } from "@/hooks/useOrder";

export function OrderPanel() {
  const { viewMode, closePanel, clearOrder, summary, openCashierView } =
    useOrder();
  const isOpen = viewMode === "panel";

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closePanel]);

  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[60] bg-black/55"
        onClick={closePanel}
        aria-label="Fechar painel do pedido"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-panel-title"
        className="order-panel fixed inset-x-0 bottom-0 z-[70] flex min-h-[60vh] max-h-[88vh] flex-col rounded-t-xl shadow-[0_-12px_32px_rgb(0_0_0_/_0.28)]"
      >
        <div className="order-panel-header flex shrink-0 flex-col gap-2 py-3">
          <SiteContainer className="flex w-full items-start justify-between gap-2">
            <div className="min-w-0 text-left">
              <h2
                id="order-panel-title"
                className="font-heading text-2xl text-junina-laranja sm:text-3xl"
              >
                Conferir pedido
              </h2>
              <p className="mt-0.5 text-sm font-semibold text-junina-kraft sm:text-base">
                Ajuste o que precisar antes de pagar
              </p>
            </div>
            <button
              type="button"
              onClick={closePanel}
              className="panel-close-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-junina-kraft/15 text-2xl leading-none text-junina-kraft transition-colors hover:bg-junina-kraft/25"
              aria-label="Fechar e voltar ao cardápio"
            >
              ×
            </button>
          </SiteContainer>
        </div>

        <div className="order-panel-body min-h-0 flex-1 overflow-y-auto overscroll-contain py-4 sm:py-5">
          <SiteContainer>
            <OrderSummary />
          </SiteContainer>
        </div>

        <div className="order-panel-footer flex shrink-0 flex-col gap-3 py-3 sm:gap-4 sm:py-4">
          <SiteContainer className="flex flex-col gap-3 sm:gap-4">
            <p className="order-panel-footer-hint text-center text-sm font-semibold text-junina-kraft sm:text-base">
              {summary.isEmpty
                ? "Volte ao cardápio para escolher os produtos."
                : "Pronto para pagar? Toque em Mostrar ao Caixa."}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              {!summary.isEmpty ? (
                <button
                  type="button"
                  onClick={clearOrder}
                  className="order-btn order-btn-danger flex-1"
                >
                  Limpar Pedido
                </button>
              ) : null}
              <button
                type="button"
                onClick={openCashierView}
                disabled={summary.isEmpty}
                className="order-btn order-btn-primary flex-1"
              >
                Mostrar ao Caixa
              </button>
            </div>
          </SiteContainer>
        </div>
      </aside>
    </>
  );
}
