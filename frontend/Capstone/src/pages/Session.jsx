import React, { useEffect, useState } from "react";
import axios from "axios";

const Sessions = () => {
  const [sessions, setSessions] = useState([]);

  const fetchSessions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/sessions");
      setSessions(response.data.sessions);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div>
      <h1>Sessions</h1>
      {sessions.length > 0 ? (
        sessions.map((session) => (
          <div key={session._id}>
            <h3>{session.title}</h3>
            <p>{session.description}</p>
          </div>
        ))
      ) : (
        <p>No sessions available.</p>
      )}
    </div>
  );
};

export default Sessions;
