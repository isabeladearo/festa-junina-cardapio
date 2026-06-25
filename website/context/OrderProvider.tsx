"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  buildOrderSummary,
  clearQuantities,
  decrementQuantity,
  getItemQuantity,
  incrementQuantity,
  setItemQuantity,
} from "@/lib/order";
import {
  clearOrderQuantities,
  loadOrderQuantities,
  saveOrderQuantities,
} from "@/lib/order-storage";
import type {
  MenuData,
  OrderQuantities,
  OrderSummary,
  OrderViewMode,
} from "@/types/menu";

interface OrderContextValue {
  menu: MenuData;
  summary: OrderSummary;
  viewMode: OrderViewMode;
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearOrder: () => void;
  getQuantity: (productId: string) => number;
  openPanel: () => void;
  closePanel: () => void;
  openCashierView: () => void;
  backToPanel: () => void;
  completeOrder: () => void;
}

export const OrderContext = createContext<OrderContextValue | null>(null);

interface OrderProviderProps {
  menu: MenuData;
  children: ReactNode;
}

export function OrderProvider({ menu, children }: OrderProviderProps) {
  const [quantities, setQuantities] = useState<OrderQuantities>({});
  const [viewMode, setViewMode] = useState<OrderViewMode>("closed");
  const [isStorageReady, setIsStorageReady] = useState(false);

  useEffect(() => {
    setQuantities(loadOrderQuantities(menu));
    setIsStorageReady(true);
  }, [menu]);

  useEffect(() => {
    if (!isStorageReady) return;
    saveOrderQuantities(quantities);
  }, [quantities, isStorageReady]);

  const summary = useMemo(
    () => buildOrderSummary(quantities, menu),
    [quantities, menu],
  );

  const openPanel = useCallback(() => {
    setViewMode("panel");
  }, []);

  const closePanel = useCallback(() => {
    setViewMode("closed");
  }, []);

  const openCashierView = useCallback(() => {
    const currentSummary = buildOrderSummary(quantities, menu);
    if (currentSummary.isEmpty) return;
    setViewMode("cashier");
  }, [quantities, menu]);

  const backToPanel = useCallback(() => {
    setViewMode("panel");
  }, []);

  const addItem = useCallback((productId: string) => {
    setQuantities((current) => incrementQuantity(current, productId));
  }, []);

  const removeItem = useCallback((productId: string) => {
    setQuantities((current) => decrementQuantity(current, productId));
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setQuantities((current) => setItemQuantity(current, productId, quantity));
  }, []);

  const clearOrder = useCallback(() => {
    setQuantities(clearQuantities());
    clearOrderQuantities();
  }, []);

  const completeOrder = useCallback(() => {
    setQuantities(clearQuantities());
    clearOrderQuantities();
  }, []);

  const getQuantity = useCallback(
    (productId: string) => getItemQuantity(quantities, productId),
    [quantities],
  );

  const value = useMemo(
    () => ({
      menu,
      summary,
      viewMode,
      addItem,
      removeItem,
      setQuantity,
      clearOrder,
      getQuantity,
      openPanel,
      closePanel,
      openCashierView,
      backToPanel,
      completeOrder,
    }),
    [
      menu,
      summary,
      viewMode,
      addItem,
      removeItem,
      setQuantity,
      clearOrder,
      getQuantity,
      openPanel,
      closePanel,
      openCashierView,
      backToPanel,
      completeOrder,
    ],
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}
