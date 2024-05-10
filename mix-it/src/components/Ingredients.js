import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Ingredients.css";
import drinkService from "../services/drinkService";
import { ingredientService } from "../services/ingredientService"; // Import ingredientService

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

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedIngredients([...selectedIngredients, value]);
        } else {
            setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient !== value));
        }
    };

    const handleSearchButtonClick = async () => {
        console.log("Selected Ingredients:", selectedIngredients); 
        try {
            const recipes = await drinkService.getRecipesByIngredients(selectedIngredients);
            console.log("Recipes:", recipes); 
            ingredientService.setSelectedIngredients(selectedIngredients); // Pass selected ingredients to ingredientService
            navigate("/selectedIngredients"); // Redirect to selectedIngredients route
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
