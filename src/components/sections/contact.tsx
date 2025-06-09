import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">Get in Touch</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Ready to navigate your brand to new heights? Let's talk about your research needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-card p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-6 font-headline">Contact Us</h3>
            <ContactForm />
          </div>
          <div className="space-y-6 pt-8 md:pt-0">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-md">
              <Mail className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-primary mb-1 font-headline">Email Us</h4>
                <p className="text-foreground/70">hello@customergps.com</p>
                <p className="text-sm text-muted-foreground">We typically respond within 24 hours.</p>
              </div>
            </div>
             <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-md">
              <Phone className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-primary mb-1 font-headline">Call Us</h4>
                <p className="text-foreground/70">(555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri, 9am - 5pm EST</p>
              </div>
            </div>
             <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-md">
              <MapPin className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-primary mb-1 font-headline">Our Office</h4>
                <p className="text-foreground/70">123 Insight Avenue, Suite 404</p>
                <p className="text-foreground/70">Growth City, USA 12345</p>
                <p className="text-sm text-muted-foreground">By appointment only.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
