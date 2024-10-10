import React, { useEffect, useState } from "react";
import axios from "axios";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  const fetchReminders = async () => {
    try {
      const response = await axios.get("http://localhost:3000/reminders");
      setReminders(response.data.reminders);
    } catch (error) {
      console.error("Error fetching reminders:", error);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []); // Empty array means this effect runs once on mount

  return (
    <div>
      <h1>Reminders</h1>
      {reminders.length > 0 ? (
        reminders.map((reminder) => (
          <div key={reminder._id}>
            <h3>{reminder.type}</h3>
            <p>{reminder.message}</p>
            <p>{new Date(reminder.time).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No reminders available.</p>
      )}
    </div>
  );
};

export default Reminders;

