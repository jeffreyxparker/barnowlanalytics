import Image from "next/image";
import { Section } from "@/components/section";
import barnOwl from "../../../public/images/barn-owl.jpg";

export default function About() {
  return (
    <Section
      id="about"
      tone="raised"
      eyebrow="About Barn Owl"
      title="Influencer measurement is all we do."
    >
      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            Barn Owl Analytics is a specialist measurement firm focused on one problem: proving
            the sales impact of organic influencer marketing. We don&apos;t sell media, manage
            creators, or take a cut of anyone&apos;s spend. Our only job is to tell you, as
            accurately as possible, what your influencer program is actually worth.
          </p>
          <p>
            Our team brings measurement and data science experience from Haus, Amazon, and
            Recast, and has built incrementality measurement programs for brands in DTC, CPG,
            food &amp; beverage, and sportsbooks.
          </p>

          <div className="!mt-10 rounded-2xl border border-border/70 bg-background p-7">
            <h3 className="text-xl font-semibold text-foreground">Why a barn owl</h3>
            <p className="mt-3 text-base leading-relaxed text-foreground/80 md:text-lg">
              Barn owls hunt in complete darkness. They don&apos;t need to see their prey. Their
              ears are offset so precisely that they can pinpoint a mouse from sound alone.
              That&apos;s our job: finding the signal you can&apos;t see. Organic influencer leaves
              no clicks and no cookies, but the impact is still there for anyone who knows how to
              listen.
            </p>
          </div>
        </div>

        <figure className="self-center">
          <div className="overflow-hidden rounded-2xl border border-border/70">
            <Image
              src={barnOwl}
              alt="A barn owl in flight against a dark background, wings angled downward"
              sizes="(min-width: 1024px) 560px, 100vw"
              placeholder="blur"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-xs text-muted-foreground">
            Photo:{" "}
            <a
              href="https://unsplash.com/photos/barn-owl-in-flight-83pR4InJ2ng"
              className="underline decoration-muted-foreground/50 underline-offset-2 hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phil Robson on Unsplash
            </a>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
