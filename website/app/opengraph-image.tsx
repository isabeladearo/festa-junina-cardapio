import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #f9edd5 0%, #f7e7c6 45%, #ead4a8 100%)",
          border: "12px solid #8b5e3c",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "28px solid transparent",
              borderRight: "28px solid transparent",
              borderTop: "48px solid #b03a2e",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "28px solid transparent",
              borderRight: "28px solid transparent",
              borderTop: "48px solid #f5c242",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "28px solid transparent",
              borderRight: "28px solid transparent",
              borderTop: "48px solid #3e6aa8",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "28px solid transparent",
              borderRight: "28px solid transparent",
              borderTop: "48px solid #4e8c4a",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#d96a1d",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Festa Junina da Oikos
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 44,
            color: "#8b5e3c",
          }}
        >
          Cardapio Oficial
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            color: "#8b5e3c",
            opacity: 0.9,
          }}
        >
          {siteConfig.eventDate} · {siteConfig.eventTime}
        </div>
      </div>
    ),
    { ...size },
  );
}
