import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PlayerDetails = ({ player, onClose }) => {
  return (
    <div>
      <div>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>
          Name: {player.first_name} {player.last_name}
        </h2>
        <h5>Player ID: {player.tag_name}</h5>
        <h5>{player.id}</h5>
        <h5>Position: {player.position_name}</h5>

        <div style={styles.progressBar}>
          <CircularProgressbar
            value={player.velocity_max}
            maxValue={15}
            text={Math.round(player.velocity_max * 100) / 100 + " m/s"}
          />
          <h3>Max velocity</h3>
        </div>

        <div style={styles.progressBar}>
          <CircularProgressbar
            value={player.heart_rate_max}
            maxValue={15}
            text={Math.round(player.heart_rate_max * 100) / 100 + " bpm"}
          />
          <h3>Max Heart Rate</h3>
        </div>
      </div>

      {/* Add more details or content as needed */}
    </div>
  );
};

const styles = {
  closeButton: {
    padding: "8px",
    position: "absolute",
    transition: "#add8e6 0.8s",
    top: "120px",
    background: "#add8e6",
    right: "60px", // Align to the right
    cursor: "pointer",
    fontSize: "14px",

    backgroundColor: "transparent",
    border: "1px solid #6495ED",
  },
  progressBar: {
    pathTransitionDuration: 0.5,
    fontSize: 10,
    width: 100,
  },
};

export default PlayerDetails;
