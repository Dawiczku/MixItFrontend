import React, { useState, useEffect } from "react";
import drinkService from "../services/drinkService";

function DrinksPage() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const drinksData = await drinkService.getDrinks();
                setDrinks(drinksData);
            } catch (error) {
                console.error("Error in drinks page: ", error);
            }
        };

        fetchDrinks();
    }, []);

    return (
        <div>
            <h1>List of drinks</h1>
            <ul>
            {drinks.map((drink, index) => (
                    <li key={index}>{drink.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default DrinksPage;
