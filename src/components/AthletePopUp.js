import React from "react";
import HrGraph from "./hrGraph";
import PlayerLoadGraph from "./playerLoadGraph";

function AthletePopUp({ athleteId, athleteName, activityId, onClose }) {
  return (
    <div style={styles.modalContainer}>
      <div style={styles.modalContent}>
        <p>Activity ID: {activityId}</p>
        <p>Athlete ID: {athleteId}</p>
        <p>Athlete Name: {athleteName}</p>

        <div style={styles.graph}>
          <HrGraph
            styles={styles.graph}
            athleteId={athleteId}
            activityId={activityId}
          />
        </div>

        <div style={styles.graph}>
          <PlayerLoadGraph
            styles={styles.graph}
            athleteId={athleteId}
            activityId={activityId}
          />
        </div>
      </div>

      <button style={styles.closeButton} onClick={onClose}>
        Close
      </button>
    </div>
  );
}

const styles = {
  graph: {
    display: "flex",
    flexDirection: "column",
  },
  modalContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    zIndex: "1000",
    width: "1000px",
    height: "600px",

    textAlign: "center",
  },

  modalContent: {
    textAlign: "center",
  },

  closeButton: {
    top: "100px",
  },
};

export default AthletePopUp;
