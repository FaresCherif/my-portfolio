import { ImageResponse } from "next/og";
import { getContent, type Lang } from "@/data";

export const OG_SIZE = { width: 1200, height: 630 };

const TAGS = ["PHP", "JavaScript", "TypeScript", "SQL", "Drupal"];

// Image de partage (LinkedIn, Slack…) générée au build, aux couleurs du site.
// Police : Geist, fournie par défaut par next/og.
export function renderOgImage(lang: Lang) {
  const { meta } = getContent(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(59,130,246,0.28), transparent 45%), radial-gradient(circle at 10% 90%, rgba(59,130,246,0.12), transparent 40%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, color: "#9ca3af" }}>
          Fares<span style={{ color: "#3b82f6" }}>.</span>
          <span style={{ marginLeft: 24, fontSize: 24, color: "#6b7280" }}>softechsolutions.fr</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, letterSpacing: -3, lineHeight: 1 }}>Fares Cherif</div>
          <div style={{ display: "flex", width: 120, height: 6, backgroundColor: "#3b82f6", margin: "32px 0", borderRadius: 3 }} />
          <div style={{ fontSize: 46, color: "#d1d5db" }}>{meta.jobTitle}</div>
          <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
            {TAGS.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  fontSize: 24,
                  color: "#93c5fd",
                  border: "1.5px solid rgba(59,130,246,0.5)",
                  backgroundColor: "rgba(59,130,246,0.1)",
                  borderRadius: 10,
                  padding: "8px 18px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#9ca3af" }}>{meta.ogTagline}</div>
      </div>
    ),
    OG_SIZE,
  );
}
