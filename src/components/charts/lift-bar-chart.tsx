/**
 * Static, illustrative bar chart for "How it works": sales for the matched
 * control vs. followers, with the difference called out as incremental lift.
 * No numbers: it's a diagram of the comparison, not client data.
 */

const W = 640;
const H = 360;
const AXIS_X = 40;
const BASE_Y = 292; // bar baseline
const TOP_Y = 28;
const BAR_W = 132;

const CONTROL_X = 110;
const FOLLOWERS_X = 300;
const CONTROL_TOP = 172; // shared baseline-sales level
const LIFT_TOP = 76; // followers' bar top

const BRACKET_X = FOLLOWERS_X + BAR_W + 16;

const px = (x: number) => `${((x / W) * 100).toFixed(2)}%`;
const py = (y: number) => `${((y / H) * 100).toFixed(2)}%`;

export function LiftBarChart({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <div
        role="img"
        aria-label="Illustrative bar chart. The matched control group's sales form a baseline. Followers' sales reach the same baseline plus an additional segment on top; that additional segment is the incremental lift."
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
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.75" />
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

          {/* Matched control */}
          <rect
            x={CONTROL_X}
            y={CONTROL_TOP}
            width={BAR_W}
            height={BASE_Y - CONTROL_TOP}
            rx="6"
            fill="hsl(var(--control))"
          />

          {/* Followers: baseline portion + incremental lift on top */}
          <rect
            x={FOLLOWERS_X}
            y={CONTROL_TOP}
            width={BAR_W}
            height={BASE_Y - CONTROL_TOP}
            fill="hsl(var(--primary) / 0.32)"
          />
          <path
            d={`M${FOLLOWERS_X},${CONTROL_TOP} V${LIFT_TOP + 6} Q${FOLLOWERS_X},${LIFT_TOP} ${FOLLOWERS_X + 6},${LIFT_TOP} H${FOLLOWERS_X + BAR_W - 6} Q${FOLLOWERS_X + BAR_W},${LIFT_TOP} ${FOLLOWERS_X + BAR_W},${LIFT_TOP + 6} V${CONTROL_TOP} Z`}
            fill="url(#lbc-lift)"
          />

          {/* Baseline carried across from the control bar */}
          <line
            x1={CONTROL_X}
            x2={FOLLOWERS_X + BAR_W}
            y1={CONTROL_TOP}
            y2={CONTROL_TOP}
            stroke="hsl(var(--foreground) / 0.6)"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />

          {/* Bracket marking the lift */}
          <path
            d={`M${BRACKET_X - 6},${LIFT_TOP} H${BRACKET_X} V${CONTROL_TOP} H${BRACKET_X - 6}`}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-[11px] sm:text-sm">
          <span
            className="absolute origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 font-medium uppercase tracking-[0.14em] text-muted-foreground"
            style={{ left: px(AXIS_X - 22), top: py((TOP_Y + BASE_Y) / 2) }}
          >
            Sales
          </span>
          <span
            className="absolute -translate-x-1/2 whitespace-nowrap font-semibold text-control"
            style={{ left: px(CONTROL_X + BAR_W / 2), top: py(BASE_Y + 12) }}
          >
            Matched control
          </span>
          <span
            className="absolute -translate-x-1/2 whitespace-nowrap font-semibold text-primary"
            style={{ left: px(FOLLOWERS_X + BAR_W / 2), top: py(BASE_Y + 12) }}
          >
            Followers
          </span>
          <span
            className="absolute -translate-y-1/2 font-semibold leading-tight text-primary"
            style={{
              left: `calc(${px(BRACKET_X)} + 10px)`,
              top: py((LIFT_TOP + CONTROL_TOP) / 2),
              maxWidth: "28%",
            }}
          >
            Incremental lift
          </span>
        </div>
      </div>
    </figure>
  );
}
