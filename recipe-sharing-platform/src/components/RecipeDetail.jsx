import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Extract recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  // Fetch recipe data when component mounts
  useEffect(() => {
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  // Handle invalid recipe ID
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-500 text-xl">
        Recipe not found! 
        <Link to="/" className="ml-2 text-blue-500 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

          <h2 className="text-2xl font-semibold mt-4 mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions</h2>
          <p className="text-gray-600 dark:text-gray-300">{recipe.instructions}</p>

          <Link
            to="/"
            className="block mt-6 text-blue-500 hover:underline text-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
