import { Section } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QA: { q: string; a: React.ReactNode }[] = [
  {
    q: "Why is organic influencer so hard to measure?",
    a: "Organic content leaves no traceable digital trail. A follower watches a Reel, then buys at the grocery store three days later, or searches the brand on Amazon, or tells a friend. There's no click to track, no cookie to follow, and the purchase happens somewhere the platform can't see.",
  },
  {
    q: "Why can't the platforms measure it?",
    a: "Platform lift studies only work on paid media, because the platform controls who sees a paid ad and who doesn't. Nobody controls who sees an organic post. That's why organic has been the largest unmeasured line item in most marketing budgets.",
  },
  {
    q: "What does “incremental” mean?",
    a: (
      <>
        Incremental sales are the sales that happened because of the campaign. They&apos;re the
        difference between what exposed people bought and what they would have bought without
        it — this is called the causal lift.
      </>
    ),
  },
  {
    q: "Why does it matter now?",
    a: "Influencer budgets are growing faster than the evidence behind them. When budgets tighten, the channel that can't prove its return gets cut first. Incrementality turns “we think it's working” into a number you can defend to a CFO or CMO.",
  },
  {
    q: "What do you need from our creators?",
    a: "Nothing beyond what they already give your agency, usually post-level reach. We never need creator logins, links, or codes.",
  },
  {
    q: "Can you measure a campaign that already ran?",
    a: "Yes. Studies can be ordered before launch or after a campaign ends, as long as the purchase data covers the campaign window and a reliable pre-period.",
  },
];

export default function Why() {
  return (
    <Section
      id="why"
      eyebrow="Why it's hard"
      title="Influencer is a sales channel. It's measured like a popularity contest."
      intro={
        <p>
          Brands now put a serious share of their budget into creators. Most still report on it
          with likes, views, and earned media value. Those numbers say people saw the content.
          They don&apos;t say whether anyone bought something they wouldn&apos;t have bought
          anyway. That&apos;s the only question finance and leadership care about.
        </p>
      }
    >
      {/* Mobile: accordion */}
      <Accordion type="single" collapsible className="mt-12 md:hidden">
        {QA.map((item) => (
          <AccordionItem key={item.q} value={item.q} className="border-border">
            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-foreground/80">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Desktop: two-column cards */}
      <div className="mt-16 hidden gap-5 md:grid md:grid-cols-2">
        {QA.map((item) => (
          <article
            key={item.q}
            className="rounded-2xl border border-border/70 border-t-primary bg-card p-7 [border-top-width:3px] lg:p-8"
          >
            <h3 className="text-xl font-semibold leading-snug text-foreground">{item.q}</h3>
            <p className="mt-3 leading-relaxed text-foreground/80">{item.a}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
