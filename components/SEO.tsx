import React from "react";
import Head from "next/head";
import { seoData } from "../portfolio";

function SEO() {
  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="author" content={seoData.author} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <link rel="canonical" href={seoData.url} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:site_name" content={seoData.title} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="57x57" href="/img/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/img/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/img/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/img/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/img/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png"/>
      <link rel="manifest" href="/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/img/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
}

// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };

export default SEO;
