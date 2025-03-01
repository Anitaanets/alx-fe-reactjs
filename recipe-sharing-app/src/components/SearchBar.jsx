import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const { setSearchTerm } = useRecipeStore();

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
    />
  );
};

export default SearchBar;
