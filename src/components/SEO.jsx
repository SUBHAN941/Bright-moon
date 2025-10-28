import React from "react";
import { HeadProvider, Title, Meta, Link } from "react-head";

export default function SEO({ title, description, keywords, url }) {
  return (
    <HeadProvider>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="keywords" content={keywords} />

<meta name="google-site-verification" content="E_ZBjzLGr06H79oOkP0fimni5ctJCCehZNxZqKRZ4oc" />

      {/* Open Graph */}
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:url" content={url} />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="/school.jpg" />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content="/school.jpg" />

      {/* Canonical & Favicon */}
      <Link rel="canonical" href={url} />
      <Link rel="icon" type="image/png" href="/favicon.png" />
    </HeadProvider>
  );
}
