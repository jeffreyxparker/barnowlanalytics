/**
 * Deterministic geometry for the illustrative lift charts (hero, "How it works",
 * and the forecast chart in "Methods"). These are diagrams, not data: the shapes
 * only illustrate "lines move together, then separate after launch".
 *
 * Shared by the React chart component and the generated OG image so every
 * rendering is identical.
 */

export const VIEW_W = 640;
export const VIEW_H = 360;

export const PLOT = { left: 40, right: 616, top: 36, bottom: 320 } as const;

const N = 41; // sample points; index 16 lands exactly on 40% of the width
export const MARKER_INDEX = 16;

type Pt = [number, number];

const xs = Array.from(
  { length: N },
  (_, i) => PLOT.left + (i * (PLOT.right - PLOT.left)) / (N - 1),
);

export const MARKER_X = xs[MARKER_INDEX];

/** Small, natural-looking wiggle (sum of incommensurate sines). */
function wiggle(i: number, amp = 1) {
  return (
    amp *
    (4.5 * Math.sin(i * 0.8) + 1.8 * Math.sin(i * 1.9 + 1) + 3 * Math.sin(i * 0.33 + 2))
  );
}

/** Progress (0..1) from the campaign launch to the right edge. */
function postT(i: number) {
  return Math.max(0, (i - MARKER_INDEX) / (N - 1 - MARKER_INDEX));
}

/** Smooth rise that starts gently at launch and keeps building. */
function rise(t: number, height: number) {
  const eased = 1 - Math.exp(-3.2 * t);
  const soft = t < 0.12 ? (t / 0.12) ** 2 * (3 - 2 * (t / 0.12)) : 1; // smoothstep in
  return height * eased * soft;
}

/** Catmull-Rom → cubic Bézier path through the points. */
export function smoothPath(points: Pt[]): string {
  if (points.length < 2) return "";
  const f = (n: number) => n.toFixed(1);
  let d = `M${f(points[0][0])},${f(points[0][1])}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p2[0])},${f(p2[1])}`;
  }
  return d;
}

/** Closed area between an upper series and a lower series (same x values). */
function areaBetween(upper: Pt[], lower: Pt[]): string {
  const top = smoothPath(upper);
  const back = smoothPath([...lower].reverse()).replace(/^M/, "L");
  return `${top} ${back} Z`;
}

/* ------------------------------------------------------------------ */
/* Lift chart: Followers vs. matched control                           */
/* ------------------------------------------------------------------ */

const CONTROL_BASE = 236;

const controlPts: Pt[] = xs.map((x, i) => [x, CONTROL_BASE + wiggle(i, 0.9)]);
const followerPts: Pt[] = xs.map((x, i) => [
  x,
  CONTROL_BASE + wiggle(i, 0.9) + 2.2 * Math.sin(i * 1.7 + 0.5) - 2 - rise(postT(i), 112),
]);

const liftLabelIndex = 33;

export const liftChart = {
  followers: smoothPath(followerPts),
  control: smoothPath(controlPts),
  gap: areaBetween(followerPts.slice(MARKER_INDEX), controlPts.slice(MARKER_INDEX)),
  /** Centre of the gap where the "Incremental lift" label sits. */
  label: {
    x: xs[liftLabelIndex],
    y: (followerPts[liftLabelIndex][1] + controlPts[liftLabelIndex][1]) / 2,
  },
};

/* ------------------------------------------------------------------ */
/* Forecast chart: actual sales vs. forecast counterfactual            */
/* ------------------------------------------------------------------ */

const trend = (i: number) => 258 - i * 1.15; // gentle underlying growth

const actualPts: Pt[] = xs.map((x, i) => [x, trend(i) + wiggle(i, 0.85) - rise(postT(i), 96)]);
const forecastPts: Pt[] = xs
  .map((x, i): Pt => [x, trend(i) + wiggle(i, 0.25)])
  .slice(MARKER_INDEX);
// Ensure the forecast starts exactly where actual sales are at launch.
forecastPts[0] = [actualPts[MARKER_INDEX][0], actualPts[MARKER_INDEX][1]];

const bandHalf = (k: number) => 4 + 30 * (k / (forecastPts.length - 1));
const bandUpper: Pt[] = forecastPts.map(([x, y], k) => [x, y - bandHalf(k)]);
const bandLower: Pt[] = forecastPts.map(([x, y], k) => [x, y + bandHalf(k)]);

const fcLabelIndex = 33 - MARKER_INDEX;

export const forecastChart = {
  actual: smoothPath(actualPts),
  forecast: smoothPath(forecastPts),
  band: areaBetween(bandUpper, bandLower),
  gap: areaBetween(actualPts.slice(MARKER_INDEX), forecastPts),
  label: {
    x: forecastPts[fcLabelIndex][0],
    y: (actualPts[MARKER_INDEX + fcLabelIndex][1] + forecastPts[fcLabelIndex][1]) / 2 - 6,
  },
};

/** Convert viewBox coordinates to CSS percentages for HTML overlays. */
export const pctX = (x: number) => `${((x / VIEW_W) * 100).toFixed(2)}%`;
export const pctY = (y: number) => `${((y / VIEW_H) * 100).toFixed(2)}%`;
