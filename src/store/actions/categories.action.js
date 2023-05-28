import { categoriesTypes } from "../types";

const { SELECT_CATEGORIES, FILTER_CATEGORY } = categoriesTypes;

export const selectCategory = (id) => ({
  type: SELECT_CATEGORIES,
  categorieId: id,
});

export const filterCategory = (id) => ({
  type: FILTER_CATEGORY,
  categoryId: id,
});
