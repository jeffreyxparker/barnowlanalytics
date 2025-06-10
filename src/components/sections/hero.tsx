import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-background to-card">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight font-headline">
              Turn Customer Insights Into Growth
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Barn Owl Analytics helps growing DTC brands unlock customer insights that drive measurable growth. Our syndicated survey methodologies are designed specifically for direct-to-consumer businesses at critical growth stages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                <Link href="#solutions">
                  Our Solutions
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group">
             <Image 
              src="/images/upward-plot.png" 
              alt="Upward trending plot indicating growth for Barn Owl Analytics" 
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              data-ai-hint="data visualization"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
