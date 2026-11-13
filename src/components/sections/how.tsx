import { ArrowDown, ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { LiftBarChart } from "@/components/charts/lift-bar-chart";

const STEPS = [
  {
    title: "Resolve follower identities.",
    body: "We resolve the identities of your creators' followers into privacy-safe, hashed household profiles. This becomes your exposed group. In parallel, we build a control group: demographically matched people who don't follow any creator in the campaign.",
  },
  {
    title: "Match to outcome data.",
    body: "Both groups are matched to real purchase data. Depending on your category, that means retail and loyalty-card data or your own first-party sales, signup, or deposit data.",
  },
  {
    title: "Compare exposed vs. matched control.",
    body: "We compare what followers bought during the campaign with what the matched control bought. The difference is your incremental lift. We scale it to your campaign's estimated household reach to get total incremental revenue and incremental ROAS (iROAS).",
  },
];

export default function How() {
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="A real counterfactual for organic content, in three steps."
    >
      <ol className="mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-3">
        {STEPS.map((step, i) => (
          <li key={step.title} className="contents">
            <div className="rounded-2xl border border-border/70 bg-card p-6 lg:p-7">
              <p
                aria-hidden="true"
                className="text-5xl font-bold leading-none tracking-tight text-primary"
              >
                {i + 1}
              </p>
              <h3 className="mt-5 text-xl font-semibold leading-snug text-foreground">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/80">{step.body}</p>
            </div>
            {i < STEPS.length - 1 && <Connector />}
          </li>
        ))}
      </ol>

      <div className="flex justify-center py-4 text-primary" aria-hidden="true">
        <ArrowDown className="h-7 w-7" />
      </div>

      <div className="mx-auto max-w-2xl rounded-2xl border border-border/70 bg-card p-5 pb-8 sm:p-8 sm:pb-10">
        <LiftBarChart />
      </div>
    </Section>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center text-primary">
      <ArrowDown className="h-6 w-6 lg:hidden" />
      <ArrowRight className="hidden h-6 w-6 lg:block" />
    </div>
  );
}
