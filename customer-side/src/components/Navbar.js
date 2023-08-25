import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <h2>Workout Buddy</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
