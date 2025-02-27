import { useState } from 'react';
import useRecipeStore from '../components/recipeStore'; // ✅ Corrected import

const EditRecipeForm = ({ recipe }) => {
  // ✅ Prevent errors if recipe is undefined
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Added event.preventDefault()
    
    // ✅ Ensure the recipe object exists before updating
    if (!recipe) return;

    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
