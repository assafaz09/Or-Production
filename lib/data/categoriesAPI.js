// API for lazy loading categories and attractions
let categoriesCache = null;

export const loadCategories = async () => {
  if (!categoriesCache) {
    const { categoriesData } = await import("../categories.js");
    categoriesCache = categoriesData.categories;
  }
  return categoriesCache;
};

export const getCategoryById = async (id) => {
  const categories = await loadCategories();
  return categories.find((cat) => cat.id === id);
};

export const getAttractionById = async (id) => {
  const categories = await loadCategories();
  for (const category of categories) {
    for (const subCategory of category.subCategories) {
      const attraction = subCategory.attractions.find(
        (attr) => attr.id === parseInt(id)
      );
      if (attraction) {
        return {
          ...attraction,
          categoryId: category.id,
          categoryName: category.name,
          subCategoryId: subCategory.id,
          subCategoryName: subCategory.name,
        };
      }
    }
  }
  return null;
};

export const searchAttractions = async (query) => {
  const categories = await loadCategories();
  const results = [];
  const searchTerm = query.toLowerCase();

  for (const category of categories) {
    for (const subCategory of category.subCategories) {
      for (const attraction of subCategory.attractions) {
        if (
          attraction.name.toLowerCase().includes(searchTerm) ||
          attraction.description.toLowerCase().includes(searchTerm)
        ) {
          results.push({
            ...attraction,
            categoryId: category.id,
            categoryName: category.name,
            subCategoryId: subCategory.id,
            subCategoryName: subCategory.name,
          });
        }
      }
    }
  }

  return results;
};

export const getAttractionsByCategory = async (categoryId) => {
  const category = await getCategoryById(categoryId);
  if (!category) return [];

  const attractions = [];
  for (const subCategory of category.subCategories) {
    for (const attraction of subCategory.attractions) {
      attractions.push({
        ...attraction,
        categoryId: category.id,
        categoryName: category.name,
        subCategoryId: subCategory.id,
        subCategoryName: subCategory.name,
      });
    }
  }

  return attractions;
};
