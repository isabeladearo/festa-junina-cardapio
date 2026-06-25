"use client";

import { formatCurrency } from "@/lib/currency";
import { useOrder } from "@/hooks/useOrder";
import { OrderLineEditor } from "./OrderLineEditor";

export function OrderSummary() {
  const { menu, summary } = useOrder();

  if (summary.isEmpty) {
    return (
      <div className="order-summary-empty py-5 text-center">
        <p className="text-base font-semibold text-junina-kraft sm:text-lg">
          Seu pedido está vazio.
        </p>
        <p className="mt-2 text-sm text-junina-kraft/90 sm:text-base">
          Volte ao cardápio para escolher os produtos.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      <p className="order-panel-lead">
        Use <strong className="font-bold">+</strong> e{" "}
        <strong className="font-bold">−</strong> para mudar a quantidade. Toque
        em <strong className="font-bold">Remover</strong> para tirar um item.
      </p>

      <div className="space-y-4 sm:space-y-5">
        {summary.categories.map((category) => {
          const categoryMeta = menu.categorias.find(
            (entry) => entry.id === category.categoryId,
          );

          return (
            <section
              key={category.categoryId}
              className="order-summary-category"
            >
              <h3 className="font-heading text-base font-normal text-junina-laranja sm:text-lg">
                {categoryMeta?.icone} {category.categoryName}
              </h3>

              <ul className="mt-2.5 space-y-2.5">
                {category.items.map((line) => (
                  <li key={line.item.id}>
                    <OrderLineEditor
                      productId={line.item.id}
                      productName={line.item.nome}
                      quantity={line.quantity}
                      lineTotal={line.lineTotal}
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <div className="order-summary-totals">
        <p className="text-sm font-semibold text-junina-kraft sm:text-base">
          Total de itens: {summary.totalItems}
        </p>
        <p className="mt-1 font-heading text-xl text-junina-laranja sm:text-2xl">
          Total do pedido: {formatCurrency(summary.totalPrice)}
        </p>
      </div>
    </div>
  );
}
