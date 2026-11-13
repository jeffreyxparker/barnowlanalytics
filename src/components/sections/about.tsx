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
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
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
          <p>
            <strong className="font-semibold text-foreground">Why a barn owl:</strong> Barn owls
            hunt in complete darkness. They don&apos;t need to see their prey. Their ears are
            offset so precisely that they can pinpoint a mouse from sound alone. That&apos;s our
            job: finding the signal you can&apos;t see. Organic influencer leaves no clicks and no
            cookies, but the impact is still there for anyone who knows how to listen.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border/70 lg:max-w-none">
          <Image
            src={barnOwl}
            alt="A barn owl perched on a branch, looking toward the camera"
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 100vw"
            placeholder="blur"
            className="h-auto w-full"
          />
        </div>
      </div>
    </Section>
  );
}
