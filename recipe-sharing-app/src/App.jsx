import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Added Router
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // ✅ Import SearchBar
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';
function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar /> {/* ✅ Add SearchBar */}
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;