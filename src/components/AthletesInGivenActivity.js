import React, { useState, useEffect } from "react";
import AthletePopUp from "./AthletePopUp";

const AthletesInGivenActivity = ({ activityId, onAthleteClick }) => {
  const [athletes, setAthletes] = useState([]);
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [isPopUP, setPopUp] = useState(null);

  useEffect(() => {
    const fetchAthletes = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0NjFiMTExMS02ZjdhLTRkYmItOWQyOS0yMzAzOWZlMjI4OGUiLCJqdGkiOiJkOWRjYWQ1ZDMzNTcwYjFiOWJkN2E3MmUwNzIwZWY1MDVhYjM2NzkzM2ZkN2QwOTYwNDk2OWNhMDJmYzgwZGMxMmEzYTFhMGNmODc4MTgwMSIsImlhdCI6MTcwMTc5OTAxNi4zMzc0NTUsIm5iZiI6MTcwMTc5OTAxNi4zMzc0NTcsImV4cCI6NDg1NTM5OTAxNi4zMjc5NTMsInN1YiI6ImNjNjliNWVjLTRiNjktNGQ4Yi04NWM2LTUzNjRjNGYzNjU0ZCIsInNjb3BlcyI6WyJjb25uZWN0Iiwic2Vuc29yLXJlYWQtb25seSJdfQ.fzEY3fKHvEeT19pIUg5UWkS14PbfXjEKIxfoLJSnUzigJcVn0P6s02-mRkfjGgMKzmrgacrG83J1Q6BWAsGh9P-gFyKq7x5JcUIdupfFCepHLrmnOxwm0Y8jewYTAVQ9dXW1TeQ7WBCUxwb51p_QitErHwNjY3k6qC45_LGUYPhXnasN_jwolNHFmN8JQsP6K_rfHlfp_xyHzzp2EPQfplLltmny_Z46WBgPDfgHeqjRxc7lRv2BtEAQH9qcwj6sKDkdZQH3PdRw1MG3GBZKEHEnPLcxGxOO5NXxj0Vj9lAQLUjCkK-0OtlOhUGUciGH_GKobGpPT8fHagNFPwKjEwH_Mpd0eXCrlvRrtb0ZN47s_hLv5rqcGlSHsWkpdbgkTn8mE0Im3MIfsCR6xzLM6nDskcX8nU3JHnHgjF75hgkW5lFfMZKfpBPQvK5LKyzvDqtNr3MODgiDbfWcXVMqBYZnXZZ9hu6vdBi6up7J5i6oJ0C11dU7VARlad20t8Sp27f57xIuBKrNgtAltaKDMGgiFOJUOqMW17FuiwxX2FiI0ESX95PXuEl_bJBZ7vK-bQWoFZQDsWv0ZJ6mUMPWYSMZb3ug-eB7rPxJeFPx83BqATI7YwKvfYGAJJBqHUDku-PJQoyKvu-6230kzNUdGVBpPVe9vlGbRijg8drMse4",
        },
      };

      try {
        const response = await fetch(
          `https://connect-eu.catapultsports.com/api/v6/activities/${activityId}/athletes`,
          options
        );

        if (response.ok) {
          const data = await response.json();
          setAthletes(data);
        } else {
          console.error("Failed to fetch athletes");
          console.log({ activityId });
        }
      } catch (error) {
        console.error("Error fetching athletes:", error);
      }
    };

    fetchAthletes();
  }, [activityId]);

  const handleAthleteClick = (athlete) => {
    setSelectedAthlete(athlete);
  };

  const handleClosePopup = () => {
    setSelectedAthlete(null);
  };

  return (
    <div style={styles.listStyle}>
      <h3>List of Athletes:</h3>
      <ul style={styles.ul}>
        {athletes.map((athlete) => (
          <li key={athlete.id} style={styles.li}>
            <button
              style={styles.athleteButton}
              onClick={() => handleAthleteClick(athlete)}
            >
              {athlete.first_name} {athlete.last_name}
            </button>
          </li>
        ))}
      </ul>
      {selectedAthlete && (
        <AthletePopUp
          athleteId={selectedAthlete.id}
          activityId={activityId}
          athleteName={selectedAthlete.first_name}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

const styles = {
  ul: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap", // Allow items to wrap to the next row
    maxHeight: "350px", // Set a max height for the container
    overflowY: "auto", // Add a scrollbar when items exceed the max height
  },
  li: {
    flex: "0 0 50%", // Set each list item to take 50% of the width
  },
  athleteButton: {
    padding: "15px",
    margin: "5px",
    fontSize: "12px",
    backgroundColor: "#add8e6",
    border: "1px solid #6495ED",
    color: "black",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    width: "90%",
  },

  listStyle: {
    listStyle: "none",
    display: "flex", // Display buttons in a row
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },

  container: {
    display: "flex",
    height: "100vh", // Full viewport height
  },
};

export default AthletesInGivenActivity;
