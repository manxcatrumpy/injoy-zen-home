import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

/**
 * Sets page-specific <title> and <meta name="description"> for SEO.
 * Each page should call this hook with unique title and description
 * so Google can distinguish and index pages correctly.
 */
export const useSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }
  }, [title, description]);
};
