import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import drinkService from "../services/drinkService";

function HomePage() {
  const [drinks, setDrinks] = useState([]);
  const [showAgeConfirmation, setShowAgeConfirmation] = useState(false);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const drinksData = await drinkService.getDrinks();
        setDrinks(drinksData.slice(0, 6));
      } catch (error) {
        console.error("Error fetching drinks:", error);
      }
    };

    // Check if the user has confirmed their age
    const ageConfirmation = localStorage.getItem("ageConfirmation");
    if (!ageConfirmation) {
      setShowAgeConfirmation(true); // Show age confirmation modal
    }

    fetchDrinks();
  }, []);

  const handleAgeConfirmation = () => {
    // Set confirmation in local storage
    localStorage.setItem("ageConfirmation", "true");
    setShowAgeConfirmation(false); // Hide the age confirmation modal
  };

  const handleExit = () => {
    window.location.href = "https://google.pl"; // Redirect to google.pl
  };

  return (
    <div className="home-page">
      {drinks.map((drink, index) => (
        <Link className="home-page__drink" to={`/drink/${drink.id}`} key={index}>
          <div className="drink__name">{drink.name}</div>
        </Link>
      ))}

      {/* Age Confirmation Modal */}
      {showAgeConfirmation && (
        <div className="age-confirmation-modal">
          <div className="modal-content">
            <h2>Zatwierdź swój wiek</h2>
            <button onClick={handleAgeConfirmation}>Mam powyżej 18 lat</button>
            <button onClick={handleExit}>Wyjście</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
