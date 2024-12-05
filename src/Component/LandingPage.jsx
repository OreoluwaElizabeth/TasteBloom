import React from 'react';
import './landing-page.css';
import RecipeDisplay from './RecipeDisplay';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='hero-section'>
                <div className='overlay'>
                    <h1>Welcome to TasteBloom</h1>
                    <p>Taste the Magic: Discover New Recipes, 
                        Create Your Own Masterpieces.
                    </p>
                </div>
            </div>
            <div className='cta-section'>
                <button>Get Started</button>
                <p>Explore our collection of recipes and cooking tips</p>
            </div>
            <RecipeDisplay />
        </div>
    )
};

export default LandingPage;