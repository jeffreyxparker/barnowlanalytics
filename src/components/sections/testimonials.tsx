import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Bookie Research helped us optimize our product pricing during a critical growth phase. They used sophisticated methods I'd seen major consulting firms charge 5x more for, and delivered clearer, more actionable insights.",
    author: "Steve Clark",
    title: "CEO, Odyssey Bars",
    avatar: "https://placehold.co/80x80.png",
    avatarHint: "man outdoors"
  },
  {
    quote: "We integrated Bookie's survey findings with our Shopify analytics and saw conversion rates increase within months. Their understanding of the DTC space made all the difference.",
    author: "Christian Thrapp",
    title: "Founder and CEO, Drift",
    avatar: "https://media.licdn.com/dms/image/v2/C5103AQFSPqPr7QP4Ww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516997696151?e=1755129600&v=beta&t=M5ADfBtD5tBRkaYHfXpQ112fnhCcovg9Dp9wUfKhSdQ",
    avatarHint: "man portrait"
  },
  {
    quote: "Bookie Research helped us understand exactly what our target audience wanted. Their insights shaped our entire product roadmap and marketing strategy.",
    author: "Garrett Dorman",
    title: "Investor Utah Boat Club",
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
            <Card key={index} className="bg-background border-border shadow-xl p-6 flex flex-col transform hover:scale-105 transition-transform duration-300">
              <CardContent className="flex-grow flex flex-col justify-between">
                <div> {/* Wrapper for quote icon and text */}
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-foreground/80 mb-6 text-left">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div className="pt-4 border-t border-border/20 mt-4"> {/* Author attribution section */}
                  <div className="flex items-center gap-3">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      width={50} 
                      height={50} 
                      className="rounded-full border-2 border-primary"
                      data-ai-hint={testimonial.avatarHint}
                    />
                    <div>
                      <p className="font-semibold text-primary text-left">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground text-left">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
