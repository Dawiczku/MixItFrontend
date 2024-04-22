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

    return (
        <div className="selected-drink">
            <ul>
                <li>     
                    <div>
                        {drink && <p>{drink.name}</p>}
                    </div>
                </li>
                <li>
                    <div>
                       <p>PHOTO</p>
                    </div>
                </li>
                <li>
                    <div>
                        {drink && (
                            <ol className="ingredients-list">
                                {drink.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ol>
                        )}
                    </div>
                </li>
                <li>
                    <div>
                        {drink && <p>{drink.howToMake}</p>}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default SelectedDrink;
