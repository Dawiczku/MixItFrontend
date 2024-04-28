import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import drinkService from "../services/drinkService";
import "../styles/SelectedFlavor.css";

function SelectedFlavor() {
  const [drinks, setDrinks] = useState([]);
  const {flavor} = useParams()

  useEffect(() => {
    const fetchDrinksByFlavor = async () => {
      try {
        const drinksData = await drinkService.getDrinksByFlavor(flavor);
        setDrinks(drinksData);
      } catch (error) {
        console.log("Error fetching drinks by flavor", error);
      }
    };
    fetchDrinksByFlavor();
  }, [flavor]);

  return (
    <div className="drinks-container">
      <h1>{flavor}</h1>
      <div className="drink-list">
        {drinks.map((drink, index) => (
          <div key={index} className="drink-item">
            <Link to={`/drink/${drink.id}`}>{drink.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedFlavor;
