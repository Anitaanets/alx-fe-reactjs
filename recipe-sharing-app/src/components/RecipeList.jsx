import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes } = useRecipeStore();
  const displayRecipes = filteredRecipes.length ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;