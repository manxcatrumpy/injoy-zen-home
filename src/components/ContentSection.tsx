import { ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: ReactNode;
  imageElement: ReactNode;
  reverse?: boolean;
  moreLink?: string;
}

export const ContentSection = ({
  id,
  number,
  title,
  subtitle,
  description,
  imageElement,
  reverse = false,
}: ContentSectionProps) => {
  return (
    <section
      id={id}
      className="py-20 lg:py-32 relative z-10"
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex flex-col gap-12 lg:gap-20 items-center ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Image Side */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            {imageElement}
          </div>

          {/* Text Side */}
          <div className={`flex-1 ${reverse ? "lg:text-left" : "lg:text-right"}`}>
            <div className={`space-y-6 ${reverse ? "" : "lg:ml-auto"} max-w-md`}>
              {/* Section Number & Label */}
              <div className="text-muted-foreground font-sans text-sm tracking-widest uppercase">
                <span className="text-primary font-medium">{number}</span>
                <span className="mx-2">—</span>
                <span>{subtitle}</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-primary text-2xl lg:text-3xl">
                {title}
              </h2>

              {/* Description */}
              <div className="text-foreground/80 font-sans leading-relaxed text-sm lg:text-base space-y-4">
                {description}
              </div>

              {/* More Link */}
              <a
                href={`#${id}`}
                className="inline-flex items-center gap-2 text-primary font-sans text-sm tracking-wide hover:gap-3 transition-all group"
              >
                more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
