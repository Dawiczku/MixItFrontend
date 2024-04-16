import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, Route, and Link
import DrinksPage from "./components/DrinksPage"; // Import the DrinksPage component
import HomePage from "./components/HomePage"; // Import the HomePage component
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
        <Navbar></Navbar>
        
        <Routes>
          <Route exact path="/" element={<HomePage />} /> 
          <Route exact path="/drinks-menu" element={<DrinksPage />} /> 
        </Routes>
     
    </Router>
  );
}

export default App;
