import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Customer GPS provided invaluable insights that helped us refine our target audience and significantly boost our conversion rates. Their DTC expertise is unmatched.",
    author: "Sarah L., Founder of Aura Skincare",
    avatar: "https://placehold.co/80x80.png",
    avatarHint: "woman portrait"
  },
  {
    quote: "The market analysis from Customer GPS was a game-changer for our new product launch. We went to market with confidence and saw immediate results.",
    author: "Mike B., CEO of Peak Performance Gear",
    avatar: "https://placehold.co/80x80.png",
    avatarHint: "man portrait"
  },
  {
    quote: "We were struggling to understand customer churn. Customer GPS's research helped us identify key pain points and implement effective retention strategies.",
    author: "Jessica T., Marketing Director at Home Comforts Co.",
    avatar: "https://placehold.co/80x80.png",
    avatarHint: "person portrait"
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
