"use client";

import { useCallback, useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import {
  VIEW_W,
  VIEW_H,
  PLOT,
  MARKER_X,
  liftChart,
  forecastChart,
  pctX,
  pctY,
} from "@/lib/chart-geometry";

/**
 * Illustrative lift chart, built as layered inline SVG with CSS animation.
 *
 *  variant "lift"      Followers vs. matched control (hero + "How it works")
 *  variant "forecast"  Actual sales vs. forecast counterfactual ("Methods")
 *
 *  play "load"    animates once after `delayMs`, holds the final frame, replays on hover
 *  play "inView"  animates once when scrolled into view
 *  play "none"    static final frame
 *
 * The base styles are the final frame; the keyframes only describe the start
 * state. With prefers-reduced-motion (or no animation) the final frame shows.
 */

type Variant = "lift" | "forecast";
type Play = "load" | "inView" | "none";

const REVEAL_MS = 3000;
// The line layer is revealed with clip-path: inset() on the SVG box, so the
// marker drops exactly when the reveal edge reaches it.
const plotStartPct = PLOT.left / VIEW_W;
const markerPct = MARKER_X / VIEW_W;
const MARKER_AT_MS = Math.round(((markerPct - plotStartPct) / (1 - plotStartPct)) * REVEAL_MS);
const GAP_AT_MS = REVEAL_MS;
const LABEL_AT_MS = REVEAL_MS + 600;
export const LIFT_CHART_TOTAL_MS = LABEL_AT_MS + 500;

const COPY = {
  lift: {
    aria:
      "Illustrative chart. Sales for followers and for a matched control group move together until the campaign goes live, then the followers line rises while the control stays flat. The gap between them is the incremental lift.",
    legend: [
      { label: "Followers", swatch: "line-primary" },
      { label: "Matched control", swatch: "line-control" },
    ],
  },
  forecast: {
    aria:
      "Illustrative chart. A forecast of sales without the campaign starts when the campaign goes live, with a confidence band around it. Actual sales rise above the forecast; the gap between them is the incremental lift.",
    legend: [
      { label: "Actual sales", swatch: "line-primary" },
      { label: "Forecast without campaign", swatch: "dash-control" },
      { label: "Confidence band", swatch: "band-control" },
    ],
  },
} as const;

export function LiftChart({
  variant = "lift",
  play = "none",
  delayMs = 0,
  className,
  showLegend = true,
}: {
  variant?: Variant;
  play?: Play;
  delayMs?: number;
  className?: string;
  showLegend?: boolean;
}) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const wrapRef = useRef<HTMLDivElement>(null);

  const [run, setRun] = useState(0); // remount key for hover replay
  const [inView, setInView] = useState(play !== "inView");
  const [done, setDone] = useState(play === "none");
  const startDelay = run === 0 ? delayMs : 0;

  // Start "inView" charts when they scroll into view.
  useEffect(() => {
    if (play !== "inView" || !wrapRef.current) return;
    const el = wrapRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [play]);

  // Mark the sequence as finished so hover can replay it.
  useEffect(() => {
    if (play === "none" || !inView) return;
    setDone(false);
    const t = window.setTimeout(() => setDone(true), startDelay + LIFT_CHART_TOTAL_MS);
    return () => window.clearTimeout(t);
  }, [play, inView, run, startDelay]);

  const replay = useCallback(() => {
    if (play !== "load" || !done) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setRun((r) => r + 1);
  }, [play, done]);

  const animated = play !== "none";
  const style = {
    "--lc-delay": `${startDelay}ms`,
    "--lc-reveal": `${REVEAL_MS}ms`,
    "--lc-marker": `${MARKER_AT_MS}ms`,
    "--lc-gap": `${GAP_AT_MS}ms`,
    "--lc-label": `${LABEL_AT_MS}ms`,
  } as CSSProperties;

  const geo = variant === "lift" ? liftChart : forecastChart;
  const copy = COPY[variant];

  return (
    <figure className={cn("w-full", className)}>
      <div
        ref={wrapRef}
        role="img"
        aria-label={copy.aria}
        onMouseEnter={replay}
        style={style}
        className={cn(
          "relative w-full select-none",
          animated && "lc-animate",
          animated && !inView && "lc-paused",
        )}
      >
        <div key={run} className="relative w-full" style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}>
          {/* Layer A: axes, lift fill, launch marker */}
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id={`${id}-gap`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.42" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* Axes: Sales (Y), time (X, unlabeled). No gridlines. */}
            <path
              d={`M${PLOT.left},${PLOT.top - 8} V${PLOT.bottom} H${PLOT.right + 8}`}
              fill="none"
              stroke="hsl(var(--foreground) / 0.28)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path d={geo.gap} fill={`url(#${id}-gap)`} className="lc-gap" />

            <g className="lc-marker">
              <line
                x1={MARKER_X}
                x2={MARKER_X}
                y1={PLOT.top - 4}
                y2={PLOT.bottom}
                stroke="hsl(var(--foreground) / 0.55)"
                strokeWidth="1.5"
                strokeDasharray="5 6"
              />
            </g>
          </svg>

          {/* Layer B: the lines, revealed left to right */}
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="lc-lines absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
            focusable="false"
          >
            {variant === "lift" ? (
              <>
                <path
                  d={liftChart.control}
                  fill="none"
                  stroke="hsl(var(--control))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d={liftChart.followers}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ) : (
              <>
                <path d={forecastChart.band} fill="hsl(var(--control) / 0.16)" />
                <path
                  d={forecastChart.forecast}
                  fill="none"
                  stroke="hsl(var(--control))"
                  strokeWidth="2.5"
                  strokeDasharray="8 7"
                  strokeLinecap="round"
                />
                <path
                  d={forecastChart.actual}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>

          {/* HTML labels stay legible at phone widths */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-[11px] sm:text-sm">
            <span
              className="absolute origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 font-medium uppercase tracking-[0.14em] text-muted-foreground"
              style={{ left: pctX(PLOT.left - 22), top: pctY((PLOT.top + PLOT.bottom) / 2) }}
            >
              Sales
            </span>
            <span
              className="lc-marker absolute whitespace-nowrap font-medium text-foreground/80"
              style={{ left: `calc(${pctX(MARKER_X)} + 8px)`, top: pctY(PLOT.top - 30) }}
            >
              Campaign goes live
            </span>
            <span
              className="lc-label absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-background/70 px-2 py-0.5 font-semibold text-primary backdrop-blur-[2px]"
              style={{ left: pctX(geo.label.x), top: pctY(geo.label.y) }}
            >
              Incremental lift
            </span>
          </div>
        </div>
      </div>

      {showLegend && (
        <figcaption className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {copy.legend.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2">
              <Swatch kind={item.swatch} />
              {item.label}
            </span>
          ))}
        </figcaption>
      )}
    </figure>
  );
}

function Swatch({ kind }: { kind: string }) {
  if (kind === "band-control")
    return <span aria-hidden="true" className="h-3 w-5 rounded-sm bg-control/25" />;
  if (kind === "dash-control")
    return (
      <span
        aria-hidden="true"
        className="h-0 w-5 border-t-[2.5px] border-dashed border-control"
      />
    );
  return (
    <span
      aria-hidden="true"
      className={cn(
        "h-[3px] w-5 rounded-full",
        kind === "line-primary" ? "bg-primary" : "bg-control",
      )}
    />
  );
}
