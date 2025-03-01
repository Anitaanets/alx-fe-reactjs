import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  
  setSearchTerm: (term) => set((state) => {
    return { searchTerm: term, filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )};
  }),

  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),

  filteredRecipes: [], // ✅ Stores filtered recipes dynamically

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export default useRecipeStore;
