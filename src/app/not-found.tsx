import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";
import { OwlMark } from "@/components/brand/owl-mark";

export const metadata: Metadata = {
  title: "Page not found | Barn Owl Analytics",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center sm:px-6 md:py-36"
    >
      <OwlMark className="h-12 w-12" />
      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-primary">404</p>
      <h1
        id="not-found-title"
        className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
      >
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/80">
        Even a barn owl couldn&apos;t find it. Head back to the homepage, or book a call if
        you&apos;re here to talk about measuring your influencer program.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" variant="outline">
          <Link href="/">
            <ArrowLeft aria-hidden="true" />
            Back to homepage
          </Link>
        </Button>
        <BookCallButton />
      </div>
    </section>
  );
}
