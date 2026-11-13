import { ImageResponse } from "next/og";
import { VIEW_W, VIEW_H, PLOT, MARKER_X, liftChart, yAt } from "@/lib/chart-geometry";

/** OG image: the final frame of the hero lift chart + the owl mark. */

export const alt =
  "Barn Owl Analytics: followers' sales rise above a matched control after influencers go live, showing incremental lift.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#333333";
const CARD = "#3b3b3b";
const GOLD = "#FFC107";
const CONTROL = "#8F98D6";
const FG = "#e6e6e6";
const MUTED = "#adadad";

const chartSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEW_W} ${VIEW_H}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${GOLD}" stop-opacity="0.42"/><stop offset="1" stop-color="${GOLD}" stop-opacity="0.08"/>
  </linearGradient></defs>
  <path d="M${PLOT.left},${PLOT.top - 8} V${PLOT.bottom} H${PLOT.right + 8}" fill="none" stroke="${FG}" stroke-opacity="0.28" stroke-width="1.5" stroke-linecap="round"/>
  <path d="${liftChart.gap}" fill="url(#g)"/>
  <line x1="${MARKER_X}" x2="${MARKER_X}" y1="${PLOT.top - 4}" y2="${PLOT.bottom}" stroke="${FG}" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 6"/>
  <path d="${liftChart.control}" fill="none" stroke="${CONTROL}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="${liftChart.followers}" fill="none" stroke="${GOLD}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const owlSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="${GOLD}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.2" stroke="none" fill="${GOLD}"/><circle cx="15" cy="10" r="1.2" stroke="none" fill="${GOLD}"/><path d="M11 14 L12 16 L13 14"/><path d="M8 6 L6 4"/><path d="M16 6 L18 4"/></svg>`;

const dataUri = (svg: string) => `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

export default function OpengraphImage() {
  const chartW = 820;
  const chartH = (chartW * VIEW_H) / VIEW_W; // 461
  const sx = (x: number) => (x / VIEW_W) * chartW;
  const sy = (y: number) => (y / VIEW_H) * chartH;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
          padding: "36px 56px",
          color: FG,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={dataUri(owlSvg)} width={52} height={52} alt="" />
            <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
              Barn Owl<span style={{ color: MUTED, fontWeight: 400, marginLeft: 10 }}>Analytics</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 22,
            flexGrow: 1,
            background: CARD,
            borderRadius: 24,
            paddingTop: 20,
          }}
        >
          <div style={{ position: "relative", display: "flex", width: chartW, height: chartH }}>
            <img src={dataUri(chartSvg)} width={chartW} height={chartH} alt="" />
            <div
              style={{
                position: "absolute",
                left: sx(MARKER_X) + 12,
                top: sy(PLOT.top - 30),
                fontSize: 22,
                color: FG,
              }}
            >
              Influencers go live
            </div>
            <div
              style={{
                position: "absolute",
                left: sx(liftChart.label.x) - 96,
                top: sy(liftChart.label.y) - 20,
                fontSize: 24,
                fontWeight: 700,
                color: GOLD,
                background: "rgba(51,51,51,0.75)",
                borderRadius: 999,
                padding: "4px 14px",
              }}
            >
              Incremental lift
            </div>
            <div
              style={{
                position: "absolute",
                right: chartW - sx(PLOT.right),
                bottom: chartH - sy(yAt(liftChart.followerPts, PLOT.right) - 9),
                fontSize: 22,
                fontWeight: 700,
                color: GOLD,
              }}
            >
              Followers
            </div>
            <div
              style={{
                position: "absolute",
                right: chartW - sx(PLOT.right),
                top: sy(yAt(liftChart.controlPts, PLOT.right) + 9),
                fontSize: 22,
                fontWeight: 700,
                color: CONTROL,
              }}
            >
              Matched control
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
