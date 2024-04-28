import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, Route, and Link
import DrinksMenu from "./components/DrinksMenu"; // Import the DrinksPage component
import HomePage from "./components/HomePage"; // Import the HomePage component
import Navbar from "./components/Navbar";
import SelectedDrink from "./components/SelectedDrink";
import Categories from "./components/Categories";
import SelectedFlavor from "./components/SelectedFlavor";
import Ingredients from "./components/Ingredients";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/drinks-menu" element={<DrinksMenu />} />
        <Route exact path="/drink/:id" element={<SelectedDrink />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/ingredients" element={<Ingredients />} />
        <Route exact path="/flavor/:flavor" element={<SelectedFlavor />} />
      </Routes>
    </Router>
  );
}

export default App;
