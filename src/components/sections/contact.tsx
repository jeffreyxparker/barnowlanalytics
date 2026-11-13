import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";
import { OwlMark } from "@/components/brand/owl-mark";
import { CONTACT_EMAIL } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card px-6 py-14 text-center sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <OwlMark className="relative mx-auto h-10 w-10" />
          <h2
            id="contact-title"
            className="relative mx-auto mt-6 max-w-3xl text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Find out what your influencers are really worth.
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80 md:text-xl">
            Tell us about your next campaign, or one that just ended. We&apos;ll run a free
            feasibility check and show you what a study would measure.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookCallButton />
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
