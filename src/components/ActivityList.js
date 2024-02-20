import React, { useEffect, useState, CSSProperties } from "react";
import ActivityDetails from "./ActivityDetails";
import ScaleLoader from "react-spinners/ScaleLoader";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await fetch(
        "https://connect-eu.catapultsports.com/api/v6/activities",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0NjFiMTExMS02ZjdhLTRkYmItOWQyOS0yMzAzOWZlMjI4OGUiLCJqdGkiOiJkOWRjYWQ1ZDMzNTcwYjFiOWJkN2E3MmUwNzIwZWY1MDVhYjM2NzkzM2ZkN2QwOTYwNDk2OWNhMDJmYzgwZGMxMmEzYTFhMGNmODc4MTgwMSIsImlhdCI6MTcwMTc5OTAxNi4zMzc0NTUsIm5iZiI6MTcwMTc5OTAxNi4zMzc0NTcsImV4cCI6NDg1NTM5OTAxNi4zMjc5NTMsInN1YiI6ImNjNjliNWVjLTRiNjktNGQ4Yi04NWM2LTUzNjRjNGYzNjU0ZCIsInNjb3BlcyI6WyJjb25uZWN0Iiwic2Vuc29yLXJlYWQtb25seSJdfQ.fzEY3fKHvEeT19pIUg5UWkS14PbfXjEKIxfoLJSnUzigJcVn0P6s02-mRkfjGgMKzmrgacrG83J1Q6BWAsGh9P-gFyKq7x5JcUIdupfFCepHLrmnOxwm0Y8jewYTAVQ9dXW1TeQ7WBCUxwb51p_QitErHwNjY3k6qC45_LGUYPhXnasN_jwolNHFmN8JQsP6K_rfHlfp_xyHzzp2EPQfplLltmny_Z46WBgPDfgHeqjRxc7lRv2BtEAQH9qcwj6sKDkdZQH3PdRw1MG3GBZKEHEnPLcxGxOO5NXxj0Vj9lAQLUjCkK-0OtlOhUGUciGH_GKobGpPT8fHagNFPwKjEwH_Mpd0eXCrlvRrtb0ZN47s_hLv5rqcGlSHsWkpdbgkTn8mE0Im3MIfsCR6xzLM6nDskcX8nU3JHnHgjF75hgkW5lFfMZKfpBPQvK5LKyzvDqtNr3MODgiDbfWcXVMqBYZnXZZ9hu6vdBi6up7J5i6oJ0C11dU7VARlad20t8Sp27f57xIuBKrNgtAltaKDMGgiFOJUOqMW17FuiwxX2FiI0ESX95PXuEl_bJBZ7vK-bQWoFZQDsWv0ZJ6mUMPWYSMZb3ug-eB7rPxJeFPx83BqATI7YwKvfYGAJJBqHUDku-PJQoyKvu-6230kzNUdGVBpPVe9vlGbRijg8drMse4",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setActivities(data);
      } else {
        console.error("Failed to fetch activities");
      }
    } catch (error) {
      console.error("Error fetching activities:", error);
    } finally {
      // Set loading to false when the request completes (regardless of success or failure)
      setLoading(false);
    }
  };

  const handleButtonClick = (activity) => {
    setSelectedActivity(activity);
  };
  const handleCloseModal = () => {
    setSelectedActivity(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        {loading ? (
          <ScaleLoader
            color={"blue"}
            loading={loading}
            size={"150"}
            speedMultiplier={2}
          />
        ) : (
          <ul style={styles.listStyle}>
            {activities.map((activity) => (
              <li key={activity.id}>
                <button
                  style={{
                    ...styles.button,
                    backgroundColor:
                      activity.id === selectedActivity?.id
                        ? "#add8e6"
                        : "white",
                  }}
                  onClick={() => handleButtonClick(activity)}
                >
                  {activity.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div style={styles.rightContainer}>
        {selectedActivity && (
          <ActivityDetails
            activity={selectedActivity}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

const styles = {
  loader: {},

  leftContainer: {
    marginTop: "90px",

    padding: "15px",
    overflowy: "auto",
    maxHeight: "150px",
    float: "left",

    width: "600px",
  },
  rightContainer: {
    marginTop: "90px",
    position: "fixed",
    padding: "20px",
    left: "45%",
    width: "800px",
  },
  button: {
    padding: "20px 20px",
    width: "100%",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    textAlign: "left",
    backgroundColor: "white",
    color: "black",
    border: "1px solid #6495ED", // Red border
    cursor: "pointer",
  },

  listStyle: {
    listStyle: "none",
    display: "flex", // Display buttons in a row
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
};

export default ActivityList;
