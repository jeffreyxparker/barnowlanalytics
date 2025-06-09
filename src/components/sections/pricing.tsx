import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Sparkles, Handshake } from "lucide-react";
import Image from "next/image";

export default function PricingPhilosophySection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">Our Pricing Philosophy</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Transparent, flexible, and value-driven. We believe in clear pricing that aligns with your brand's specific research needs and budget.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image 
              src="https://placehold.co/500x350.png" 
              alt="Business discussion about pricing" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-xl mx-auto"
              data-ai-hint="meeting finance"
            />
          </div>
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center gap-4">
                <DollarSign className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-foreground font-headline">Transparent Quotes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">No hidden fees or surprises. We provide detailed proposals outlining all costs upfront, ensuring you know exactly what you're investing in.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center gap-4">
                <Sparkles className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-foreground font-headline">Customized Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">One size doesn't fit all. We work with you to create research packages tailored to your specific objectives and budget constraints.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center gap-4">
                <Handshake className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-foreground font-headline">Value Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">Our goal is to deliver maximum ROI. We focus on providing high-impact insights that justify your investment and fuel your growth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
