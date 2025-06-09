import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingCart, 
  DollarSign, 
  ListChecks, 
  Megaphone, 
  Users, 
  Heart, 
  ShieldCheck, 
  Lightbulb,
  CheckCircle2
} from "lucide-react";

interface Solution {
  icon: JSX.Element;
  title: string;
  perfectFor: string;
  description: string;
  keyBenefits: string[];
}

const solutions: Solution[] = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: "Path-to-Purchase & Conversion Optimization",
    perfectFor: "Brands struggling with cart abandonment, low conversion rates, or looking to maximize their acquisition funnel efficiency.",
    description: "Discover the precise journey your customers take from awareness to purchase. We uncover conversion barriers and identify opportunities to streamline your sales funnel.",
    keyBenefits: [
      "Pinpoint and eliminate friction points in the customer journey.",
      "Optimize marketing channels for maximum ROI and lower CAC.",
      "Refine website and app experiences to align with customer expectations.",
      "Understand the key motivators and hesitations at each stage of the buying process."
    ],
  },
  {
    icon: <DollarSign className="h-8 w-8 text-accent" />,
    title: "Strategic Pricing & Value Perception",
    perfectFor: "Brands launching new products, revisiting existing pricing, or seeking to maximize revenue per customer.",
    description: "Price is a powerful lever for both sales volume and brand positioning. Using advanced survey techniques like conjoint analysis, we help you identify the optimal price points for your products.",
    keyBenefits: [
      "Determine the ideal price for maximum revenue and profitability.",
      "Understand customer price sensitivity across different segments.",
      "Validate pricing structures for new product launches.",
      "Test the effectiveness of bundling, discounts, and subscription models."
    ],
  },
  {
    icon: <ListChecks className="h-8 w-8 text-accent" />,
    title: "Product & Feature Prioritization",
    perfectFor: "Brands with limited resources deciding where to focus development efforts, or looking to ensure new features drive genuine customer value.",
    description: "Ensure your product roadmap is customer-centric and ROI-driven. We identify which features and improvements will create the most impact and satisfaction for your target audience.",
    keyBenefits: [
      "Identify high-impact features that resonate most with your customers.",
      "Uncover the \"why\" behind customer preferences and unmet needs.",
      "Create a data-backed development roadmap that minimizes waste and maximizes satisfaction."
    ],
  },
  {
    icon: <Megaphone className="h-8 w-8 text-accent" />,
    title: "Ad Campaign & Messaging Effectiveness",
    perfectFor: "Brands optimizing their ad spend, launching new campaigns, or looking to improve marketing message resonance.",
    description: "Stop guessing and start optimizing your creative and copy. Our rigorous ad and messaging testing helps you understand what truly drives purchase intent and brand connection.",
    keyBenefits: [
      "Compare ad creative and messaging performance before significant media spend.",
      "Identify which messaging resonates best with specific customer segments.",
      "Understand the emotional and rational triggers in your ads.",
      "Optimize campaign ROI by deploying proven, high-performing creative."
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Customer Persona & Segmentation Deep Dive",
    perfectFor: "Brands looking to refine their targeting, personalize marketing efforts, or expand into new, high-potential segments.",
    description: "Go beyond demographics to truly understand your ideal customers. Our in-depth research creates actionable customer personas that drive more effective marketing and product development.",
    keyBenefits: [
      "Develop detailed customer personas with motivations, pain points, and buying triggers.",
      "Identify distinct customer segments and their unique preferences.",
      "Uncover opportunities for personalized messaging and product offerings."
    ],
  },
  {
    icon: <Heart className="h-8 w-8 text-accent" />,
    title: "Customer Satisfaction & Loyalty Drivers",
    perfectFor: "Brands focused on retention, reducing churn, and building a loyal customer base.",
    description: "In the competitive DTC landscape, customer satisfaction is paramount. We measure satisfaction across the customer journey and pinpoint the exact drivers of loyalty and dissatisfaction.",
    keyBenefits: [
      "Quantify current customer satisfaction levels and track improvements.",
      "Identify critical touchpoints impacting overall experience.",
      "Uncover specific pain points that lead to churn and negative reviews.",
      "Develop prioritized action plans to boost retention and foster brand advocacy."
    ],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: "Brand Health & Competitive Positioning",
    perfectFor: "Brands competing in crowded markets, preparing for growth funding, or looking to solidify their market standing.",
    description: "Your brand is a strategic asset. Our brand health studies provide a comprehensive overview of your brand's standing in the market, relative to competitors.",
    keyBenefits: [
      "Benchmark your brand's awareness, perception, and equity against competitors.",
      "Identify strengths to leverage and weaknesses to address.",
      "Track progression through the brand awareness and consideration funnel.",
      "Understand how your brand is perceived by your target audience."
    ],
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: "Market Opportunity & New Product Validation",
    perfectFor: "Brands exploring new growth avenues, validating product ideas, or looking to diversify their offerings.",
    description: "Identify untapped market segments and assess the viability of new product concepts before committing significant resources. We provide the data to confidently innovate and expand.",
    keyBenefits: [
      "Discover underserved customer needs and emerging market trends.",
      "Validate the appeal and potential demand for new product ideas.",
      "Refine product features and positioning based on direct customer feedback.",
      "Minimize risk in new product development and market entry."
    ],
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-card">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">Our Research Solutions for DTC Brands</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.title} className="bg-background border-border shadow-lg hover:shadow-accent/20 transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div className="flex-shrink-0 pt-1">{solution.icon}</div>
                  <CardTitle className="text-xl text-primary font-headline">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground/90 mb-1 text-sm">Perfect for:</h4>
                  <p className="text-sm text-foreground/70 italic">{solution.perfectFor}</p>
                </div>
                <p className="text-foreground/80 text-sm">{solution.description}</p>
                <div>
                  <h4 className="font-semibold text-foreground/90 mb-2 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1.5">
                    {solution.keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm text-foreground/70">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
