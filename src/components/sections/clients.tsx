import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section id="clients" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">Brands We've Helped Grow</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We're proud to have supported a diverse range of iconic brands and innovative start-ups with their survey-based strategy guidance.
          </p>
        </div>
        <div className="flex justify-center items-center">
          {/* 
            Instructions for the user:
            1. Save your collage image to the `public/images/` folder. 
               For example, `public/images/client-logo-collage.png`.
            2. Update the `src` prop below to match your image's filename.
            3. Adjust the `width` and `height` props to match your image's aspect ratio 
               for optimal display and to avoid layout shift.
          */}
          <div className="relative w-full max-w-4xl aspect-[2/1] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/client-logo-collage.png" // Update this path
              alt="Collage of client logos" 
              layout="fill"
              objectFit="contain" // Use "contain" or "cover" based on your preference
              className="rounded-lg"
              data-ai-hint="logo collage" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
