import { categoriesData } from "../../../lib/categories";

export async function generateMetadata({ params }) {
  const category = categoriesData.categories.find(
    (cat) => cat.id === params.categoryId
  );

  if (!category) {
    return {
      title: "קטגוריה לא נמצאה - OR Productions",
      description:
        "הקטגוריה המבוקשת לא נמצאה. חזרו לעמוד הראשי לראות את כל האטרקציות שלנו.",
    };
  }

  const title = `${category.name} - השכרה לאירועים | OR Productions`;
  const description = `השכירו ${category.name} לאירוע שלכם ✨ ${category.description} מגוון רחב של אטרקציות מקצועיות. מחירים הוגנים ושירות מהיר!`;
  const imageUrl = `https://res.cloudinary.com/your-cloud/image/upload/v1/${
    category.image || "default-category"
  }`;

  // Count total attractions in category
  const totalAttractions =
    category.subCategories?.reduce(
      (total, sub) => total + (sub.attractions?.length || 0),
      0
    ) || 0;

  return {
    title,
    description,
    keywords: `${category.name}, השכרת ${category.name}, אטרקציות לאירועים, ${category.name} להשכרה, אירועים בישראל, חתונות, בר מצווה`,

    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
      type: "website",
      url: `https://orproductions.co.il/category/${category.id}`,
      siteName: "OR Productions",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },

    other: {
      "category:name": category.name,
      "category:items_count": totalAttractions.toString(),
      "category:type": "event_equipment",
    },
  };
}

export default function CategoryLayout({ children }) {
  return children;
}
