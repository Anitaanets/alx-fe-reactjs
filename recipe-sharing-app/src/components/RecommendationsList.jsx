import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  searchTerm: '', // 🔥 Added searchTerm to prevent the missing error
  setSearchTerm: (term) => set({ searchTerm: term }), // 🔥 Added setSearchTerm

  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Mock recommendations based on favorites
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
