import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
    console.log(localStorage.getItem("favorites"));
  }, []);

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite drinks found.</p>
      ) : (
        <>
          {favorites.map((drink, index) => (
            <Link
              className="home-page__drink"
              to={`/drink/${drink.id}`}
              key={index}
              style={{ marginBottom: "20px" }}
            >
              <div className="drink__name">{drink.name}</div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default Favorites;
