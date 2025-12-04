import { useMemo } from "react";
import DOMPurify from "isomorphic-dompurify";

function normalizeToBodyInnerHTML(raw: string) {
  // If content looks like a full document, extract just <body> contents.
  if (/<\s*(html|head|body)\b/i.test(raw)) {
    try {
      const doc = new DOMParser().parseFromString(raw, "text/html");
      // Prefer body content if present; fall back to original on parse edge-cases
      return doc?.body?.innerHTML || raw;
    } catch {
      return raw;
    }
  }
  return raw;
}

export default function HtmlContent({ html }: { html: string }) {
  const clean = useMemo(() => {
    const bodyOnly = normalizeToBodyInnerHTML(html);

    return DOMPurify.sanitize(bodyOnly, {
      // IMPORTANT: keep this as a fragment (default). Do NOT set WHOLE_DOCUMENT: true
      USE_PROFILES: { html: true },
      FORBID_TAGS: [
        "html",
        "head",
        "body",
        "meta",
        "link",
        "title",
        "script",
        "style",
        "noscript",
      ],
      ALLOWED_ATTR: [
        "href",
        "target",
        "rel",
        "src",
        "alt",
        "width",
        "height",
        "loading",
        "decoding",
        "referrerpolicy",
      ],
    });
  }, [html]);

  return (
    <div
      className="
        prose max-w-none 
        text-white
        "
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
