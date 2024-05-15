import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrinksMenu from "./components/DrinksMenu";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SelectedDrink from "./components/SelectedDrink";
import Categories from "./components/Categories";
import SelectedFlavor from "./components/SelectedFlavor";
import Ingredients from "./components/Ingredients";
import SelectedIngredients from "./components/SelectedIngredients";
import Autors from "./components/Autors";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/drinks-menu" element={<DrinksMenu />} />
        <Route exact path="/drink/:id" element={<SelectedDrink />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/ingredients" element={<Ingredients />} />
        <Route exact path="/flavor/:flavor" element={<SelectedFlavor />} />
        <Route exact path="/selectedIngredients" element={<SelectedIngredients />} />
        <Route exact path="/autors" element={<Autors />} />

      </Routes>
    </Router>
  );
}

export default App;
