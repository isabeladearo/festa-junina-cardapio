export const siteConfig = {
  name: "Festa Junina na Oikos",
  title: "Festa Junina na Oikos",
  description:
    "Cardápio digital da Festa Junina na Oikos. Monte seu pedido no celular, confira e mostre ao caixa para pagar na hora.",
  locale: "pt_BR",
  eventDate: "27 de Junho",
  eventTime: "19h",
} as const;

export function getSiteUrl(): URL {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return new URL(url);
}
