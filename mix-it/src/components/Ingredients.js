import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
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

    const handleSubmit = () => {
        console.log("Submit button clicked");
    };

    return (
        <div className="ingredients-container">
            <div className="header-container">
                <h1 className="h1-name">Składniki</h1>
                <Link to="/selectedIngredients" className="submit-button">Szukaj</Link>
            </div>
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
