import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import BrowserRouter, Routes, Route, and Link
import DrinksPage from "./components/DrinksPage"; // Import the DrinksPage component
import HomePage from "./components/HomePage"; // Import the HomePage component
import './App.css';

function App() {
  return (
    <Router>
      <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/drinks">Drinks</Link> {/* Link to the drinks page */}
            </li>
          </ul>
          
        <Routes>
          <Route exact path="/" element={<HomePage />} /> {/* Define a route for the home page */}
          <Route exact path="/drinks" element={<DrinksPage />} /> {/* Define a route for the drinks page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
