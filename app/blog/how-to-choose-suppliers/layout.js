export const viewport = "width=device-width, initial-scale=1";

export const metadata = {
  title: "איך לבחור ספקים נכון לאירוע - מדריך מקיף | OR Productions",
  description:
    "מדריך מקיף לבחירת ספקים מקצועיים לאירוע שלכם 🎯 טיפים חשובים, שאלות לשאול ומה לבדוק לפני החתימה על החוזה",
  keywords:
    "בחירת ספקים לאירועים, ספקי אירועים, איך לבחור ספק, מדריך ספקים, חתונות, בר מצווה, אירועי חברה",

  openGraph: {
    title: "איך לבחור ספקים נכון לאירוע - מדריך מקיף",
    description:
      "מדריך מקיף לבחירת ספקים מקצועיים לאירוע שלכם. טיפים חשובים ועצות מעשיות",
    images: [
      {
        url: "https://res.cloudinary.com/your-cloud/image/upload/v1/IMG_1833_hnfpnv",
        width: 1200,
        height: 630,
        alt: "איך לבחור ספקים לאירועים",
      },
    ],
    type: "article",
    url: "https://orproductions.co.il/blog/how-to-choose-suppliers",
    siteName: "OR Productions",
    publishedTime: "2024-01-15T10:00:00.000Z",
    authors: ["OR Productions"],
  },

  twitter: {
    card: "summary_large_image",
    title: "איך לבחור ספקים נכון לאירוע - מדריך מקיף",
    description: "מדריך מקיף לבחירת ספקים מקצועיים לאירוע שלכם",
    images: [
      "https://res.cloudinary.com/your-cloud/image/upload/v1/IMG_1833_hnfpnv",
    ],
  },

  other: {
    "article:author": "OR Productions",
    "article:section": "מדריכים",
    "article:tag": "ספקי אירועים, בחירת ספקים, אירועים",
  },
};

export default function HowToChooseSuppliersLayout({ children }) {
  return children;
}
