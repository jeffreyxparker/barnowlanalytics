import { cn } from "@/lib/utils";

/** The Barn Owl mark carried over from the previous site. */
export function OwlMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-7 w-7 text-primary", className)}
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="1.2" stroke="none" fill="currentColor" />
      <circle cx="15" cy="10" r="1.2" stroke="none" fill="currentColor" />
      <path d="M11 14 L12 16 L13 14" />
      <path d="M8 6 L6 4" />
      <path d="M16 6 L18 4" />
    </svg>
  );
}
