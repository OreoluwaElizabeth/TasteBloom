import React , { useState, useEffect } from 'react';
import axios from 'axios';
import './view-recipe.css';

const ViewRecipe = () => {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get('http://localhost:8080/recipes');
          setRecipes(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchRecipes();
    }, []);
  
    return (
      <div className="view-recipe-container">
        <h1 className="view-recipe-title">Recipes</h1>
        {recipes.length > 0 ? (
          <ul className="view-recipe-list">
            {recipes.map((recipe, index) => (
              <li key={index} className="view-recipe-item">
                <h2 className="view-recipe-name">{recipe.name}</h2>
                <p className="view-recipe-description">{recipe.description}</p>
                <p className="view-recipe-ingredients">Ingredients: {recipe.ingredients}</p>
                <p className="view-recipe-instructions">Instructions: {recipe.instructions}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="view-recipe-no-recipes">No recipes found.</p>
        )}
      </div>
    );
};

export default ViewRecipe;