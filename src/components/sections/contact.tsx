
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4 font-headline">Ready to Turn Customer Insights Into Growth?</h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Let's discuss how Barn Owl Analytics can help your brand make data-driven decisions that drive measurable results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-background p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-headline">Contact Us</h3>
            <ContactForm />
          </div>
          <div className="space-y-6 pt-8 md:pt-0">
            <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-md">
              <Mail className="h-8 w-8 text-foreground flex-shrink-0 mt-1" />
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-foreground mb-1 font-headline">Email Us</h4>
                <Link href="mailto:info@barnowlanalytics.com" className="text-sm text-primary hover:underline block mb-1">
                  info@barnowlanalytics.com
                </Link>
                <p className="text-sm text-muted-foreground">We typically respond within 24 business hours.</p>
              </div>
              <Button asChild size="sm" className="flex-shrink-0 self-center bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="mailto:info@barnowlanalytics.com">
                  Email Us <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-md">
              <Phone className="h-8 w-8 text-foreground flex-shrink-0 mt-1" />
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-foreground mb-1 font-headline">Call Us</h4>
                <Link href="tel:801-699-4700" className="text-sm text-primary hover:underline block mb-1">
                  801-699-4700
                </Link>
                <p className="text-sm text-muted-foreground">Available weekdays, 8 AM - 5 PM Mountain Time.</p>
              </div>
              <Button asChild size="sm" className="flex-shrink-0 self-center bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="tel:801-699-4700">
                  Call Us <Phone className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-md">
              <CalendarDays className="h-8 w-8 text-foreground flex-shrink-0 mt-1" />
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-foreground mb-1 font-headline">Schedule a Meeting</h4>
                <p className="text-sm mt-1 mb-1">
                  <Link href="https://calendar.app.google/kYr7jRbkcKkvQ1DcA" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Calendar Scheduler
                  </Link>
                </p>
                <p className="text-sm text-muted-foreground">The most reliable way to connect at your convenience.</p>
              </div>
              <Button asChild size="sm" className="flex-shrink-0 self-center bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="https://calendar.app.google/kYr7jRbkcKkvQ1DcA" target="_blank" rel="noopener noreferrer">
                  Schedule <CalendarDays className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
