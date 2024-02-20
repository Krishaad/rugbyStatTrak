// LoginPage.js
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials (replace with your authentication logic)
    if (username === "demo" && password === "demo") {
      setSuccess(true);
      setError("");
      navigate("/LandingPage");
    } else {
      setError("Invalid username or password");
      setSuccess(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <img
          src={process.env.PUBLIC_URL + "/images/Rugby-Union-Mens.jpg"}
          alt="Logo"
          style={styles.logo}
        />
      </div>

      <div style={styles.rightPanel}>
        <h2>Login Page</h2>
        <form style={styles.form} onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </label>
          <br />
          {error && <div style={{ color: "red" }}>{error}</div>}
          {success && <div style={{ color: "green" }}>Login successful!</div>}
          <br />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  leftPanel: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: "80%", // Adjust based on your needs
    maxWidth: "1000px", // Set a maximum width to prevent the image from becoming too large
  },
  rightPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default LoginPage;
