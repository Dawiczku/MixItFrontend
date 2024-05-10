import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SelectedIngredients.css";
import { ingredientService } from "../services/ingredientService";
import drinkService from "../services/drinkService";

function SelectedIngredients() {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const selectedIngredients = ingredientService.getSelectedIngredients();
                const recipesData = await drinkService.getRecipesByIngredients(selectedIngredients);
                setRecipes(recipesData);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    const handleDrinkClick = (drinkId) => {
        navigate(`/drink/${drinkId}`);
    };

    return (
        <div className="selected-ingredients-container">
            <h2>Drinki:</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index} onClick={() => handleDrinkClick(recipe.id)}>
                        {recipe.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SelectedIngredients;
