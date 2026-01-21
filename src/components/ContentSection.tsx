import { ReactNode } from "react";

type LayoutVariant = "center" | "image-right" | "image-left" | "image-left-wide" | "overlay";

interface ContentSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: ReactNode;
  imageElement: ReactNode;
  layoutVariant?: LayoutVariant;
  moreLink?: string;
}

export const ContentSection = ({
  id,
  number,
  title,
  subtitle,
  description,
  imageElement,
  layoutVariant = "center",
}: ContentSectionProps) => {
  // Layout: center (About style - image centered with label left, text right)
  if (layoutVariant === "center") {
    return (
      <section id={id} className="py-24 md:py-32 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {/* Left: Image */}
            <div className="order-1 md:order-1 relative flex-shrink-0">
              {imageElement}
            </div>

            {/* Right: Description */}
            <div className="order-2 md:order-2 w-full md:w-auto md:max-w-sm text-left self-center md:pl-8">
              {/* Mobile header */}
              <div className="md:hidden mb-6 border-b border-border pb-2">
                <span className="text-xs font-sans tracking-[0.2em] text-muted-foreground uppercase">
                  {number} {subtitle}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-1">{title}</h3>
              </div>
              {/* Desktop header - above description */}
              <div className="hidden md:block pb-4 mb-6">
                <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </h3>
                <h2 className="text-2xl font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-base leading-loose text-foreground/80 mb-8 font-light tracking-wide">
                {description}
              </div>
              <a
                href={`#${id}`}
                className="inline-flex items-center text-muted-foreground font-sans tracking-[0.2em] text-xs hover:text-primary transition-colors uppercase group font-light"
              >
                more <span className="text-lg ml-2 group-hover:translate-x-1 transition-transform">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Layout: image-right (Dining/Life style - text on left, image on right, with background number)
  if (layoutVariant === "image-right") {
    return (
      <section id={id} className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
            {/* Left: Text (right-aligned on desktop) */}
            <div className="w-full md:w-1/2 text-left md:text-right md:pr-10">
              <div className="pb-4 mb-6 inline-block">
                <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </h3>
                <h2 className="text-2xl font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-base leading-loose text-foreground/80 mb-6">
                {description}
              </div>
              <a
                href={`#${id}`}
                className="inline-flex items-center text-primary font-bold tracking-widest hover:underline decoration-1 underline-offset-4 group transition-all flex-row-reverse text-xs uppercase"
              >
                <span className="rotate-180 mr-1 group-hover:-translate-x-1 transition-transform">›</span>
                more
              </a>
            </div>

            {/* Right: Image with background number */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
              {/* Background Number */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                <span className="text-8xl font-serif text-muted/50 font-bold">{number}</span>
              </div>
              {imageElement}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Layout: image-left-wide (Space style - wide image on left, text on right)
  if (layoutVariant === "image-left-wide") {
    return (
      <section id={id} className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
            {/* Left: Wide Image */}
            <div className="w-full md:w-3/5 flex justify-center md:justify-end relative">
              {imageElement}
            </div>

            {/* Right: Text with background number */}
            <div className="w-full md:w-2/5 text-left md:pl-10 relative">
              {/* Background Number */}
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none hidden lg:block">
                <span className="text-[8rem] font-bold text-foreground/30 font-serif">{number}</span>
              </div>
              <div className="pb-4 mb-6 inline-block">
                <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </h3>
                <h2 className="text-2xl font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-base leading-loose text-foreground/80 mb-6">
                {description}
              </div>
              <a
                href={`#${id}`}
                className="inline-flex items-center text-primary font-bold tracking-widest hover:underline decoration-1 underline-offset-4 group transition-all text-xs uppercase"
              >
                more <span className="ml-1 group-hover:translate-x-1 transition-transform">›</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Layout: image-left (Life reversed style - image on left, text on right)
  if (layoutVariant === "image-left") {
    return (
      <section id={id} className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12 md:gap-24">
            {/* Right: Text */}
            <div className="w-full md:w-1/2 text-left md:text-right md:pr-10">
              <div className="pb-4 mb-6 inline-block">
                <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </h3>
                <h2 className="text-2xl font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-base leading-loose text-foreground/80 mb-6">
                {description}
              </div>
              <a
                href={`#${id}`}
                className="inline-flex items-center text-primary font-bold tracking-widest hover:underline decoration-1 underline-offset-4 group transition-all md:flex-row-reverse text-xs uppercase"
              >
                more
                <span className="ml-1 group-hover:translate-x-1 transition-transform md:hidden">›</span>
                <span className="mr-1 rotate-180 group-hover:-translate-x-1 transition-transform hidden md:inline">›</span>
              </a>
            </div>

            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              {imageElement}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Layout: overlay (Shop style - image on left, text on right with gap)
  if (layoutVariant === "overlay") {
    return (
      <section id={id} className="py-24 md:py-32 mb-12">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              {imageElement}
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 text-left md:pl-10">
              <div className="pb-4 mb-6 inline-block">
                <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </h3>
                <h2 className="text-2xl font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-base leading-loose text-foreground/80 mb-6">
                {description}
              </div>
              <a
                href={`#${id}`}
                className="inline-flex items-center text-primary font-bold tracking-widest hover:underline decoration-1 underline-offset-4 group transition-all text-xs uppercase"
              >
                more <span className="ml-1 group-hover:translate-x-1 transition-transform">›</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default fallback
  return null;
};
