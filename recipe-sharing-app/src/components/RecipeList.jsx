import { Link } from 'react-router-dom';
import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes);
  
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
