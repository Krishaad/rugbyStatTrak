import React from "react";
import Navbar from "../navbar";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div style={styles.header}>
        <h1>Welcome to Rugby StatTrak </h1>
        <h2>All the Stats in one place</h2>
      </div>
      <div style={styles.mainCont}>
        <div style={styles.contLeft}>
          <h3>Player Stats</h3>
          <h4>
            In the Player Stats section, coaches and players gain valuable
            insights into individual performance metrics. Average and maximum
            heart rates offer a comprehensive view of cardiovascular exertion,
            aiding in understanding players' physical conditions during matches.
            The categorization of acceleration and deceleration efforts provides
            nuanced details about players' movement patterns, while the
            breakdown of velocity efforts distinguishes various playing styles,
            from jogging to sprinting.
          </h4>
        </div>
        <div style={styles.contMid}>
          <h3>Team Stats</h3>
          <h4>
            The Team Stats section presents a holistic overview of team dynamics
            and exertion. Metrics like Average Player Load, Max Velocity, and
            Total Distance Covered provide coaches with a comprehensive
            understanding of team-wide performance. Additionally, the breakdown
            of high-intensity running offers insights into intense efforts
            during matches, facilitating strategic planning for upcoming games.
            Total Distance Meters per Minute serves as a key indicator of the
            team's overall work rate.
          </h4>
        </div>
        <div style={styles.contRight}>
          <h3>Stats Prediction (Beta)</h3>
          <h4>
            In its beta phase, Stats Prediction provides anticipatory insights
            based on historical data. Metrics like contact involvement, work
            rate, and total distance offer valuable player performance details.
            While in beta, continuous refinement enhances its predictive
            capabilities, assisting coaches in strategic planning and player
            development.
          </h4>
        </div>
      </div>
    </div>
  );
}

const styles = {
  header: {
    textAlign: "center",
  },
  mainCont: {
    display: "flex",
    fontFamily: "Cambria",
    justifyContent: "space-between", // Adjust as needed
    padding: "40px", // Adjust as needed
    flexDirection: "row",
  },
  contLeft: {
    flex: 1,
    fontFamily: "Cambria",
    textAlign: "justify",
    lineHeight: "1.5",
    marginRight: "10px", // Adjust as needed
    backgroundColor: "#d0d0d0", // Example background color
    padding: "20px", // Adjust as needed
    borderRadius: "8px", // Optional: Add rounded corners
  },
  contMid: {
    flex: 1,
    fontFamily: "Cambria",
    textAlign: "justify",
    lineHeight: "1.5",
    marginRight: "10px", // Adjust as needed
    backgroundColor: "#d0d0d0", // Example background color
    padding: "20px", // Adjust as needed
    borderRadius: "8px", // Optional: Add rounded corners
  },
  contRight: {
    flex: 1,
    fontFamily: "Cambria",
    lineHeight: "1.5",
    textAlign: "justify",
    backgroundColor: "#d0d0d0", // Example background color
    padding: "20px", // Adjust as needed
    borderRadius: "8px", // Optional: Add rounded corners
  },
};

export default LandingPage;
