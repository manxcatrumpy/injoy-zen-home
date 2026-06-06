import { useEffect } from "react";

const SITE_URL = "https://injoy.taipei";

interface SEOProps {
  title: string;
  description: string;
}

/** Create the head tag if missing, then set an attribute on it. */
function upsertTag(
  selector: string,
  create: () => HTMLElement,
  attr: string,
  value: string,
) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * Sets page-specific <title>, description, canonical and og: tags so Google
 * can distinguish and index each page. Canonical/og:url are derived from the
 * current path, which is also what the build-time prerender captures.
 */
export const useSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    const url = SITE_URL + window.location.pathname;

    document.title = title;

    upsertTag(
      'meta[name="description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        return m;
      },
      "content",
      description,
    );

    upsertTag(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      },
      "href",
      url,
    );

    const og: [string, string][] = [
      ["og:title", title],
      ["og:description", description],
      ["og:url", url],
    ];
    for (const [prop, content] of og) {
      upsertTag(
        `meta[property="${prop}"]`,
        () => {
          const m = document.createElement("meta");
          m.setAttribute("property", prop);
          return m;
        },
        "content",
        content,
      );
    }
  }, [title, description]);
};
