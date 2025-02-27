import { useNavigate } from "react-router-dom"; // ✅ Added useNavigate
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const handleDelete = () => {
    if (!recipeId) return; // ✅ Prevent errors if recipeId is missing

    deleteRecipe(recipeId);

    if (onDelete) {
      onDelete(); // ✅ Call onDelete callback if provided
    } else {
      navigate("/"); // ✅ Redirect user to home or another page after deletion
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
