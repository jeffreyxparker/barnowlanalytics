
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Rocket } from "lucide-react";

const ShopifyIcon = () => (
    <svg
      role="img"
      aria-label="Shopify logo"
      className="h-10 w-10 text-primary mb-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19.531 8.356c-1.328-.888-3.04-.33-3.931.996a4.232 4.232 0 0 1-7.2-.002c-.888-1.328-2.596-1.884-3.931-.996C3.14 9.243 2.5 10.89 3.018 12.33c.518 1.442 1.944 2.456 3.568 2.456.91 0 1.764-.37 2.399-1.002.635.632 1.49 1.002 2.399 1.002s1.764-.37 2.4-1.002c.633.632 1.488 1.002 2.397 1.002 1.626 0 3.053-1.014 3.568-2.456.52-1.44-.122-3.087-1.436-3.974zM8.384 12.918c-.465 0-.842-.375-.842-.837s.377-.837.842-.837.842.375.842.837-.377.837-.842.837zm7.232 0c-.465 0-.842-.375-.842-.837s.377-.837.842-.837.842.375.842.837-.377.837-.842.837z" />
    </svg>
  );

const features = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary mb-4" />,
    title: "Actionable Results",
    description: "We don't just deliver data; we strategize with you, delivering actionable recommendations that drive real business results.",
  },
  {
    icon: <ShopifyIcon />,
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
