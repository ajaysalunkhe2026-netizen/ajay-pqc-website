import { ImageResponse } from "next/og";

export const alt = "Ajay Salunkhe — Post-Quantum Cryptography and System Architecture";
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
          justifyContent: "space-between",
          padding: "72px",
          color: "#f8fafc",
          background:
            "linear-gradient(135deg, #071426 0%, #102b4c 58%, #075985 100%)",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 24, color: "#67e8f9", letterSpacing: 5 }}>
            INDEPENDENT ENGINEERING PORTFOLIO
          </div>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.08,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            Ajay Salunkhe
          </div>
          <div style={{ fontSize: 38, color: "#cbd5e1" }}>
            Post-Quantum Cryptography
          </div>
          <div style={{ fontSize: 28, color: "#bae6fd" }}>
            System design · PKI migration · Crypto agility
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(148, 163, 184, 0.35)",
            paddingTop: 24,
            fontSize: 24,
            color: "#cbd5e1",
          }}
        >
          <span>Evidence-led lab work and architecture notes</span>
          <span>ajaysalunkhe.com</span>
        </div>
      </div>
    ),
    size,
  );
}
