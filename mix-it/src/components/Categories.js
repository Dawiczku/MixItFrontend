import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../styles/Categories.css";
import drinkService from "../services/drinkService";

function Categories() {
    const [flavors, setFlavors] = useState([]);

    useEffect(() => {
        const fetchFlavors = async () => {
            try {
                const flavorsData = await drinkService.getFlavors();
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
                   <Link to={`/flavor/${flavor}`} key={index} className="grid-item">
                        {flavor}
                   </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;
