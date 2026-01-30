/**
 * ResponsiveImage Component
 *
 * A wrapper component for images that supports srcset for responsive loading.
 * Uses vite-imagetools to generate multiple sizes at build time.
 *
 * Usage:
 * 1. Import image with query params: import heroSrcSet from "@/assets/hero.png?w=400;800;1200&format=webp&as=srcset"
 * 2. Use with this component: <ResponsiveImage srcSet={heroSrcSet} sizes="100vw" alt="..." />
 */

interface ResponsiveImageProps {
  src?: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
}

export const ResponsiveImage = ({
  src,
  srcSet,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
  alt,
  className = "",
  loading = "lazy",
  decoding = "async",
}: ResponsiveImageProps) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
    />
  );
};
