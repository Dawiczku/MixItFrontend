import React, { useState, useEffect } from "react";
import "../styles/Categories.css";
import drinkService from "../services/drinkService";

function Categories() {
    const [flavors, setFlavors] = useState([]);

    useEffect(() => {
        const fetchFlavors = async () => {
            try {
                const flavorsData = await drinkService.getFlavors();
                // Update the state with fetched flavors
                setFlavors(flavorsData);
            }
            catch (error) {
                console.log("Error fetching flavors", error)
            }
        };
        fetchFlavors();
    }, []);

    return (
        <div className="grid-container">
            <h1>Kategorie</h1>
            <div className="grid">
                {flavors.map((flavor, index) => (
                    <div key={index} className="grid-item">
                        {flavor}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
