import { Head } from "vite-react-ssg";

const SITE_URL = "https://injoy.taipei";

interface SeoProps {
  title: string;
  description: string;
  /** Route path beginning with "/", e.g. "/about". Used for canonical + og:url. */
  path: string;
}

/**
 * Per-page <head> tags rendered into the static HTML at build time (via
 * vite-react-ssg) and kept in sync on the client. Each page must render this
 * with a unique title, description and path so Google indexes pages distinctly
 * and each page gets its own canonical URL.
 */
export const Seo = ({ title, description, path }: SeoProps) => {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Head>
  );
};
