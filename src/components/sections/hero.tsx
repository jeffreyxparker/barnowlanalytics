import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";
import { LiftChart } from "@/components/charts/lift-chart";

/** Headline timing: line 1 2.6s gentle fade/rise (ends 2.8s); line 2 wipe starts 2.7s as line 1
 *  settles, runs 1.3s. Chart starts as it lands. */
const CHART_START_MS = 4000;

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Soft gold glow, very low contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 420px at 85% 10%, hsl(var(--primary) / 0.07), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 md:pb-28 md:pt-20 lg:px-8 lg:pt-24">
        <h1
          id="hero-title"
          className="max-w-5xl text-balance text-[2.4rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="hero-line-1 font-semibold text-white">
            Organic influencer content drives sales.
          </span>{" "}
          <span className="relative mt-1 inline-block">
            <span className="hero-line-2 inline-block text-primary">Now you can prove it.</span>
            <span aria-hidden="true" className="hero-wipe-bar" />
          </span>
        </h1>

        <div className="mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <p className="text-pretty text-lg leading-relaxed text-foreground/80 md:text-xl">
              Barn Owl measures the true sales lift of organic influencer campaigns, in-store and
              online. We compare the people who follow your creators against matched people who
              don&apos;t.{" "}
              <strong className="font-semibold text-foreground">
                No promo codes, no pixels, no extra work for your creators.
              </strong>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookCallButton />
              <Button asChild size="lg" variant="outline">
                <a href="#how">See how it works</a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/60 p-4 pt-10 sm:p-6 sm:pt-12">
            <LiftChart
              variant="lift"
              play="load"
              delayMs={CHART_START_MS}
              markerLabel="Influencers go live"
              xLabel="Date"
              lineLabels
            />
          </div>
        </div>
      </div>
    </section>
  );
}
