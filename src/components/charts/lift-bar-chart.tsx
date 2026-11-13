"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Waterfall-style lift chart for "How it works".
 *
 * Plays once when scrolled into view:
 *  1. Matched control and Followers bars rise from the baseline.
 *  2. Dotted guide lines run from each bar's top toward the middle column.
 *  3. A floating "incremental lift" block grows both ways from its centre,
 *     spanning control-top to followers-top.
 *  4. The two outer bars fade back so the lift is the focus.
 *  5. Illustrative numbers appear: lift %, then incremental ROAS and CPA.
 *
 * The numbers are dummy values for illustration only (labelled as such).
 * Base styles are the final frame, so reduced motion shows the finished chart.
 */

const EXAMPLE = { lift: "+18%", iroas: "3.4×", icpa: "$27" };

const W = 640;
const H = 360;
const AXIS_X = 40;
const BASE_Y = 296;
const TOP_Y = 28;
const BAR_W = 128;

const CONTROL_X = 90;
const LIFT_X = 256;
const FOLLOWERS_X = 422;
const CONTROL_TOP = 184;
const FOLLOWERS_TOP = 84;

/** Step start times (ms) after the chart enters the viewport. */
const T = {
  control: 0,
  followers: 150,
  xLabels: 300,
  guides: 1100,
  lift: 1400,
  mute: 1750,
  liftValue: 2150,
  iroas: 2550,
  icpa: 2850,
};

const vars = (v: Record<string, string>) => v as CSSProperties;
const delay = (ms: number) => vars({ "--lbc-d": `${ms}ms` });

const px = (x: number) => `${((x / W) * 100).toFixed(2)}%`;
const py = (y: number) => `${((y / H) * 100).toFixed(2)}%`;

const columns = [
  { x: CONTROL_X, label: "Matched control", className: "text-control", at: T.xLabels },
  { x: LIFT_X, label: "Incremental lift", className: "text-primary", at: T.lift },
  { x: FOLLOWERS_X, label: "Followers", className: "text-primary", at: T.xLabels },
];

export function LiftBarChart({ className }: { className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
  }, []);

  return (
    <figure ref={ref} className={cn("lbc-animate", !inView && "lc-paused", className)}>
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_11rem] sm:gap-8">
        <div
          role="img"
          aria-label={`Illustrative waterfall chart. Matched control sales and followers' sales are shown as bars; a floating block between them spans the difference, labelled incremental lift ${EXAMPLE.lift}.`}
          className="relative w-full select-none"
          style={{ aspectRatio: `${W} / ${H}` }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="lbc-lift" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(45 95% 44%)" />
              </linearGradient>
            </defs>

            {/* Axes */}
            <path
              d={`M${AXIS_X},${TOP_Y} V${BASE_Y} H${W - 24}`}
              fill="none"
              stroke="hsl(var(--foreground) / 0.28)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Outer bars: rise, then fade back */}
            <rect
              x={CONTROL_X}
              y={CONTROL_TOP}
              width={BAR_W}
              height={BASE_Y - CONTROL_TOP}
              rx="6"
              fill="hsl(var(--control) / 0.3)"
              className="lbc-bar"
              style={vars({
                "--lbc-d": `${T.control}ms`,
                "--lbc-m": `${T.mute}ms`,
                "--lbc-from": "hsl(var(--control))",
              })}
            />
            <rect
              x={FOLLOWERS_X}
              y={FOLLOWERS_TOP}
              width={BAR_W}
              height={BASE_Y - FOLLOWERS_TOP}
              rx="6"
              fill="hsl(var(--primary) / 0.26)"
              className="lbc-bar"
              style={vars({
                "--lbc-d": `${T.followers}ms`,
                "--lbc-m": `${T.mute}ms`,
                "--lbc-from": "hsl(var(--primary))",
              })}
            />

            {/* Dotted guides from each bar top to the lift block */}
            <g className="lbc-fade" style={delay(T.guides)}>
              <line
                x1={CONTROL_X}
                x2={LIFT_X + BAR_W}
                y1={CONTROL_TOP}
                y2={CONTROL_TOP}
                stroke="hsl(var(--foreground) / 0.6)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <line
                x1={LIFT_X}
                x2={FOLLOWERS_X + BAR_W}
                y1={FOLLOWERS_TOP}
                y2={FOLLOWERS_TOP}
                stroke="hsl(var(--foreground) / 0.6)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
            </g>

            {/* Floating incremental-lift block, grows both ways from its centre */}
            <rect
              x={LIFT_X}
              y={FOLLOWERS_TOP}
              width={BAR_W}
              height={CONTROL_TOP - FOLLOWERS_TOP}
              rx="6"
              fill="url(#lbc-lift)"
              className="lbc-grow-center"
              style={delay(T.lift)}
            />
          </svg>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-[11px] sm:text-sm">
            <span
              className="absolute origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 font-medium uppercase tracking-[0.14em] text-muted-foreground"
              style={{ left: px(AXIS_X - 22), top: py((TOP_Y + BASE_Y) / 2) }}
            >
              Sales
            </span>

            {columns.map((c) => (
              <span
                key={c.label}
                className={cn("lbc-fade absolute text-center font-semibold leading-tight", c.className)}
                style={{ left: px(c.x), width: px(BAR_W), top: py(BASE_Y + 10), ...delay(c.at) }}
              >
                {c.label}
              </span>
            ))}

            <span
              className="lbc-fade absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-base font-bold tracking-tight text-primary-foreground sm:text-3xl"
              style={{
                left: px(LIFT_X + BAR_W / 2),
                top: py((FOLLOWERS_TOP + CONTROL_TOP) / 2),
                ...delay(T.liftValue),
              }}
            >
              {EXAMPLE.lift}
            </span>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-4">
          <Metric label="Incremental ROAS" value={EXAMPLE.iroas} delayMs={T.iroas} />
          <Metric label="Incremental CPA" value={EXAMPLE.icpa} delayMs={T.icpa} />
        </dl>
      </div>

      <figcaption className="lbc-fade mt-5 text-xs text-muted-foreground" style={delay(T.icpa)}>
        Illustrative example. Numbers are for demonstration only.
      </figcaption>
    </figure>
  );
}

function Metric({ label, value, delayMs }: { label: string; value: string; delayMs: number }) {
  return (
    <div
      className="lbc-rise rounded-xl border border-primary/30 bg-background/60 p-4"
      style={delay(delayMs)}
    >
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{label}</dt>
      <dd className="mt-1 text-3xl font-bold tracking-tight text-foreground">{value}</dd>
    </div>
  );
}
