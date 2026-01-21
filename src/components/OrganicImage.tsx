import { ReactNode } from "react";

type ShapeVariant = "oval" | "blob" | "blob-2" | "elongated" | "arch" | "overlap";

interface OrganicImageProps {
  src: string;
  alt: string;
  variant: ShapeVariant;
  className?: string;
  overlayElement?: ReactNode;
}

const shapeStyles: Record<ShapeVariant, string> = {
  oval: "60% 40% 55% 45% / 70% 65% 35% 30%",
  blob: "55% 45% 60% 40% / 45% 55% 45% 55%",
  "blob-2": "45% 55% 50% 50% / 55% 45% 55% 45%",
  elongated: "45% 55% 50% 50% / 25% 25% 75% 75%",
  arch: "50% 50% 0% 0% / 100% 100% 0% 0%",
  overlap: "50% 50% 55% 45% / 55% 50% 50% 45%",
};

export const OrganicImage = ({
  src,
  alt,
  variant,
  className = "",
  overlayElement,
}: OrganicImageProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Gold background overlay for "overlap" variant */}
      {variant === "overlap" && (
        <div
          className="absolute -top-4 -right-4 w-[90%] h-[90%] bg-gold/30 -z-10"
          style={{ borderRadius: "45% 55% 50% 50% / 50% 55% 45% 50%" }}
        />
      )}
      
      {/* Main image container */}
      <div
        className="overflow-hidden shadow-organic"
        style={{ borderRadius: shapeStyles[variant] }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Optional overlay element */}
      {overlayElement}
    </div>
  );
};
