import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './recipe.css';

const RecipeDisplay = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(21);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');

        if (response.data && response.data.recipes) {
          const firstThree = response.data.recipes.slice(0, limit);
          setRecipes(firstThree);
        } else {
          setError('No recipe data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message || 'An error occurred while fetching data');
      }
    };
    fetchRecipes();
  }, []); 

  return (
    <div className="recipe-container">
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <h1 className="recipe-title">{recipe.name}</h1>
              <img src={recipe.image} alt={recipe.name} />
              <h2 className="cuisine-title">Cuisine: {recipe.cuisine}</h2>
              <h2 className="rating-title">
                Rating: {recipe.rating} ({recipe.reviewCount} reviews)
              </h2>
              <h2 className="ingredients-title">Ingredients: </h2>
              <ul className="ingredients-list">
                {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h2 className="instructions-title">Instructions:</h2>
              <ol className="instructions-list">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeDisplay;