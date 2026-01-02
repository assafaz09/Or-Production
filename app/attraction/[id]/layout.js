import { getAllAttractions } from "../../../lib/categories";

export async function generateMetadata({ params }) {
  const attractions = getAllAttractions();
  const attraction = attractions.find(
    (attr) => attr.id === parseInt(params.id)
  );

  if (!attraction) {
    return {
      title: "אטרקציה לא נמצאה - OR Productions",
      description:
        "האטרקציה המבוקשת לא נמצאה. חזרו לעמוד הראשי לראות את כל האטרקציות שלנו.",
    };
  }

  const title = `${attraction.name} - השכרה לאירועים | OR Productions`;
  const description = `השכירו ${
    attraction.name
  } לאירוע שלכם ✨ ${attraction.description.substring(0, 120)}... מחיר: ₪${
    attraction.price
  }. הזמינו עכשיו!`;
  const imageUrl = `https://res.cloudinary.com/your-cloud/image/upload/v1/${
    attraction.images?.[0] || "default-image"
  }`;

  return {
    title,
    description,
    keywords: `${attraction.name}, השכרת ${attraction.category}, אטרקציות לאירועים, ${attraction.name} להשכרה, אירועים בישראל`,

    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: attraction.name,
        },
      ],
      type: "website",
      url: `https://orproductions.co.il/attraction/${attraction.id}`,
      siteName: "OR Productions",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },

    other: {
      "product:price:amount": attraction.price,
      "product:price:currency": "ILS",
      "product:availability": "in stock",
      "product:category": attraction.category,
    },
  };
}

export default function AttractionLayout({ children }) {
  return children;
}
