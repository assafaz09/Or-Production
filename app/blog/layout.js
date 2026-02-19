export const viewport = "width=device-width, initial-scale=1";

export const metadata = {
  title: "בלוג OR Productions - מדריכים ועצות לאירועים מושלמים",
  description:
    "מדריכים מקצועיים לתכנון אירועים מושלמים 📚 עצות לבחירת ספקים, טיפים לאירועים וכל מה שצריך לדעת על השכרת ציוד לאירועים",
  keywords:
    "בלוג אירועים, מדריכים לאירועים, עצות לחתונות, טיפים לבר מצווה, תכנון אירועים, השכרת ציוד",

  openGraph: {
    title: "בלוג OR Productions - מדריכים לאירועים",
    description: "מדריכים מקצועיים ועצות לתכנון אירועים מושלמים",
    images: [
      {
        url: "https://res.cloudinary.com/your-cloud/image/upload/v1/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "בלוג OR Productions",
      },
    ],
    type: "website",
    url: "https://orproductions.co.il/blog",
    siteName: "OR Productions",
  },

  twitter: {
    card: "summary_large_image",
    title: "בלוג OR Productions - מדריכים לאירועים",
    description: "מדריכים מקצועיים ועצות לתכנון אירועים מושלמים",
    images: [
      "https://res.cloudinary.com/your-cloud/image/upload/v1/blog-og-image.jpg",
    ],
  },
};

export default function BlogLayout({ children }) {
  return children;
}
