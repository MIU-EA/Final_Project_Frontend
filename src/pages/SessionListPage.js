import React, {useEffect, useState} from 'react';
import SessionList from "../components/session/SessionList";
import SessionAPI from "../services/SessionAPI";

export default function SessionListPage() {
  const [sessions, setSessions] = useState([]);

  useEffect(function() {
    SessionAPI.listSessions().then(response => setSessions(response.data));
  }, []);

  return (
    <div>
      <h2 className="text-center">Sessions</h2>
      <SessionList sessions={sessions} />
    </div>
  )
}
