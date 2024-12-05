import React, { useState } from "react";
import axios from "axios";
import './delete-recipe.css';

const DeleteRecipes = () => {
    const [recipesDeleted, setRecipesDeleted] = useState(false);

    const deleteRecipes = async () => {
        try {
            const response = await axios.delete('http://localhost:8080/recipes');
            setRecipesDeleted(true);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="delete-recipes-container">
            <button className="delete-recipes-button" onClick={deleteRecipes}>Delete Recipes</button>
            {recipesDeleted && <p className="delete-recipes-success-message">Recipes deleted successfully!</p>}
        </div>
    )
}

export default DeleteRecipes;