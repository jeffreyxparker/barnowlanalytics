import { Check } from "lucide-react";
import { Section } from "@/components/section";
import { BookCallButton } from "@/components/book-call-button";

const DELIVERABLES: { lead: string; body: string }[] = [
  {
    lead: "Lift %",
    body: "on your primary KPI: exposed households vs. the matched control",
  },
  {
    lead: "iROAS or CPIA",
    body: ", matched to your KPI: incremental return on ad spend for sales KPIs, or cost per incremental acquisition for order, signup, or deposit KPIs",
  },
  {
    lead: "Up to four additional KPIs",
    body: "when the data is available, such as new buyers, reactivated customers, or high-value segments",
  },
  {
    lead: "Test cells",
    body: "defined around what you want to learn: individual creators, message, campaign, creator tier, and more",
  },
  {
    lead: "Statistical confidence on every number",
    body: ", so you know when a result is real and when it's noise",
  },
  {
    lead: "Recommendations",
    body: "on what to scale, what to cut, and how to set up the next test",
  },
];

const FIT = [
  "Measures in-store sales, online orders, signups and deposits, or any outcome tied to a resolvable identity",
  "Order before launch or after a campaign ends",
  "Results about two weeks after the measurement window closes",
];

export default function Results() {
  return (
    <Section
      id="results"
      tone="raised"
      eyebrow="What you get"
      title="Not a dashboard. A decision."
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            What&apos;s in every study
          </h3>
          <ul className="mt-6 divide-y divide-border/70 border-y border-border/70">
            {DELIVERABLES.map((d) => (
              <li key={d.lead} className="flex gap-4 py-5">
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-lg leading-relaxed text-foreground/80">
                  <strong className="font-semibold text-foreground">{d.lead}</strong>
                  {d.body.startsWith(",") ? d.body : ` ${d.body}`}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-labelledby="fit-title"
          className="self-start rounded-2xl border border-primary/40 bg-background p-7 lg:p-8"
        >
          <h3 id="fit-title" className="text-2xl font-bold text-foreground">
            Is your campaign a fit?
          </h3>
          <p className="mt-4 leading-relaxed text-foreground/80">
            Lift detection depends on two things: how many households your creators reached, and
            how often people buy your product. Higher reach or a faster-moving product makes a
            smaller lift visible. We run a free feasibility check before every study, so you never
            pay for a test that can&apos;t give an answer.
          </p>
          <ul className="mt-6 space-y-3">
            {FIT.map((f) => (
              <li key={f} className="flex gap-3 text-foreground/85">
                <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 border-t border-border/70 pt-6 text-foreground/80">
            Studies are priced as a fraction of the campaign spend they measure. Book a call for a
            quote.
          </p>
          <BookCallButton className="mt-6 w-full sm:w-auto" />
        </aside>
      </div>
    </Section>
  );
}
