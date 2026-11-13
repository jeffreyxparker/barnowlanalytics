import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/site";

export function BookCallButton({
  size = "lg",
  className,
  showArrow = true,
  label = "Book a call",
}: {
  size?: ButtonProps["size"];
  className?: string;
  showArrow?: boolean;
  label?: string;
}) {
  return (
    <Button asChild size={size} className={className}>
      <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer">
        {label}
        {showArrow && <ArrowRight aria-hidden="true" />}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </Button>
  );
}
