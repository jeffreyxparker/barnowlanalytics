import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Sparkles, Settings2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPhilosophySection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">Our Pricing Philosophy</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We believe growing DTC brands deserve enterprise-quality research at accessible prices. While each engagement is tailored to your specific needs, our quasi-templatized and streamlined process allows us to deliver exceptional value.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image 
              src="https://placehold.co/500x350.png" 
              alt="Business discussion about pricing" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-xl"
              data-ai-hint="meeting finance"
            />
          </div>
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center gap-4">
                <Sparkles className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-foreground font-headline">DTC-Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">Our templated approaches for DTC brands mean faster delivery and lower costs.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center gap-4">
                <Settings2 className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-foreground font-headline">Customized Packages and Scoping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">We'll work with you to define exactly what you need to know.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center gap-4">
                <DollarSign className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-foreground font-headline">Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">No hidden costs or surprise fees.</p>
              </CardContent>
            </Card>
            <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
              <Link href="#contact">
                Request Pricing Information <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
