import { OwlMark } from "@/components/brand/owl-mark";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <span className="flex items-center gap-2">
          <OwlMark className="h-5 w-5" />
          Barn Owl Analytics
        </span>
        <p>© 2026 Barn Owl Analytics · All rights reserved</p>
      </div>
    </footer>
  );
}
