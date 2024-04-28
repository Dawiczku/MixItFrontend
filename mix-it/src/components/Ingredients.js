import React, { useState, useEffect } from "react";
import "../styles/Ingredients.css";
import drinkService from "../services/drinkService";

function Ingredients() {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const ingredientsData = await drinkService.getIngredients();
                setIngredients(ingredientsData);
            } catch (error) {
                console.error("Error fetching ingredients:", error);
            }
        };
        fetchIngredients();
    }, []);

    return (
        <div className="ingredients-container">
            <h1 className="h1-name">Składniki</h1>
            <div className="checkbox-list">
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="checkbox-item">
                        <input type="checkbox" id={`ingredient-${index}`} value={ingredient} />
                        <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ingredients;
