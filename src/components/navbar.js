// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  position: "fixed",
  background: "#0000ff",
  color: "#fff",
};

const logoStyle = {
  width: "100px",
  heaights: "100px",
  marginRight: "5px",
  marginLeft: "-10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 20px",
};

const navbar = () => {
  return (
    <nav style={navbarStyle}>
      <Link to="/LandingPage" style={linkStyle}>
        <img
          src={process.env.PUBLIC_URL + "/images/Rugby-Union-Mens.jpg"}
          alt="Logo"
          style={logoStyle}
        />
      </Link>

      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ display: "inline" }}>
          <Link to="/TeamStats" style={linkStyle}>
            Team StatTrak
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link to="/PlayerStats" style={linkStyle}>
            Player StatTrak
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link to="/PredictionsPage" style={linkStyle}>
            Stats Predictions (Beta)
          </Link>
        </li>
      </ul>

      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 20,
          marginLeft: "auto",
        }}
      >
        <li style={{ display: "inline" }}>
          <Link to="/LoginPage" style={linkStyle}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
