import { categoriesData } from "../lib/categories";

export default function sitemap() {
  const baseUrl = "https://orproductions.co.il";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Blog pages
  const blogPages = [
    {
      url: `${baseUrl}/blog/how-to-choose-attractions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/how-to-choose-suppliers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/photo-booths-2025`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Category pages
  const categoryPages = categoriesData.categories.map((category) => ({
    url: `${baseUrl}/category/${category.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Subcategory pages
  const subcategoryPages = [];
  categoriesData.categories.forEach((category) => {
    category.subCategories?.forEach((subCategory) => {
      subcategoryPages.push({
        url: `${baseUrl}/category/${category.id}/subcategory/${subCategory.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });
  });

  // Product/Attraction pages
  const attractionPages = [];
  categoriesData.categories.forEach((category) => {
    category.subCategories?.forEach((subCategory) => {
      subCategory.attractions?.forEach((attraction) => {
        attractionPages.push({
          url: `${baseUrl}/attraction/${attraction.id}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.9,
        });
      });
    });
  });

  return [
    ...staticPages,
    ...blogPages,
    ...categoryPages,
    ...subcategoryPages,
    ...attractionPages,
  ];
}
