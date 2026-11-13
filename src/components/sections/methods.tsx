import { Section } from "@/components/section";
import { LiftChart } from "@/components/charts/lift-chart";

const POINTS = [
  {
    lead: "Best for",
    body: "launches, always-on programs, brands with clean daily or weekly sales data",
  },
  {
    lead: "What you get",
    body: "incremental lift with a forecast confidence band, plus iROAS",
  },
  {
    lead: "Honest limits",
    body: "other things happening at the same time, like a competitor's promo or a viral moment, can blur the read. We flag them, and we'll tell you when a follower-based study would give a cleaner answer.",
  },
];

export default function Methods() {
  return (
    <Section
      id="methods"
      eyebrow="Companion method: time-based counterfactual"
      title="When a follower test isn't possible, we forecast the counterfactual."
      intro={
        <p>
          Some campaigns can&apos;t use a follower-based control. The audience may be too small to
          resolve, every customer may be exposed at once, or the outcome may only exist as a
          total, like national sales. For these, we build a forecasting model on the
          pre-campaign period that accounts for trend, seasonality, pricing, promotions, and
          other marketing spend. We project it forward to estimate what sales would have been
          without the campaign, then measure the gap between that forecast and what actually
          happened.
        </p>
      }
    >
      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <dl className="space-y-7">
          {POINTS.map((p) => (
            <div key={p.lead} className="border-l-2 border-primary pl-5">
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {p.lead}
              </dt>
              <dd className="mt-2 text-lg leading-relaxed text-foreground/85">{p.body}</dd>
            </div>
          ))}
        </dl>

        <div className="rounded-2xl border border-border/70 bg-card p-5 pt-10 sm:p-8 sm:pt-12">
          <LiftChart variant="forecast" play="inView" />
        </div>
      </div>
    </Section>
  );
}
