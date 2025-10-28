import React from "react";
import { HeadProvider, Title, Meta, Link } from "react-head";

export default function SEO({ title, description, keywords, url }) {
  return (
    <HeadProvider>
      {/* ✅ Basic SEO Meta */}
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="keywords" content={keywords} />
      <Meta name="robots" content="index, follow" />
      <Meta name="author" content="Bright Moon School Faisalabad" />

      {/* ✅ Google Site Verification */}
      <Meta
        name="google-site-verification"
        content="E_ZBjzLGr06H79oOkP0fimni5ctJCCehZNxZqKRZ4oc"
      />

      {/* ✅ Open Graph (Facebook / WhatsApp / LinkedIn) */}
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:url" content={url} />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content={`${url}school.jpg`} />

      {/* ✅ Twitter Cards */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={`${url}school.jpg`} />

      {/* ✅ Canonical Link & Favicon */}
      <Link rel="canonical" href={url} />
      <Link rel="icon" type="image/png" href="/favicon.png" />
    </HeadProvider>
  );
}
