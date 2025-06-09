import Image from 'next/image';

const clientLogos = [
  { src: "https://placehold.co/150x80.png", alt: "Client Brand 1", hint: "logo brand" },
  { src: "https://placehold.co/150x80.png", alt: "Client Brand 2", hint: "logo brand" },
  { src: "https://placehold.co/150x80.png", alt: "Client Brand 3", hint: "logo brand" },
  { src: "https://placehold.co/150x80.png", alt: "Client Brand 4", hint: "logo brand" },
  { src: "https://placehold.co/150x80.png", alt: "Client Brand 5", hint: "logo brand" },
  { src: "https://placehold.co/150x80.png", alt: "Client Brand 6", hint: "logo brand" },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">Brands We've Partnered With</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We're proud to have supported a diverse range of innovative DTC brands on their growth journey.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((logo, index) => (
            <div key={index} className="p-2 bg-muted rounded-md">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={150} 
                height={80}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                data-ai-hint={logo.hint} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
