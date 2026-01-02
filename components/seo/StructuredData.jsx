"use client";

import { useEffect } from "react";

const StructuredData = ({ type, data }) => {
  useEffect(() => {
    // Add structured data to head
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    script.id = `structured-data-${type}`;

    // Remove existing script if exists
    const existing = document.getElementById(`structured-data-${type}`);
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

// Business Organization Schema
export const BusinessSchema = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OR Productions",
    alternateName: "אור פרודקשיין",
    description:
      "השכרת אטרקציות מקצועיות לאירועים בישראל - פוטובוט, בר מיצים, עמדות צילום, מיצגי תפאורה ועוד",
    url: "https://orproductions.co.il",
    logo: "https://orproductions.co.il/logo.png",
    image:
      "https://res.cloudinary.com/your-cloud/image/upload/v1/business-image.jpg",
    telephone: "+972-XX-XXXXXXX",
    email: "info@orproductions.co.il",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
      addressRegion: "Center District",
      addressLocality: "Israel",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.0853",
      longitude: "34.7818",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Israel",
      },
    ],
    serviceType: [
      "השכרת ציוד לאירועים",
      "אטרקציות לאירועים",
      "פוטובוט",
      "עמדות צילום",
      "בר מיצים",
      "מיצגי תפאורה",
    ],
    priceRange: "₪₪-₪₪₪",
    openingHours: "Mo-Su 08:00-22:00",
    sameAs: [
      "https://www.facebook.com/orproductions",
      "https://www.instagram.com/orproductions",
      "https://www.tiktok.com/@orproductions",
    ],
  };

  return <StructuredData type="business" data={businessData} />;
};

// Product Schema
export const ProductSchema = ({ product }) => {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://res.cloudinary.com/your-cloud/image/upload/v1/${product.image}`,
    sku: `OR-${product.id}`,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "OR Productions",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "ILS",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "OR Productions",
      },
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  };

  return <StructuredData type={`product-${product.id}`} data={productData} />;
};

// Service Schema
export const ServiceSchema = ({ service }) => {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "OR Productions",
    },
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    serviceType: service.category,
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "ILS",
    },
  };

  return <StructuredData type={`service-${service.id}`} data={serviceData} />;
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ breadcrumbs }) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return <StructuredData type="breadcrumb" data={breadcrumbData} />;
};

// FAQ Schema
export const FAQSchema = ({ faqs }) => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <StructuredData type="faq" data={faqData} />;
};

export default StructuredData;
