import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Ingredients.css";
import drinkService from "../services/drinkService";
import { ingredientService } from "../services/ingredientService";

function Ingredients() {
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [error, setError] = useState(null); 
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const ingredientsData = await drinkService.getIngredients();
                setIngredients(ingredientsData);
            } catch (error) {
                setError(error);
            }
        };
        fetchIngredients();
    }, []);
// Ingredients.js
const handleCheckboxChange = async (event) => {
    const { value, checked } = event.target;
    let updatedSelectedIngredients;

    if (checked) {
        updatedSelectedIngredients = [...selectedIngredients, value];
    } else {
        updatedSelectedIngredients = selectedIngredients.filter((ingredient) => ingredient !== value);
    }

    setSelectedIngredients(updatedSelectedIngredients);

    // Check if any checkboxes are checked
    const anyCheckboxChecked = updatedSelectedIngredients.length > 0;

    try {
        let ingredientCombination;
        if (anyCheckboxChecked) {
            // Fetch ingredient combination only if checkboxes are checked
            ingredientCombination = await drinkService.getIngredientCombination(updatedSelectedIngredients);
        } else {
            // Fetch all ingredients if no checkboxes are checked
            ingredientCombination = await drinkService.getIngredients();
        }
        setIngredients(ingredientCombination);
    } catch (error) {
        setError(error);
    }
};





    const handleSearchButtonClick = async () => {
        try {
            ingredientService.setSelectedIngredients(selectedIngredients);
            navigate("/selectedIngredients");
        } catch (error) {
            setError(error);
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
            <div className="ingredients-container">
                <div className="header-container">
                    <h1 className="h1-name">Składniki</h1>
                    <button onClick={handleSearchButtonClick} className="submit-button">
                        Szukaj
                    </button>
                </div>
                <div className="checkbox-list">
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="checkbox-item">
                            <input
                                type="checkbox"
                                id={`ingredient-${index}`}
                                value={ingredient}
                                onChange={handleCheckboxChange}
                                checked={selectedIngredients.includes(ingredient)} // Check if ingredient is in selectedIngredients

                            />
                            <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Ingredients;
