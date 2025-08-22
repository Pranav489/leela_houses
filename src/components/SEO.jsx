import { Helmet } from "react-helmet-async";

function SEO({ title, description }) {
  const defaultTitle = "Leela Farmhouse";
  const defaultDescription =
    "Luxury Farmhouse Resort & Nature Retreat";

  return (
    <Helmet>
      {/* Page Title */}
      <title>{title ? `${title}` : defaultTitle}</title>

      {/* Meta Description */}
      <meta
        name="description"
        content={description || defaultDescription}
      />

      {/* Open Graph (for social media) */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />

      {/* Robots (indexing) */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}

export default SEO;
