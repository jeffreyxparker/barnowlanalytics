import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Target className="h-10 w-10 text-primary mb-4" />,
    title: "DTC Specialization",
    description: "We live and breathe DTC. Our research methodologies are tailored to the unique challenges and opportunities of your market.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary mb-4" />,
    title: "Actionable Insights",
    description: "We don't just deliver data; we provide clear, actionable recommendations that drive real business results.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary mb-4" />,
    title: "Dedicated Partnership",
    description: "Consider us an extension of your team. We're committed to your success and provide ongoing support.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">Why DTC Brands Choose Us</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Unlock the full potential of your brand with research designed specifically for the Direct-to-Consumer landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                {feature.icon}
                <CardTitle className="text-2xl text-foreground font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
