import HeroSection from '@/components/sections/hero';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import SolutionsSection from '@/components/sections/solutions';
import PricingPhilosophySection from '@/components/sections/pricing';
import TestimonialsSection from '@/components/sections/testimonials';
import ClientsSection from '@/components/sections/clients';
import AboutUsSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <SolutionsSection />
      <PricingPhilosophySection />
      <TestimonialsSection />
      <ClientsSection />
      <AboutUsSection />
      <ContactSection />
    </>
  );
}
