import { createSelector } from "reselect";

// Extract category slice of reducer from root reducer.
const selectCategoryReducer = (state) => state.categories;

// Create memoized selector for categories object.
export const selectCategories = createSelector(
  // The input is the reducer slice, categories, from rootReducer.
  // This should not change unless data from Firestore API changes.
  [selectCategoryReducer],

  // Check if object within reducer slice is different. If so, re-render. If not, don't re-render.
  (categoriesSlice) => categoriesSlice.categories
);

// Create memoized selector for the transformed categoriesMap object.
// Do not re-run reduce method if categoriesArray has not changed.
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;

      // Add next object (e.g. floor) to the accumulator object (categoryMap)
      // E.g. acc["floor"] = floor_object
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

// Select isLoading value
export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
