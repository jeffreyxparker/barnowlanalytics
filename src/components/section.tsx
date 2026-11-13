import { cn } from "@/lib/utils";

/** Shared section shell: consistent rhythm, gutters and heading styles. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "base",
  className,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "base" | "raised";
  className?: string;
  children?: React.ReactNode;
}) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        tone === "raised" && "bg-card",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {eyebrow}
            </p>
          )}
          <h2
            id={headingId}
            className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {intro && (
            <div className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80 md:text-xl">
              {intro}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
