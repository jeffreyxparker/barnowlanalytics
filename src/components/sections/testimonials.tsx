import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Bookie Research helped us optimize our product pricing during a critical growth phase. They used sophisticated methods I'd seen major consulting firms charge 5x more for, and delivered clearer, more actionable insights.",
    author: "Steve Clark, CEO, Odyssey Bars",
    avatar: "https://placehold.co/80x80.png",
    avatarHint: "man portrait"
  },
  {
    quote: "We integrated Bookie's survey findings with our Shopify analytics and saw conversion rates increase within months. Their understanding of the DTC space made all the difference.",
    author: "Christian Thrapp, Founder and CEO, Drift",
    avatar: "https://placehold.co/80x80.png",
    avatarHint: "man portrait"
  },
  {
    quote: "Bookie Research helped us understand exactly what our target audience wanted. Their insights shaped our entire product roadmap and marketing strategy.",
    author: "Garrett Dorman, Investor Utah Boat Club",
    avatar: "https://placehold.co/80x80.png",
    avatarHint: "man portrait"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <Quote className="h-10 w-10 text-primary mb-4 transform rotate-180" />
              <CardContent className="flex-grow">
                <p className="text-foreground/80 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  width={80} 
                  height={80} 
                  className="rounded-full mx-auto mb-3 border-2 border-primary"
                  data-ai-hint={testimonial.avatarHint}
                />
                <p className="font-semibold text-primary">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
