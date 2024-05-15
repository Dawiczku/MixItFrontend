// Autors.js
import React from "react";
import "../styles/Autors.css";

function Autors() {
  return (
    <div className="autors-container">
      <h1>Autorzy</h1>
      <div className="autors-grid">
        <div className="autor">
          <h2>Bartosz Janiszewski</h2>
        </div>
        <div className="autor">
          <h2>Adam Walkowiak</h2>
        </div>
        <div className="autor">
          <h2>Bartłomiej Ostrycharz</h2>
        </div>
        <div className="autor">
          <h2>Dawid Skarupski</h2>
        </div>
      </div>
    </div>
  );
}

export default Autors;
