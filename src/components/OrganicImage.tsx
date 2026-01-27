import { ReactNode } from "react";

type ShapeVariant = "oval" | "blob" | "blob-2" | "elongated" | "arch" | "overlap" | "capsule-left" | "corner-round";

interface OrganicImageProps {
  src: string;
  alt: string;
  variant: ShapeVariant;
  className?: string;
  overlayElement?: ReactNode;
}

// Shape styles with recommended aspect ratios for consistent appearance
const shapeConfig: Record<ShapeVariant, { borderRadius: string; aspectRatio: string }> = {
  oval: {
    borderRadius: "60% 40% 55% 45% / 70% 65% 35% 30%",
    aspectRatio: "3/4", // 直式橢圓，適合人像或產品
  },
  blob: {
    borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%",
    aspectRatio: "1/1", // 正方形最能展現有機形狀
  },
  "blob-2": {
    borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%",
    aspectRatio: "1/1",
  },
  elongated: {
    borderRadius: "45% 55% 50% 50% / 25% 25% 75% 75%",
    aspectRatio: "2/1", // 橫式拉長，適合風景或空間照
  },
  arch: {
    borderRadius: "50% 50% 0% 0% / 100% 100% 0% 0%",
    aspectRatio: "4/5", // 拱形門效果
  },
  overlap: {
    borderRadius: "50% 50% 55% 45% / 55% 50% 50% 45%",
    aspectRatio: "1/1",
  },
  "capsule-left": {
    borderRadius: "55% 45% 50% 50% / 70% 70% 40% 40%", // 鵝卵石形，左圓右收
    aspectRatio: "3/2", // 橫式橢圓
  },
  "corner-round": {
    borderRadius: "5% 5% 5% 50% / 5% 5% 5% 50%", // 左下圓弧，其他直角
    aspectRatio: "1/1", // 正方形
  },
};

export const OrganicImage = ({
  src,
  alt,
  variant,
  className = "",
  overlayElement,
}: OrganicImageProps) => {
  const config = shapeConfig[variant];

  return (
    <div className={`relative ${className}`}>
      {/* Gold background overlay for "overlap" variant */}
      {variant === "overlap" && (
        <div
          className="absolute -top-4 -right-4 w-[90%] h-[90%] bg-gold/30 -z-10"
          style={{ borderRadius: "45% 55% 50% 50% / 50% 55% 45% 50%" }}
        />
      )}

      {/* Main image container with fixed aspect ratio */}
      <div
        className="overflow-hidden shadow-organic"
        style={{
          borderRadius: config.borderRadius,
          aspectRatio: config.aspectRatio,
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Optional overlay element */}
      {overlayElement}
    </div>
  );
};
