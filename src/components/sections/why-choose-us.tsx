import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Rocket } from "lucide-react";

const ShopifyIcon = () => (
    <svg
      role="img"
      aria-label="Shopify logo"
      className="h-10 w-10 text-primary mb-4"
      fill="currentColor"
      viewBox="0 0 100 100"
    >
        <path d="M81.2,8.6C78.6,3.6,72.3,0,65.2,0H34.8C27.7,0,21.4,3.6,18.8,8.6L2,47.8l16.8,39.2c2.6,5,8.9,8.6,16,8.6h30.3 c7.1,0,13.4-3.6,16-8.6L98,47.8L81.2,8.6z M50,68.9c-10.5,0-19-8.5-19-19s8.5-19,19-19s19,8.5,19,19S60.5,68.9,50,68.9z"/>
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
