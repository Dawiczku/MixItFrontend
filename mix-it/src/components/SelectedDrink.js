import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/SelectedDrink.css";
import drinkService from "../services/drinkService";

function SelectedDrink() {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    const fetchDrinkById = async () => {
      try {
        const drinkData = await drinkService.getDrinkById(id);

        setDrink(drinkData);
      } catch (error) {
        console.error("Error fetching drink details:", error);
      }
    };

    if (id) {
      fetchDrinkById();
    }
  }, [id]);

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = [...favorites, drink];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    alert(`${drink.name} has been added to your favorites!`);
  };

  return (
    <div className="selected-drink__wrapper">
      <fieldset className="selected-drink selected-drink__ingredients">
        <legend>Skladniki</legend>
        {drink && (
          <ol
            className={`ingredients-list ${drink.ingredients.length > 5 ? "multi-column" : ""}`}
          >
            {drink.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="dash">-</span> {ingredient}
              </li>
            ))}
          </ol>
        )}
      </fieldset> 
      <fieldset className="selected-drink selected-drink__photo">
        <legend>{drink && drink.name}</legend>
        <div className="selected-drink__image-wrapper">
          <img src={drink && drink.imageUrl} alt={drink && drink.name} className="selected-drink__image" />
        </div>
      </fieldset>
      <fieldset className="selected-drink selected-drink__recipe">
        <legend>Przepis</legend>
        {drink && <p>{drink && drink.howToMake}</p>}
        <button className="add-to-favorites" onClick={addToFavorites}>
          Add to Favorites
        </button>
      </fieldset>
    </div>
  );
}

export default SelectedDrink;
