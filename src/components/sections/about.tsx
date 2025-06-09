import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto md:max-w-none md:mx-0">
            <Image 
              src="https://placehold.co/500x500.png" 
              alt="Customer GPS Team" 
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
              data-ai-hint="team working"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-headline">About Customer GPS</h2>
            <p className="text-lg text-foreground/80 mb-4">
              At Customer GPS, we are passionate about helping Direct-to-Consumer brands thrive. Founded by research veterans with deep DTC experience, we saw a need for specialized insights that go beyond generic market data.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Our mission is to empower DTC brands with the clarity and direction needed to make smarter decisions, connect authentically with customers, and achieve sustainable growth. We combine rigorous research methodologies with a practical, results-oriented approach.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">
                Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
