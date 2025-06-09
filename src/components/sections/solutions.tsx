import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BarChartBig, ClipboardList, Users, ShoppingBag, Zap } from "lucide-react";

const solutions = [
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: "Market Opportunity Analysis",
    description: "Identify untapped market segments and new growth avenues.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Customer Persona Development",
    description: "Deeply understand your ideal customers' motivations and pain points.",
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-accent" />,
    title: "Product Concept Testing",
    description: "Validate new product ideas and features before launch.",
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "Brand Perception Studies",
    description: "Measure brand awareness, sentiment, and competitive positioning.",
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-accent" />,
    title: "Customer Satisfaction & Loyalty",
    description: "Uncover drivers of loyalty and identify areas for improvement.",
  },
  {
    icon: <BarChartBig className="h-8 w-8 text-accent" />,
    title: "Campaign Effectiveness Tracking",
    description: "Assess the impact of your marketing campaigns and optimize ROI.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-card">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">Our Research Solutions for DTC Brands</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            From understanding your audience to optimizing your campaigns, we offer a suite of research services tailored for DTC success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.title} className="bg-background border-border shadow-lg hover:shadow-accent/20 transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  {solution.icon}
                  <CardTitle className="text-xl text-primary font-headline">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/70">{solution.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
