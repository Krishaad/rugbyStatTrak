import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PlayerStats from "./pages/PlayerStats";
import TeamStats from "./pages/TeamStats";
import PredictionsPage from "./pages/PredictionsPage";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "PlayerStats",
    element: <PlayerStats />,
  },
  {
    path: "TeamStats",
    element: <TeamStats />,
  },

  {
    path: "PredictionsPage",
    element: <PredictionsPage />,
  },
  {
    path: "LandingPage",
    element: <LandingPage />,
  },
  {
    path: "LoginPage",
    element: <LoginPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
