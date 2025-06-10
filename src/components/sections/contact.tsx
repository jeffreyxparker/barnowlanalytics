
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4 font-headline">Get in Touch</h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Ready to navigate your brand to new heights? Let's talk about your research needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-background p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-headline">Contact Us</h3>
            <ContactForm />
          </div>
          <div className="space-y-6 pt-8 md:pt-0">
            <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-md">
              <Mail className="h-8 w-8 text-secondary flex-shrink-0" />
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-foreground mb-1 font-headline">Email Us</h4>
                <p className="text-sm text-muted-foreground">We typically respond within 24 business hours.</p>
              </div>
              <Button asChild size="sm" className="flex-shrink-0 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="mailto:info@surveyspark.com">
                  Email Us <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-md">
              <Phone className="h-8 w-8 text-secondary flex-shrink-0" />
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-foreground mb-1 font-headline">Call Us</h4>
                <p className="text-sm text-muted-foreground">Available weekdays, 8 AM - 5 PM Mountain Time.</p>
              </div>
              <Button asChild size="sm" className="flex-shrink-0 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="tel:801-699-4700">
                  Call Us <Phone className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             <div className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-md">
              <CalendarDays className="h-8 w-8 text-secondary flex-shrink-0" />
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-foreground mb-1 font-headline">Schedule a Call</h4>
                <p className="text-sm text-muted-foreground">The most reliable way to connect at your convenience.</p>
              </div>
              <Button asChild size="sm" className="flex-shrink-0 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
                  Schedule on Calendly <CalendarDays className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

