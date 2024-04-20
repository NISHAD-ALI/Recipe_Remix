import React, { useState } from 'react';
import axios from 'axios';
import './Header.css'
const Header = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = async () => {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
          setRecipes(response.data.meals);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
  return (
    <div className="bg-slate-800">
    <h1>Recipe Search App</h1>
    <input 
      type='text' 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      placeholder='Enter recipe name' 
    />
    <button onClick={handleSearch}>Search</button>
    <div className="recipes">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe">
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h2>{recipe.strInstructions}</h2>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Header
