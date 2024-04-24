import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, Route, and Link
import DrinksMenu from "./components/DrinksMenu"; // Import the DrinksPage component
import HomePage from "./components/HomePage"; // Import the HomePage component
import Navbar from "./components/Navbar";
import SelectedDrink from "./components/SelectedDrink";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/drinks-menu" element={<DrinksMenu />} />
        <Route exact path="/drink/:id" element={<SelectedDrink />} />
      </Routes>
    </Router>
  );
}

export default App;
