import Head from 'next/head';

export default function SEO({ title, description, canonical, openGraph, twitter }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph tags */}
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={openGraph.description} />
      <meta property="og:url" content={openGraph.url} />
      <meta property="og:type" content={openGraph.type} />
      <meta property="og:image" content={openGraph.image} />

      {/* Twitter tags */}
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:site" content={twitter.site} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      <meta name="twitter:image" content={twitter.image} />
    </Head>
  );
}
