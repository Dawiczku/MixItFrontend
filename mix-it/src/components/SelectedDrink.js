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
        // const drinkData = {
        //   _id: {
        //     $oid: "66100646fe2ccf09c43c9985",
        //   },
        //   name: "modzajtko version 2",
        //   flavor: "SWEET",
        //   baseAlcohol: "RUM",
        //   ingredients: [
        //     "świeża mięta",
        //     "cukier trzcinowy",
        //     "sok z limonki",
        //     "soda",
        //     "biały rum",
        //   ],
        //   strength: 8,
        //   howToMake:
        //     "W dużym kieliszku zgnieść 6-8 listków mięty z 2 łyżeczkami cukru. Dodać sok z limonki i rozpuścić cukier. Dodać kilka kostek lodu i wlać rum. Dopełnić napojem gazowanym. Wymieszać i udekorować gałązką mięty i plasterkiem limonki.",
        //   rating: 5,
        //   _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        // };

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
    <div className="selected-drink__wrapper">
      <fieldset className="selected-drink selected-drink__ingredients">
        <legend>Skladniki</legend>
        {drink && (
          <ol className={`ingredients-list ${drink.ingredients.length > 5 ? 'multi-column' : ''}`}>
            {drink.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="dash">-</span> {ingredient}
              </li>
            ))}
          </ol>
        )}
      </fieldset>
      <fieldset className="selected-drink selected-drink__photo">
        <legend>Zdjecie</legend>
        <p>PHOTO</p>
      </fieldset>
      <fieldset className="selected-drink selected-drink__recipe">
        <legend>Przepis</legend>
        {drink && <p>{drink.howToMake}</p>}
      </fieldset>
      <fieldset className="selected-drink selected-drink__name">
        <legend>Nazwa</legend>
        {drink && <p>{drink.name}</p>}
      </fieldset>
    </div>
  );
  
}

export default SelectedDrink;
