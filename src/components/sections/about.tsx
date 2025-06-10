
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">About Barn Owl Analytics</h2>
           <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Learn more about our mission, values, and the experienced team dedicated to empowering DTC brands.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto md:max-w-none md:mx-0">
            <Image 
              src="/images/timp.png" 
              alt="Scenic mountain view, representing Barn Owl Analytics' vision" 
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
              data-ai-hint="mountain landscape"
            />
          </div>
          <div>
            <p className="text-lg text-foreground/80 mb-4">
              Our team combines talent from industry leaders like Qualtrics, Sawtooth Software, and Dynata with specialized knowledge of the Shopify ecosystem and DTC business models.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Based in Utah and Chicago, we're positioned at the intersection of cutting-edge research methodology and practical DTC marketing expertise.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              We chose the barn owl as our namesake and mascot because its keen sight, acute listening, and masterful navigation reflect our mission. Barn Owl Analytics empowers DTC companies to truly see and hear their market, charting a clear course for precise, data-driven growth.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">
                Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
