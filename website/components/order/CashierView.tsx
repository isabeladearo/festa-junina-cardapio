"use client";

import { useEffect, useState } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { formatCurrency } from "@/lib/currency";
import { useOrder } from "@/hooks/useOrder";

function CashierLine({
  quantity,
  name,
  unitPrice,
  lineTotal,
}: {
  quantity: number;
  name: string;
  unitPrice: number;
  lineTotal: number;
}) {
  return (
    <div className="cashier-line-item">
      <div className="cashier-line grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-1 text-xl leading-snug sm:text-2xl">
        <p className="min-w-0 break-words font-semibold text-junina-kraft">
          <span className="cashier-line-qty">{quantity}x</span> {name}
        </p>
        <p className="shrink-0 text-right font-bold whitespace-nowrap text-junina-kraft tabular-nums">
          {formatCurrency(lineTotal)}
        </p>
      </div>
      <p className="cashier-line-unit">
        {formatCurrency(unitPrice)} cada
      </p>
    </div>
  );
}

export function CashierView() {
  const {
    menu,
    summary,
    viewMode,
    backToPanel,
    closePanel,
    completeOrder,
  } = useOrder();
  const isOpen = viewMode === "cashier";
  const [confirmFinish, setConfirmFinish] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      setConfirmFinish(false);
      setIsFinished(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  if (!isFinished && summary.isEmpty) return null;

  const handleFinish = () => {
    completeOrder();
    setConfirmFinish(false);
    setIsFinished(true);
  };

  if (isFinished) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cashier-done-title"
        className="cashier-view fixed inset-0 z-[80] flex min-h-dvh flex-col"
      >
        <div className="cashier-view-body flex flex-1 items-center justify-center p-6">
          <article className="cashier-done-card mx-auto w-full max-w-md text-center">
            <p className="text-5xl" aria-hidden>
              ✅
            </p>
            <h1
              id="cashier-done-title"
              className="mt-4 font-heading text-3xl text-junina-laranja sm:text-4xl"
            >
              Pedido concluído!
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-junina-kraft sm:text-xl">
              Pagamento feito. Bom proveito na festa!
            </p>
            <button
              type="button"
              onClick={closePanel}
              className="order-btn order-btn-primary cashier-done-btn mt-8 w-full"
            >
              Fazer novo pedido
            </button>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cashier-view-title"
      className="cashier-view fixed inset-0 z-[80] flex min-h-dvh flex-col"
    >
      <div className="cashier-view-header flex shrink-0 py-3 sm:py-4">
        <SiteContainer className="flex w-full items-center justify-between gap-3">
          <button
            type="button"
            onClick={backToPanel}
            className="cashier-btn cashier-btn-secondary"
          >
            Corrigir pedido
          </button>
          <button
            type="button"
            onClick={closePanel}
            className="cashier-btn cashier-btn-secondary"
          >
            Fechar
          </button>
        </SiteContainer>
      </div>

      <div className="cashier-view-body min-h-0 flex-1 overflow-y-auto overscroll-contain pb-4">
        <SiteContainer className="py-6 sm:py-8">
          <article className="cashier-receipt mx-auto w-full min-w-0 max-w-lg overflow-x-hidden">
            <h1
              id="cashier-view-title"
              className="text-center font-heading text-4xl font-normal uppercase tracking-wide text-junina-kraft sm:text-5xl"
            >
              Pedido
            </h1>

            <div className="cashier-receipt-items mt-8 space-y-8 sm:space-y-10">
              {summary.categories.map((category) => {
                const categoryMeta = menu.categorias.find(
                  (entry) => entry.id === category.categoryId,
                );
                const categoryItemCount = category.items.reduce(
                  (sum, line) => sum + line.quantity,
                  0,
                );

                return (
                  <section
                    key={category.categoryId}
                    className="cashier-category-block"
                  >
                    <h2 className="font-heading text-2xl text-junina-laranja sm:text-3xl">
                      {categoryMeta?.icone} {category.categoryName}
                    </h2>
                    <p className="cashier-category-meta">
                      {categoryItemCount}{" "}
                      {categoryItemCount === 1 ? "unidade" : "unidades"}
                    </p>
                    <ul className="mt-4 space-y-4">
                      {category.items.map((line) => (
                        <li key={line.item.id}>
                          <CashierLine
                            quantity={line.quantity}
                            name={line.item.nome}
                            unitPrice={line.item.preco}
                            lineTotal={line.lineTotal}
                          />
                        </li>
                      ))}
                    </ul>
                    <p className="cashier-category-subtotal">
                      Subtotal {category.categoryName}:{" "}
                      {formatCurrency(category.subtotal)}
                    </p>
                  </section>
                );
              })}
            </div>

            <div className="cashier-receipt-totals mt-10">
              <div className="cashier-receipt-count">
                <p className="cashier-receipt-count-label">Total de itens</p>
                <p className="cashier-receipt-count-value">
                  {summary.totalItems}
                </p>
              </div>
              <div className="cashier-receipt-pay mt-5 text-center">
                <p className="text-base font-bold uppercase tracking-[0.2em] text-junina-kraft sm:text-lg">
                  Total a pagar
                </p>
                <p className="mt-3 font-heading text-6xl font-normal leading-none text-junina-laranja sm:text-7xl">
                  {formatCurrency(summary.totalPrice)}
                </p>
              </div>
            </div>
          </article>
        </SiteContainer>
      </div>

      <div className="cashier-view-footer shrink-0 py-4">
        <SiteContainer className="flex flex-col gap-3">
          {confirmFinish ? (
            <div className="cashier-finish-confirm">
              <p className="cashier-finish-confirm-text">
                Já pagou? O pedido será apagado para começar outro.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setConfirmFinish(false)}
                  className="order-btn order-btn-danger flex-1"
                >
                  Ainda não
                </button>
                <button
                  type="button"
                  onClick={handleFinish}
                  className="order-btn order-btn-primary flex-1"
                >
                  Sim, finalizar
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="cashier-footer-hint text-center text-sm font-semibold text-junina-kraft sm:text-base">
                Depois de pagar, toque em Pedido Finalizado.
              </p>
              <button
                type="button"
                onClick={() => setConfirmFinish(true)}
                className="order-btn order-btn-primary w-full"
              >
                Pedido Finalizado
              </button>
            </>
          )}
        </SiteContainer>
      </div>
    </div>
  );
}
