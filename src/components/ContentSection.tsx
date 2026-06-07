import { ReactNode } from "react";
import { Link } from "react-router-dom";

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

const linkClassName =
  "inline-flex items-center text-muted-foreground font-sans tracking-[0.2em] text-sm hover:text-primary transition-colors uppercase group font-light";

/** Use <Link> for SPA routes (starting with /), <a> for anchors */
const MoreLink = ({ moreLink, id, title }: { moreLink?: string; id: string; title: string }) => {
  const target = moreLink || `#${id}`;
  const ariaLabel = `了解更多${title}`;
  const content = (
    <>
      more <span className="text-xl ml-2 group-hover:translate-x-1 transition-transform">&gt;</span>
    </>
  );

  if (moreLink?.startsWith("/")) {
    return (
      <Link to={moreLink} className={linkClassName} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a href={target} className={linkClassName} aria-label={ariaLabel}>
      {content}
    </a>
  );
};

export const ContentSection = ({
  id,
  number,
  title,
  subtitle,
  description,
  imageElement,
  layoutVariant = "center",
  moreLink,
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
                <span className="text-sm font-sans tracking-[0.2em] text-muted-foreground uppercase">
                  {number} {subtitle}
                </span>
                <h2 className="text-[1.625rem] font-bold text-foreground mt-1">{title}</h2>
              </div>
              {/* Desktop header - above description */}
              <div className="hidden md:block pb-4 mb-6">
                <span className="block text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </span>
                <h2 className="text-[2rem] font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-lg leading-loose text-foreground/80 mb-6">
                {description}
              </div>
              <MoreLink moreLink={moreLink} id={id} title={title} />
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
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
            {/* Left: Text (right-aligned on desktop) */}
            <div className="w-full md:w-1/2 text-left md:text-right md:pr-10">
              <div className="pb-4 mb-6 inline-block">
                <span className="block text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </span>
                <h2 className="text-[2rem] font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-lg leading-loose text-foreground/80 mb-6">
                {description}
              </div>
              <MoreLink moreLink={moreLink} id={id} title={title} />
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
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

            {/* Right: Text */}
            <div className="w-full md:w-2/5 text-left md:pl-10">
              <div className="pb-4 mb-6 inline-block">
                <span className="block text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </span>
                <h2 className="text-[2rem] font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-lg leading-loose text-foreground/80 mb-6">
                {description}
              </div>
              <MoreLink moreLink={moreLink} id={id} title={title} />
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
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12 md:gap-24">
            {/* Right: Text */}
            <div className="w-full md:w-1/2 text-left md:text-right md:pr-10">
              <div className="pb-4 mb-6 inline-block">
                <span className="block text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </span>
                <h2 className="text-[2rem] font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-lg leading-loose text-foreground/80 mb-6">
                {description}
              </div>
              <MoreLink moreLink={moreLink} id={id} title={title} />
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
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              {imageElement}
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 text-left md:pl-10">
              <div className="pb-4 mb-6 inline-block">
                <span className="block text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground">
                  {number} {subtitle}
                </span>
                <h2 className="text-[2rem] font-bold text-foreground mt-1">{title}</h2>
              </div>
              <div className="text-lg leading-loose text-foreground/80 mb-6">
                {description}
              </div>
              <MoreLink moreLink={moreLink} id={id} title={title} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default fallback
  return null;
};
