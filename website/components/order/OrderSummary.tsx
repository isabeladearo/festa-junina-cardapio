"use client";

import { formatCurrency } from "@/lib/currency";
import { useOrder } from "@/hooks/useOrder";
import { OrderLineEditor } from "./OrderLineEditor";

export function OrderSummary() {
  const { menu, summary } = useOrder();

  if (summary.isEmpty) {
    return (
      <div className="order-summary-empty py-8 text-center">
        <p className="text-xl font-semibold text-junina-kraft sm:text-2xl">
          Seu pedido está vazio.
        </p>
        <p className="mt-3 text-base text-junina-kraft/90 sm:text-lg">
          Volte ao cardápio para escolher os produtos.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <p className="order-panel-lead">
        Use <strong className="font-bold">+</strong> e{" "}
        <strong className="font-bold">−</strong> para mudar a quantidade. Toque
        em <strong className="font-bold">Remover</strong> para tirar um item.
      </p>

      <div className="space-y-6 sm:space-y-8">
        {summary.categories.map((category) => {
          const categoryMeta = menu.categorias.find(
            (entry) => entry.id === category.categoryId,
          );

          return (
            <section
              key={category.categoryId}
              className="order-summary-category"
            >
              <h3 className="font-heading text-xl font-normal text-junina-laranja sm:text-2xl">
                {categoryMeta?.icone} {category.categoryName}
              </h3>

              <ul className="mt-4 space-y-4">
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

              <p className="mt-4 text-lg font-bold text-junina-kraft sm:text-xl">
                Subtotal {category.categoryName}:{" "}
                {formatCurrency(category.subtotal)}
              </p>
            </section>
          );
        })}
      </div>

      <div className="order-summary-totals">
        <p className="text-lg font-semibold text-junina-kraft sm:text-xl">
          Total de itens: {summary.totalItems}
        </p>
        <p className="mt-2 font-heading text-2xl text-junina-laranja sm:text-3xl">
          Total do pedido: {formatCurrency(summary.totalPrice)}
        </p>
      </div>
    </div>
  );
}
