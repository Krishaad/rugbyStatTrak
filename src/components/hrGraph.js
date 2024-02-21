import React, { useState, useEffect } from "react";
import LinePlot from "./LinePlot";

function HrGraph({ athleteId, activityId }) {
  let param = "hr";
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchAthleteDetails = async () => {
      // Fetch athlete details using athleteId and activityId

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
          `https://connect-eu.catapultsports.com/api/v6/activities/${activityId}/athletes/${athleteId}/sensor?parameters=${param}`,
          options
        );

        if (response.ok) {
          const data = await response.json();

          const hrValues = data[0].data.map((entry) => entry.hr);
          console.log("Fetched data:", hrValues.length);
          setSensorData(hrValues);
          // You can set the data to state or process it further as needed
        } else {
          console.error("Failed to fetch athletes");
          console.log({ activityId });
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchAthleteDetails();
  }, [athleteId, activityId]); // Dependencies go here

  return (
    <div>
      <LinePlot data={sensorData} />

      <p>Heart rate</p>
    </div>
  );
}

export default HrGraph;
