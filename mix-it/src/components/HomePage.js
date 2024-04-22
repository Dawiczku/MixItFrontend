import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import drinkService from "../services/drinkService";

function HomePage() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const drinksData = await drinkService.getDrinks();
                setDrinks(drinksData.slice(0, 4)); // Display only the first four drinks
            } catch (error) {
                console.error("Error fetching drinks:", error);
            }
        };

        fetchDrinks();
    }, []);

    return (
        <div className="home-page">
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>
                        <div><Link to={`/drink/${drink.id}`}><h2>{drink.name}</h2></Link></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
