import React, { useState, useEffect } from "react";
import AthletesInGivenActivity from "./AthletesInGivenActivity";

const ActivityDetails = ({ activity, onClose }) => {
  const [activeTab, setActiveTab] = useState("activity");

  useEffect(() => {
    // Fetch athletes when the component mounts
    // (Similar to the previous code)
  }, [activity.id]);

  const handleAthleteClick = (athlete) => {
    // Trigger a function to show individual stats for the selected athlete
    console.log("Display stats for athlete:", athlete);
  };

  return (
    <div style={styles.modalContainer}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={onClose}>
          Close
        </button>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            style={{
              ...styles.tabButton,
              background: activeTab === "activity" ? "#add8e6" : "transparent",
            }}
            onClick={() => setActiveTab("activity")}
          >
            Activity
          </button>
          <button
            style={{
              ...styles.tabButton,
              background: activeTab === "players" ? "#add8e6" : "transparent",
            }}
            onClick={() => setActiveTab("players")}
          >
            Players
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "activity" && (
          <div>
            <h2>Activity details</h2>
            <p>Activity ID: {activity.id}</p>

            {/* Render details for each period */}
            {activity.periods && activity.periods.length > 0 && (
              <div>
                <h3>Periods:</h3>
                <ul style={styles.ul}>
                  {activity.periods.map((period, index) => (
                    <li key={index} style={styles.il}>
                      <strong>{period.name}</strong>
                      <br />
                      Start Time:{" "}
                      {new Date(period.start_time * 1000).toLocaleString()}
                      <br />
                      End Time:{" "}
                      {new Date(period.end_time * 1000).toLocaleString()}
                      {/* Add more details as needed */}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "players" && (
          <div>
            <h2>Activity Name: {activity.name}</h2>

            <AthletesInGivenActivity
              activityId={activity.id}
              onAthleteClick={handleAthleteClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};
const styles = {
  tabButton: {
    padding: "10px",
    cursor: "pointer",
    border: "1px solid #6495ED",
    background: "#add8e6",
    transition: "#add8e6 0.8s",
    marginRight: "10px",
    borderRadius: "5px",
  },

  tabs: {
    display: "flex",
    marginBottom: "10px",
  },
  closeButton: {
    padding: "8px",
    position: "absolute",
    transition: "#add8e6 0.8s",
    top: "25px",
    background: "red",
    right: "60px", // Align to the right
    cursor: "pointer",
    fontSize: "14px",
    borderRadius: "5px",
    backgroundColor: "transparent",
    border: "1px solid #6495ED",
  },

  ul: {
    display: "flex",

    flexWrap: "wrap", // Allow items to wrap to the next row
    maxHeight: "450px", // Set a max height for the container
    maxWidth: "400px", // Set a max width for the container
    overflowY: "auto", // Add a scrollbar when items exceed the max height
  },
  li: {
    flex: "0 0 100%", // Set each list item to take 50% of the width
  },
};

export default ActivityDetails;
