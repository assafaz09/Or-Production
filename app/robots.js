export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/", "/private/"],
    },
    sitemap: "https://orproductions.co.il/sitemap.xml",
    host: "https://orproductions.co.il",
  };
}
