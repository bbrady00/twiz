import React from "react";
import { Link } from "react-router-dom";
import "'../../assets/styles/error.css";

const Error = () => {
  return (
    <div className="error-page">
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default Error;
