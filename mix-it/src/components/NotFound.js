// NotFound.jsx
import React from "react";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found__wrapper">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">Page Not Found</p>
        <a href="/" className="not-found__link">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
