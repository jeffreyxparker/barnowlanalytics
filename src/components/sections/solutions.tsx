
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, BarChart3, ShoppingCart, Repeat } from "lucide-react";

interface SolutionCategory {
  icon: JSX.Element;
  categoryTitle: string;
  categoryDescription: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

const solutionCategories: SolutionCategory[] = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    categoryTitle: "Understanding Your Customer & Market",
    categoryDescription:
      "This is about building a deep, foundational knowledge of who you're selling to and the competitive landscape you operate in.",
    questions: [
      {
        question: "Who are our most valuable customers?",
        answer:
          "We go beyond basic demographics to build detailed personas, uncovering their motivations, pain points, and buying triggers.",
      },
      {
        question: "How does our brand stack up against the competition?",
        answer:
          "We benchmark your brand's awareness, perception, and equity to identify strengths you can leverage and weaknesses you need to address.",
      },
      {
        question: "What makes our customers loyal, and what causes them to churn?",
        answer:
          "We pinpoint the exact drivers of satisfaction and dissatisfaction across the customer journey so you can improve retention.",
      },
      {
        question: "Where are the untapped opportunities in the market?",
        answer:
          "We help you discover underserved needs and emerging trends to confidently innovate and expand.",
      },
    ],
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    categoryTitle: "Optimizing Your Product & Pricing",
    categoryDescription:
      "This is about ensuring your core offer—what you sell and what you charge for it—is perfectly aligned with customer value and business goals.",
    questions: [
      {
        question: "What price will maximize our revenue?",
        answer:
          "Using advanced techniques like conjoint analysis, we help you determine the optimal price points that balance profitability and customer price sensitivity.",
      },
      {
        question: "Which new features or product improvements will have the biggest impact?",
        answer:
          "We create a data-backed development roadmap, ensuring you invest in features that customers truly want and will pay for.",
      },
      {
        question: "Is our new product idea viable?",
        answer:
          "Before you invest significant resources, we validate the market demand for new concepts to minimize risk and ensure a successful launch.",
      },
      {
        question: "How should we structure our bundles or subscriptions?",
        answer:
          "We test different pricing and feature combinations to find the most appealing and profitable structure for your brand.",
      },
    ],
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    categoryTitle: "Maximizing Your Marketing & Sales Funnel",
    categoryDescription:
      "This is about making your customer acquisition more efficient and effective, turning awareness into measurable revenue.",
    questions: [
      {
        question: "Why are potential customers abandoning their shopping carts?",
        answer:
          "We map the entire path-to-purchase to uncover the precise friction points and conversion barriers that are costing you sales.",
      },
      {
        question: "Which marketing messages and ad creatives actually work?",
        answer:
          "We rigorously test your campaigns before a big media spend to find the creative that truly resonates and drives purchase intent.",
      },
      {
        question: "How can we lower our Customer Acquisition Cost (CAC)?",
        answer:
          "By optimizing your marketing channels and messaging, we help you acquire more customers for less money.",
      },
      {
        question: "Where should we focus our marketing budget for the best ROI?",
        answer:
          "We identify the most effective channels and stages of the buying process, so you can allocate your resources with confidence.",
      },
    ],
  },
    {
    icon: <Repeat className="h-6 w-6 text-primary" />,
    categoryTitle: "Cultivating Lifetime Value & Retention",
    categoryDescription:
      "This is about turning one-time buyers into loyal advocates and maximizing the long-term health of your customer base.",
    questions: [
      {
        question: "How do we turn one-time buyers into repeat purchasers?",
        answer:
          "We analyze post-purchase behavior and satisfaction drivers to build effective retention marketing strategies, from email flows to loyalty programs.",
      },
      {
        question: "What is the true lifetime value (LTV) of our customers, and how can we strategically increase it?",
        answer:
          "We help you move beyond simple repeat purchase rates to understand the full value of a customer, identifying key levers to boost that value over time.",
      },
      {
        question: "Which post-purchase experiences create brand advocates?",
        answer:
          "We identify the moments of delight—from unboxing to customer service interactions—that have the biggest impact on long-term loyalty and positive word-of-mouth.",
      },
    ],
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-card">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
            Questions We Help Companies Solve
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We use data to provide clear, actionable answers to the most
            pressing challenges facing DTC brands. Instead of a menu of
            services, we offer solutions to the critical questions that drive
            growth.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            {solutionCategories.map((category, index) => (
            <div key={index} className="mb-10 p-8 bg-background rounded-lg shadow-lg">
                <header className="flex flex-col items-center text-center mb-6">
                    <div className="mb-4">
                        {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary font-headline">
                        {category.categoryTitle}
                    </h3>
                    <p className="mt-2 text-md text-foreground/70 max-w-2xl">
                        {category.categoryDescription}
                    </p>
                </header>
                <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, q_index) => (
                        <AccordionItem value={`item-${index}-${q_index}`} key={q_index}>
                            <AccordionTrigger className="text-left text-foreground/90 hover:text-primary">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-foreground/70">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
