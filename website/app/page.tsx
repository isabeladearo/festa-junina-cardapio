import { MenuCatalog } from "@/components/menu/MenuCatalog";
import { EventInfo } from "@/components/layout/EventInfo";
import { Header } from "@/components/layout/Header";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { CashierView } from "@/components/order/CashierView";
import { FloatingCart } from "@/components/order/FloatingCart";
import { OrderPanel } from "@/components/order/OrderPanel";
import { OrderProvider } from "@/context/OrderProvider";
import { getMenu } from "@/lib/menu";

export default function Home() {
  const menu = getMenu();

  return (
    <OrderProvider menu={menu}>
      <div className="flex min-h-full flex-1 flex-col">
        <Header evento={menu.evento} />

        <main className="flex-1 pb-28 sm:pb-32">
          <SiteContainer className="flex flex-col gap-6 sm:gap-10">
            <MenuCatalog categories={menu.categorias} />
            <EventInfo evento={menu.evento} />
          </SiteContainer>
        </main>

        <FloatingCart />
        <OrderPanel />
        <CashierView />
      </div>
    </OrderProvider>
  );
}
