import React, { useState } from 'react';
import axios from 'axios';
import './update-recipe.css';

const UpdateRecipe = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [mealType, setMealType] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put('http://localhost:8080/recipes/update/{{id}}', {
                name: name,
                description: description,
                ingredients: ingredients,
                instructions: instructions,
                mealType: mealType
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setError('An error occurred. Please try again.');
        }
    }
    return (
        <div className='update-recipe-container'>
            <h2 className='update-recipe-title'>Update Recipe</h2>
            <form onSubmit={handleSubmit} className='update-recipe-form'>
                <div className='form-group'>
                    <label className='form-label'>Name:</label>
                    <input type='text' value={name} 
                    onChange={(e) => setName(e.target.value)} className='form-input'/>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='form-textarea'/>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Ingredients:</label>
                    <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} className='form-textarea'/>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Instructions:</label>
                    <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} className='form-textarea'/>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Meal Type:</label>
                    <select value={mealType} onChange={(e) => setMealType(e.target.value)} className='form-select'>
                        <option value="">Select Meal Type</option>
                        <option value="STEW">Stew</option>
                        <option value="SOUP">Soup</option>
                        <option value="RICE">Rice</option>
                    </select>
                </div>
                <button type='submit' className='form-button'>Update Recipe</button>
                {error && <p className='error-message'>{error}</p>}
            </form>
        </div>
    )
}

export default UpdateRecipe;