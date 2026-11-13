import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

type Mark = "yes" | "partial" | "no";

const MARK: Record<Mark, { symbol: string; label: string }> = {
  yes: { symbol: "✓", label: "Yes" },
  partial: { symbol: "◐", label: "Partially" },
  no: { symbol: "✗", label: "No" },
};

type Row = {
  method: string;
  measures: string;
  causal: Mark;
  offline: Mark;
  organic: Mark;
  catch: string;
  highlight?: boolean;
};

const ROWS: Row[] = [
  {
    method: "Vanity metrics (views, engagement)",
    measures: "Attention",
    causal: "no",
    offline: "no",
    organic: "yes",
    catch: "Reach isn't revenue.",
  },
  {
    method: "Promo codes",
    measures: "Code redemptions",
    causal: "no",
    offline: "partial",
    organic: "yes",
    catch: "Codes leak to coupon sites, and they miss everyone who bought without one.",
  },
  {
    method: "Affiliate links / click tracking",
    measures: "Last-click online conversions",
    causal: "no",
    offline: "no",
    organic: "yes",
    catch: "Nearly all influenced buyers never click. Retail purchases are invisible.",
  },
  {
    method: "Brand lift surveys",
    measures: "Stated awareness and intent",
    causal: "yes",
    offline: "no",
    organic: "partial",
    catch: "Measures what people say, not what they buy.",
  },
  {
    method: "Social listening",
    measures: "Mentions and sentiment",
    causal: "no",
    offline: "no",
    organic: "yes",
    catch: "Conversation volume isn't purchase behavior.",
  },
  {
    method: "Multi-touch attribution (MTA)",
    measures: "Credit across tracked digital touchpoints",
    causal: "no",
    offline: "no",
    organic: "no",
    catch: "Organic social views aren't touchpoints MTA can see.",
  },
  {
    method: "Platform conversion lift studies",
    measures: "Incremental conversions from ads",
    causal: "yes",
    offline: "partial",
    organic: "no",
    catch: "Paid media only. The platform has to control the holdout.",
  },
  {
    method: "Geo-holdout lift studies",
    measures: "Incremental conversions from ads",
    causal: "yes",
    offline: "yes",
    organic: "no",
    catch: "Paid media only. Organic content cannot be geo-targeted.",
  },
  {
    method: "Media mix modeling (MMM)",
    measures: "Channel-level contribution over time",
    causal: "partial",
    offline: "yes",
    organic: "partial",
    catch:
      "Organic influencer may be too small and too bursty to separate out. If it can, MMM measures only the full channel, not specific campaigns or influencers.",
  },
  {
    method: "Barn Owl follower-based incrementality",
    measures: "Incremental sales per household and iROAS",
    causal: "yes",
    offline: "yes",
    organic: "yes",
    catch: "Needs enough reach to detect lift. We check feasibility up front.",
    highlight: true,
  },
];

const COLS = [
  { key: "causal", label: "Causal (incremental)?" },
  { key: "offline", label: "Captures offline sales?" },
  { key: "organic", label: "Works for organic?" },
] as const;

function MarkCell({ mark, strong }: { mark: Mark; strong?: boolean }) {
  const m = MARK[mark];
  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none",
        mark === "yes" && (strong ? "bg-primary text-primary-foreground" : "text-foreground"),
        mark === "partial" && "text-foreground/70",
        mark === "no" && "text-foreground/45",
      )}
    >
      <span aria-hidden="true">{m.symbol}</span>
      <span className="sr-only">{m.label}</span>
    </span>
  );
}

export default function Compare() {
  return (
    <Section
      id="compare"
      tone="raised"
      eyebrow="Compare"
      title="Every other influencer metric answers a different question."
      intro={
        <p>
          Most influencer measurement tells you about attention, or about the small slice of
          buyers who leave a trail. Barn Owl measures incremental sales across everyone your
          creators reached.
        </p>
      }
    >
      {/* Desktop: semantic table */}
      <div className="mt-14 hidden lg:block">
        <table className="w-full border-separate border-spacing-0 text-left text-[0.95rem]">
          <caption className="sr-only">
            How influencer measurement methods compare: what each measures, whether it is
            causal, whether it captures offline sales, whether it works for organic content,
            and its main limitation.
          </caption>
          <thead>
            <tr className="text-xs uppercase tracking-[0.1em] text-primary">
              <th scope="col" className="w-[21%] border-b border-border pb-4 pr-4 font-semibold">
                Method
              </th>
              <th scope="col" className="w-[19%] border-b border-border pb-4 pr-4 font-semibold">
                What it actually measures
              </th>
              {COLS.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className="w-[9%] border-b border-border px-2 pb-4 text-center font-semibold"
                >
                  {c.label}
                </th>
              ))}
              <th scope="col" className="border-b border-border pb-4 pl-4 font-semibold">
                The catch
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => {
              const hl = r.highlight;
              const cell = cn(
                "py-4 align-middle",
                hl
                  ? "border-y-2 border-primary bg-primary/[0.09] first:rounded-l-xl first:border-l-2 last:rounded-r-xl last:border-r-2"
                  : "border-b border-border/70",
              );
              return (
                <tr key={r.method}>
                  <th
                    scope="row"
                    className={cn(
                      cell,
                      "pl-4 pr-4 font-semibold",
                      hl ? "text-primary" : "text-foreground",
                    )}
                  >
                    {r.method}
                  </th>
                  <td className={cn(cell, "pr-4 text-foreground/80", hl && "font-semibold text-foreground")}>
                    {r.measures}
                  </td>
                  {COLS.map((c) => (
                    <td key={c.key} className={cn(cell, "px-2 text-center")}>
                      <MarkCell mark={r[c.key]} strong={hl} />
                    </td>
                  ))}
                  <td className={cn(cell, "pl-4 pr-4 text-foreground/75", hl && "text-foreground")}>
                    {r.catch}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile / tablet: stacked cards */}
      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:hidden">
        {ROWS.map((r) => (
          <li
            key={r.method}
            className={cn(
              "rounded-2xl border p-5",
              r.highlight
                ? "border-2 border-primary bg-primary/[0.09] md:col-span-2"
                : "border-border/70 bg-background/40",
            )}
          >
            <h3 className={cn("text-lg font-semibold", r.highlight ? "text-primary" : "text-foreground")}>
              {r.method}
            </h3>
            <p className="mt-1 text-sm text-foreground/75">
              <span className={r.highlight ? "text-foreground/85" : "text-muted-foreground"}>
                Measures:{" "}
              </span>
              {r.measures}
            </p>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
              {COLS.map((c) => (
                <div key={c.key} className="rounded-lg bg-background/50 px-1 py-2">
                  <dt className="text-[11px] font-semibold leading-tight text-primary">{c.label}</dt>
                  <dd className="mt-1">
                    <MarkCell mark={r[c.key]} strong={r.highlight} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              <span className="font-semibold text-foreground">The catch: </span>
              {r.catch}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-muted-foreground">✓ = yes, ◐ = partially, ✗ = no</p>

      <p className="mt-12 max-w-3xl text-balance text-2xl font-semibold leading-snug text-foreground md:text-3xl">
        It&apos;s the one method in this table that is{" "}
        <span className="text-primary">causal</span>, sees{" "}
        <span className="text-primary">offline sales</span>, and works for{" "}
        <span className="text-primary">organic content</span>.
      </p>
    </Section>
  );
}
