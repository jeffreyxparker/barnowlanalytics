import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary mb-4" />,
    title: "Actionable Results",
    description: "We don't just deliver data; we strategize with you, delivering actionable recommendations that drive real business results.",
  },
  {
    icon: <Image src="/images/shopify_glyph.png" alt="Shopify logo" width={40} height={40} className="mb-4" />,
    title: "Holistic Data-Driven Approach",
    description: "We integrate your Shopify analytics with survey data for deeper insights.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary mb-4" />,
    title: "Fast & Affordable",
    description: "Get enterprise-quality insights at startup-friendly prices in days, not weeks.",
  },
  {
    icon: <Target className="h-10 w-10 text-primary mb-4" />,
    title: "DTC Specialization",
    description: "Our time-refined methods are optimized for DTC brands seeking to grow customer bases.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">Why DTC Brands Choose Us</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover the unique advantages and expertise we bring to your direct-to-consumer brand.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                {feature.icon}
                <CardTitle className="text-2xl text-foreground font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
