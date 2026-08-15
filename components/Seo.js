import Head from 'next/head'
import { absoluteUrl, siteConfig } from '../lib/seo'

export default function Seo({
  title = siteConfig.title,
  description = siteConfig.description,
  path = '/',
  image = siteConfig.ogImage,
  imageAlt = siteConfig.ogImageAlt,
  type = 'website',
  noIndex = false,
  jsonLd,
}) {
  const canonical = absoluteUrl(path)
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image)

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />
      <meta name="author" content={siteConfig.name} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      {siteConfig.twitterHandle ? (
        <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      ) : null}

      <meta name="theme-color" content="#1f6fb5" />
      <meta name="color-scheme" content="light" />
      <link rel="icon" href="/logo.jpg" type="image/jpeg" />
      <link rel="apple-touch-icon" href="/logo.jpg" />

      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              Array.isArray(jsonLd)
                ? {
                    '@context': 'https://schema.org',
                    '@graph': jsonLd.map(({ '@context': _context, ...node }) => node),
                  }
                : jsonLd
            ),
          }}
        />
      ) : null}
    </Head>
  )
}
