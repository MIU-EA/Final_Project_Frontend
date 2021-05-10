import React from 'react';
import SessionListItem from "./SessionListItem";

export default function SessionList({ sessions }) {
  return (
    <div className="container">
      <div className="row">
        {
          sessions.map(session =>
            <div className="col-4 mt-4">
              <SessionListItem session={session} />
            </div>
          )
        }
      </div>
    </div>
  );
}
